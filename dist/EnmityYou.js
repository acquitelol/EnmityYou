function I(n){window.enmity.plugins.registerPlugin(n)}function R(n){return window.enmity.patcher.create(n)}function l(...n){return window.enmity.modules.getByProps(...n)}function v(...n){return window.enmity.modules.getByName(...n)}window.enmity.modules.common,window.enmity.modules.common.Constants,window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const u=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings;const y=window.enmity.modules.common.Users;window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking,window.enmity.modules.common.StyleSheet,window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components;const F=window.enmity.modules.common.Locale;window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;var O="EnmityYou",_="1.1.6",P="Allows you to use Enmity inside of the new You Tab. Enable from DevTools Widget \u279D Design Toggles :3",G=[{name:"Rosie<3",id:"581573474296791211"}],L="#ff91ff",E={name:O,version:_,description:P,authors:G,color:L};const{components:e}=window.enmity;e.Alert,e.Button,e.FlatList,e.Image,e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl,e.ScrollView,e.SectionList,e.StatusBar,e.StyleSheet,e.Switch,e.Text,e.TextInput,e.TouchableHighlight,e.TouchableOpacity,e.TouchableWithoutFeedback,e.Touchable;const S=e.View;e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox,e.FormDivider,e.FormHint,e.FormIcon,e.FormInput,e.FormLabel,e.FormRadio,e.FormRow,e.FormSection,e.FormSelect,e.FormSubLabel,e.FormSwitch,e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;function h(n){return window.enmity.assets.getIDByName(n)}const p={general:"ENMITY",plugins:"ENMITY_PLUGINS",themes:"ENMITY_THEMES",page:"ENMITY_PAGE"},c={general:"Enmity",plugins:"EnmityPlugins",themes:"EnmityThemes",page:"EnmityCustomPage"},D={general:"General",plugins:"Plugins",themes:"Themes",page:"Page"},A={general:{uri:"https://files.enmity.app/icon-64.png"},plugins:h("ic_activity_24px"),themes:h("img_nitro_star"),page:null},x={general:[c.general],plugins:[c.general],themes:[c.general],page:[]},T={general:null,plugins:p.general,themes:p.general,page:null},i=Object.keys(c).map(n=>({[n]:{upper:p[n],route:c[n],title:D[n],icon:A[n],relationship:T[n],breadcrumbs:x[n]}})).reduce((n,s)=>({...n,...s}),{}),B=v("getScreens"),k=l("SETTING_RENDERER_CONFIGS");var M=()=>{const{Enmity:n,EnmityPlugins:s,EnmityThemes:g}=B(y.getCurrentUser()),[m,r]=[s,g].map(t=>({navigation:o,route:a})=>(u.useEffect(()=>{a!=null&&a.hasSetHeaderRight||(a.hasSetHeaderRight=!0,o.setOptions({headerRight:()=>t.headerRight?u.createElement(S,{style:{left:12}},u.createElement(t.headerRight,null)):null}))},[]),u.createElement(t.render,null)));Object.assign(k.SETTING_RENDERER_CONFIGS,Object.entries({general:{route:i.general.route,getComponent:()=>n.render},plugins:{route:i.plugins.route,getComponent:()=>m},themes:{route:i.themes.route,getComponent:()=>r},page:{route:i.page.route,getComponent:()=>({navigation:t,route:{params:o}})=>{var a;const w=(a=o.pagePanel)!=null?a:S;return u.useEffect(()=>{o.pageName&&!o.hasSetTitle&&(o.hasSetTitle=!0,t.setOptions({title:o.pageName}))},[]),u.createElement(w,null)}}}).map(([t,o])=>({[i[t].upper]:{type:"route",icon:i[t].icon,screen:o}})).reduce((t,o)=>({...t,...o}),{}))};const U=l("getSettingTitleConfig");var j=n=>{n.after(U,"getSettingTitleConfig",(s,g,m)=>{const r=Object.keys(i).map(t=>({[i[t].upper]:i[t].title})).reduce((t,o)=>({...t,...o}),{});return{...m,...r}})};const H=l("SETTING_RENDERER_CONFIGS");var V=()=>{Object.assign(H.SETTING_RELATIONSHIPS,Object.keys(T).map(n=>({[i[n].upper]:i[n].relationship})).reduce((n,s)=>({...n,...s}),{}))};const Y=l("useSettingsOverviewScreenLayout");var $=n=>{n.after(Y,"useSettingsOverviewScreenLayout",(s,g,m)=>{const r=m.findIndex(o=>o==null?void 0:o.settings.find(a=>a==="ACCOUNT"));!m.find(o=>o.title===i.general.route)&&(m==null||m.splice(r===-1?1:r+1,0,{title:i.general.route,settings:[i.general.upper,i.plugins.upper,i.themes.upper]}));const t=m.findIndex(o=>o.title===F.Messages.SUPPORT);m[t].settings=m[t].settings.filter(o=>o!=="UPLOAD_DEBUG_LOGS")})};const z=l("useSettingSearch"),W=l("SETTING_RENDERER_CONFIGS");var K=n=>{n.after(z,"useSettingSearch",(s,g,m)=>{m.results=m.results.filter(r=>r.breadcrumbs[0]!==i.general.title),Object.keys(i).filter(r=>r!=="page").forEach(r=>{const{route:t,upper:o,title:a,breadcrumbs:w,icon:b}=i[r];t.toLowerCase().includes(m.text.toLowerCase())&&!m.results.find(C=>C.setting===o)&&m.results.push({rendererData:W.SETTING_RENDERER_CONFIGS[o],setting:o,title:a,breadcrumbs:w,icon:b})})})};const N=n=>(M(),K(n)),d=R(E.name),f=l("_currentDispatchActionType"),q=(...n)=>n.forEach(s=>l(s)[s]={...l(s)[s]}),J={...E,onStart(){if(q("SETTING_RENDERER_CONFIGS","SETTING_RELATIONSHIPS"),j(d),$(d),V(),y.getCurrentUser())N(d);else{let n=function(){f.unsubscribe("CONNECTION_OPEN",n),N(d)};f.subscribe("CONNECTION_OPEN",n)}},onStop(){d.unpatchAll()}};I(J);
