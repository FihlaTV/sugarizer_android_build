/*! Sugarizer 2019-09-21 */
define(["webL10n","activity/activity"],function(){var a,b={},c=l10n_s;return b.elements=[],b.tourInit=1,b.tourStandard=2,b.init=function(d){var e,f=c.get("TutoPrev"),g=c.get("TutoNext"),h=c.get("TutoEnd");e=d==b.tourInit?[{reflex:"click",element:b.getElement("activity"),placement:"bottom",title:c.get("TutoActivityTitle"),content:c.get("TutoActivityContent")},{element:b.getElement("title"),placement:"right",title:c.get("TutoTitleTitle"),content:c.get("TutoTitleContent")},{reflex:"click",element:b.getElement("network"),placement:"bottom",title:c.get("TutoNetworkTitle"),content:c.get("TutoNetworkContent")},{element:b.getElement("shared"),placement:"right",title:c.get("TutoSharedTitle"),content:c.get("TutoSharedContent")},{element:b.getElement("help"),placement:"bottom",title:c.get("TutoHelpTitle"),content:c.get("TutoHelpContent")},{element:b.getElement("stop"),placement:"bottom",title:c.get("TutoStopTitle"),content:c.get("TutoStopContent")}]:[{element:"",orphan:!0,placement:"bottom",title:c.get("TutoExplainTitle"),content:c.get("TutoExplainContent")},{element:b.getElement("node"),placement:"right",title:c.get("TutoNodeTitle"),content:c.get("TutoNodeContent")},{element:b.getElement("color"),placement:"bottom",title:c.get("TutoColorTitle"),content:c.get("TutoColorContent")},{element:b.getElement("add"),placement:"bottom",title:c.get("TutoAddTitle"),content:c.get("TutoAddContent")},{element:b.getElement("remove"),placement:"bottom",title:c.get("TutoRemoveTitle"),content:c.get("TutoRemoveContent")},{element:b.getElement("undo"),placement:"bottom",title:c.get("TutoUndoTitle"),content:c.get("TutoUndoContent")},{element:b.getElement("redo"),placement:"bottom",title:c.get("TutoRedoTitle"),content:c.get("TutoRedoContent")},{element:b.getElement("zoom"),placement:"bottom",title:c.get("TutoZoomTitle"),content:c.get("TutoZoomContent")},{element:b.getElement("png"),placement:"bottom",title:c.get("TutoPngTitle"),content:c.get("TutoPngContent")}],a=new Tour({template:"\t\t\t<div class='popover tour'>\t\t\t\t<div class='arrow'></div>\t\t\t\t<h3 class='popover-title tutorial-title'></h3>\t\t\t\t<div class='popover-content'></div>\t\t\t\t<div class='popover-navigation' style='display: flex; flex-wrap:wrap; justify-content: center; align-items: center'>\t\t\t\t\t<div class='tutorial-prev-icon icon-button' data-role='prev'>\t\t\t\t\t\t<div class='tutorial-prev-icon1 web-activity'>\t\t\t\t\t\t\t<div class='tutorial-prev-icon2 web-activity-icon'></div>\t\t\t\t\t\t\t<div class='tutorial-prev-icon3 web-activity-disable'></div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<div class='icon-tutorial-text'>"+f+"</div>\t\t\t\t\t</div>\t\t\t\t\t<span data-role='separator' style='margin: 4px'>|</span>\t\t\t\t\t<div class='tutorial-next-icon icon-button' data-role='next'>\t\t\t\t\t\t<div class='tutorial-next-icon1 web-activity'>\t\t\t\t\t\t\t<div class='tutorial-next-icon2 web-activity-icon'></div>\t\t\t\t\t\t\t<div class='tutorial-next-icon3 web-activity-disable'></div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<div class='icon-tutorial-text'>"+g+"</div>\t\t\t\t\t</div>\t\t\t\t\t<div class='tutorial-end-icon icon-button' data-role='end'>\t\t\t\t\t\t<div class='tutorial-end-icon1 web-activity'>\t\t\t\t\t\t\t<div class='tutorial-end-icon2 web-activity-icon'></div>\t\t\t\t\t\t\t<div class='tutorial-end-icon3 web-activity-disable'></div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<div class='icon-tutorial-text'>"+h+"</div>\t\t\t\t\t</div>\t\t\t\t</div>\t\t\t</div>",storage:!1,backdrop:!0,steps:e}),a.init()},b.setElement=function(a,c){b.elements[a]=c},b.getElement=function(a){return b.elements[a]},b.start=function(c){b.init(c),a.start(!0)},b});