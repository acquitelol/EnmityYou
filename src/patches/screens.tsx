import { React, Users } from 'enmity/metro/common';
import { getByProps, getByName } from 'enmity/metro';
import { View } from 'enmity/components';
import { Patcher } from 'enmity/patcher';
import { data } from '../data';
import insteadPatchHook from '../insteadPatchHook';
import { Screens } from '../def';

const Screens = getByProps("useSettingScreen", "useSettingScreens");
const getScreens = getByName("getScreens");

export default (Patcher: Patcher) => {
    insteadPatchHook(Patcher, Screens, "useSettingScreen", "screen");

    Patcher.after(Screens, "useSettingScreens", (_, __, res) => {
        const { Enmity, EnmityPlugins, EnmityThemes } = getScreens(Users.getCurrentUser());

        const [ Plugins, Themes ] = [ EnmityPlugins, EnmityThemes ]
            .map(Screen => ({ navigation, route }) => {
                React.useEffect(() => {
                    if (!route?.hasSetHeaderRight) {
                        route.hasSetHeaderRight = true;

                        navigation.setOptions({ 
                            headerRight: () => <View style={{ left: 12 }}>
                                <Screen.headerRight />
                            </View>
                        })
                    }
                }, [])

                return <Screen.render />
            })

        return {
            ...res,
            [data.general.upper]: {
                route: data.general.route,
                getComponent: () => Enmity.render
            },
            [data.plugins.upper]: {
                route: data.plugins.route,
                getComponent: () => Plugins
            },
            [data.themes.upper]: {
                route: data.themes.route,
                getComponent: () => Themes
            },
            [data.page.upper]: {
                route: data.page.route,
                getComponent: () => ({ navigation, route: { params } }) => {
                    const Component = params.pagePanel ?? View;
    
                    React.useEffect(() => {
                        if (params.pageName && !params.hasSetTitle) {
                            params.hasSetTitle = true;
                            navigation.setOptions({ title: params.pageName })
                        }
                    }, [])
    
                    return <Component />;
                }
            }
        };
    });
};