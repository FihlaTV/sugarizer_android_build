/*! Sugarizer 2019-09-21 */
var GUI=(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([["player"],{"./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/player.css":function(a,b,c){b=a.exports=c("./node_modules/css-loader/lib/css-base.js")(!1),b.push([a.i,".player_stage-only_3WHZN {\n    width: calc(480px + 1rem);\n}\n\n.player_editor_wkTja {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n}\n\n.player_stage-only_3WHZN * {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n",""]),b.locals={"stage-only":"player_stage-only_3WHZN",stageOnly:"player_stage-only_3WHZN",editor:"player_editor_wkTja"}},"./src/playground/player.css":function(a,b,c){var d=c("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/player.css");"string"==typeof d&&(d=[[a.i,d,""]]);var e,f={hmr:!0};f.transform=e,f.insertInto=void 0;c("./node_modules/style-loader/lib/addStyles.js")(d,f);d.locals&&(a.exports=d.locals)},"./src/playground/player.jsx":function(a,b,c){"use strict";c.r(b);var d=c("./node_modules/classnames/index.js"),e=c.n(d),f=c("./node_modules/prop-types/index.js"),g=c.n(f),h=c("./node_modules/react/index.js"),i=c.n(h),j=c("./node_modules/react-dom/index.js"),k=c.n(j),l=c("./node_modules/react-redux/es/index.js"),m=c("./node_modules/redux/es/index.js"),n=c("./src/components/box/box.jsx"),o=c("./src/containers/gui.jsx"),p=c("./src/lib/hash-parser-hoc.jsx"),q=c("./src/lib/app-state-hoc.jsx"),r=c("./src/lib/titled-hoc.jsx"),s=c("./src/reducers/mode.js"),t=c("./src/playground/player.css"),u=c.n(t),v=function(a){var b=a.isPlayerOnly,c=a.onSeeInside,d=a.projectId;return i.a.createElement(n.default,{className:e()(b?u.a.stageOnly:u.a.editor)},b&&i.a.createElement("button",{onClick:c},"See inside"),i.a.createElement(o.default,{enableCommunity:!0,isPlayerOnly:b,projectId:d}))};v.propTypes={isPlayerOnly:g.a.bool,onSeeInside:g.a.func,projectId:g.a.string};var w=function(a){return{isPlayerOnly:a.scratchGui.mode.isPlayerOnly}},x=function(a){return{onSeeInside:function(){return a(Object(s.setPlayer)(!1))}}},y=Object(l.connect)(w,x)(v),z=Object(m.compose)(q.default,p.default,r.default)(y),A=document.createElement("div");document.body.appendChild(A),k.a.render(i.a.createElement(z,{isPlayerOnly:!0}),A)}},[["./src/playground/player.jsx","lib.min"]]]);