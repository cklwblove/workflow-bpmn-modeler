(function(e){function t(t){for(var a,o,s=t[0],l=t[1],c=t[2],d=0,m=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(m.length)m.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/bpmn-modeler/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"238b":function(e,t,n){"use strict";var a=n("8ed9"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("vue-bpmn")],1)},i=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flow-containers"},[n("el-container",[n("el-header",[n("div",{staticStyle:{display:"flex",padding:"10px 20px"}},[n("el-upload",{staticClass:"load",staticStyle:{"margin-riight":"20px"},attrs:{action:"","before-upload":e.openBpmn}},[n("el-button",{attrs:{size:"mini",icon:"el-icon-folder-opened",type:"primary"}},[e._v("加载xml")])],1),n("el-button",{attrs:{size:"mini",icon:"el-icon-circle-plus",type:"primary"},on:{click:e.newDiagram}},[e._v("新建")]),n("el-button",{attrs:{size:"mini",icon:"el-icon-download",type:"primary"},on:{click:function(t){return e.saveXML(!0)}}},[e._v("下载xml")]),n("el-button",{attrs:{size:"mini",icon:"el-icon-picture",type:"primary"},on:{click:function(t){return e.saveImg("svg",!0)}}},[e._v("下载svg")]),n("el-button",{attrs:{size:"mini",icon:"el-icon-back",type:"primary"},on:{click:function(t){e.modeler.get("commandStack").undo()}}},[e._v("后退")]),n("el-button",{attrs:{size:"mini",icon:"el-icon-right",type:"primary"},on:{click:function(t){e.modeler.get("commandStack").redo()}}},[e._v("前进")])],1)]),n("el-container",{staticStyle:{"align-items":"stretch"}},[n("el-main",{attrs:{height:"100%"}},[n("div",{ref:"canvas",staticClass:"canvas"})]),n("el-aside",{staticStyle:{width:"300px","background-color":"#f0f2f5"}},[e.modeler?n("panel",{attrs:{modeler:e.modeler,users:e.users,groups:e.groups,categorys:e.categorys}}):e._e()],1)],1)],1)],1)},s=[],l=(n("c975"),n("b0c0"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("ddb0"),n("2b3d"),n("96cf"),n("1da1")),c={"Activate the global connect tool":"激活全局连接工具","Append {type}":"添加 {type}","Add Lane above":"在上面添加道","Divide into two Lanes":"分割成两个道","Divide into three Lanes":"分割成三个道","Add Lane below":"在下面添加道","Append compensation activity":"追加补偿活动","Change type":"修改类型","Connect using Association":"使用关联连接","Connect using Sequence/MessageFlow or Association":"使用顺序/消息流或者关联连接","Connect using DataInputAssociation":"使用数据输入关联连接",Remove:"移除","Activate the hand tool":"激活抓手工具","Activate the lasso tool":"激活套索工具","Activate the create/remove space tool":"激活创建/删除空间工具","Create expanded SubProcess":"创建扩展子过程","Create IntermediateThrowEvent/BoundaryEvent":"创建中间抛出事件/边界事件","Create Pool/Participant":"创建池/参与者","Parallel Multi Instance":"并行多重事件","Sequential Multi Instance":"时序多重事件",DataObjectReference:"数据对象参考",DataStoreReference:"数据存储参考",Loop:"循环","Ad-hoc":"即席","Create {type}":"创建 {type}",Task:"任务","Send Task":"发送任务","Receive Task":"接收任务","User Task":"用户任务","Manual Task":"手工任务","Business Rule Task":"业务规则任务","Service Task":"服务任务","Script Task":"脚本任务","Call Activity":"调用活动","Sub Process (collapsed)":"子流程（折叠的）","Sub Process (expanded)":"子流程（展开的）","Start Event":"开始事件",StartEvent:"开始事件","Intermediate Throw Event":"中间事件","End Event":"结束事件",EndEvent:"结束事件","Create Gateway":"创建网关","Create Intermediate/Boundary Event":"创建中间/边界事件","Message Start Event":"消息开始事件","Timer Start Event":"定时开始事件","Conditional Start Event":"条件开始事件","Signal Start Event":"信号开始事件","Error Start Event":"错误开始事件","Escalation Start Event":"升级开始事件","Compensation Start Event":"补偿开始事件","Message Start Event (non-interrupting)":"消息开始事件（非中断）","Timer Start Event (non-interrupting)":"定时开始事件（非中断）","Conditional Start Event (non-interrupting)":"条件开始事件（非中断）","Signal Start Event (non-interrupting)":"信号开始事件（非中断）","Escalation Start Event (non-interrupting)":"升级开始事件（非中断）","Message Intermediate Catch Event":"消息中间捕获事件","Message Intermediate Throw Event":"消息中间抛出事件","Timer Intermediate Catch Event":"定时中间捕获事件","Escalation Intermediate Throw Event":"升级中间抛出事件","Conditional Intermediate Catch Event":"条件中间捕获事件","Link Intermediate Catch Event":"链接中间捕获事件","Link Intermediate Throw Event":"链接中间抛出事件","Compensation Intermediate Throw Event":"补偿中间抛出事件","Signal Intermediate Catch Event":"信号中间捕获事件","Signal Intermediate Throw Event":"信号中间抛出事件","Message End Event":"消息结束事件","Escalation End Event":"定时结束事件","Error End Event":"错误结束事件","Cancel End Event":"取消结束事件","Compensation End Event":"补偿结束事件","Signal End Event":"信号结束事件","Terminate End Event":"终止结束事件","Message Boundary Event":"消息边界事件","Message Boundary Event (non-interrupting)":"消息边界事件（非中断）","Timer Boundary Event":"定时边界事件","Timer Boundary Event (non-interrupting)":"定时边界事件（非中断）","Escalation Boundary Event":"升级边界事件","Escalation Boundary Event (non-interrupting)":"升级边界事件（非中断）","Conditional Boundary Event":"条件边界事件","Conditional Boundary Event (non-interrupting)":"条件边界事件（非中断）","Error Boundary Event":"错误边界事件","Cancel Boundary Event":"取消边界事件","Signal Boundary Event":"信号边界事件","Signal Boundary Event (non-interrupting)":"信号边界事件（非中断）","Compensation Boundary Event":"补偿边界事件","Exclusive Gateway":"互斥网关","Parallel Gateway":"并行网关","Inclusive Gateway":"相容网关","Complex Gateway":"复杂网关","Event based Gateway":"事件网关",Transaction:"转运","Sub Process":"子流程","Event Sub Process":"事件子流程","Collapsed Pool":"折叠池","Expanded Pool":"展开池","no parent for {element} in {parent}":"在{parent}里，{element}没有父类","no shape type specified":"没有指定的形状类型","flow elements must be children of pools/participants":"流元素必须是池/参与者的子类","out of bounds release":"out of bounds release","more than {count} child lanes":"子道大于{count} ","element required":"元素不能为空","diagram not part of bpmn:Definitions":"流程图不符合bpmn规范","no diagram to display":"没有可展示的流程图","no process or collaboration to display":"没有可展示的流程/协作","element {element} referenced by {referenced}#{property} not yet drawn":"由{referenced}#{property}引用的{element}元素仍未绘制","already rendered {element}":"{element} 已被渲染","failed to import {element}":"导入{element}失败",Id:"标识",Name:"名称",General:"常规",Details:"详情","Message Name":"消息名称",Message:"消息",Initiator:"创建者","Asynchronous Continuations":"持续异步","Asynchronous Before":"异步前","Asynchronous After":"异步后","Job Configuration":"工作配置",Exclusive:"排除","Job Priority":"工作优先级","Retry Time Cycle":"重试时间周期",Documentation:"文档","Element Documentation":"元素文档","History Configuration":"历史配置","History Time To Live":"历史的生存时间",Forms:"表单","Form Key":"表单key","Form Fields":"表单字段","Business Key":"业务key","Form Field":"表单字段",ID:"编号",Type:"类型",Label:"名称","Default Value":"默认值",Validation:"校验","Add Constraint":"添加约束",Config:"配置",Properties:"属性","Add Property":"添加属性",Value:"值",Listeners:"监听器","Execution Listener":"执行监听","Event Type":"事件类型","Listener Type":"监听器类型","Java Class":"Java类",Expression:"表达式","Must provide a value":"必须提供一个值","Delegate Expression":"代理表达式",Script:"脚本","Script Format":"脚本格式","Script Type":"脚本类型","Inline Script":"内联脚本","External Script":"外部脚本",Resource:"资源","Field Injection":"字段注入",Extensions:"扩展","Input/Output":"输入/输出","Input Parameters":"输入参数","Output Parameters":"输出参数",Parameters:"参数","Output Parameter":"输出参数","Timer Definition Type":"定时器定义类型","Timer Definition":"定时器定义",Date:"日期",Duration:"持续",Cycle:"循环",Signal:"信号","Signal Name":"信号名称",Escalation:"升级",Error:"错误","Link Name":"链接名称",Condition:"条件名称","Variable Name":"变量名称","Variable Event":"变量事件","Specify more than one variable change event as a comma separated list.":"多个变量事件以逗号隔开","Wait for Completion":"等待完成","Activity Ref":"活动参考","Version Tag":"版本标签",Executable:"可执行文件","External Task Configuration":"扩展任务配置","Task Priority":"任务优先级",External:"外部",Connector:"连接器","Must configure Connector":"必须配置连接器","Connector Id":"连接器编号",Implementation:"实现方式","Field Injections":"字段注入",Fields:"字段","Result Variable":"结果变量",Topic:"主题","Configure Connector":"配置连接器","Input Parameter":"输入参数",Assignee:"代理人","Candidate Users":"候选用户","Candidate Groups":"候选组","Due Date":"到期时间","Follow Up Date":"跟踪日期",Priority:"优先级","The follow up date as an EL expression (e.g. ${someDate} or an ISO date (e.g. 2015-06-26T09:54:00)":"跟踪日期必须符合EL表达式，如： ${someDate} ,或者一个ISO标准日期，如：2015-06-26T09:54:00","The due date as an EL expression (e.g. ${someDate} or an ISO date (e.g. 2015-06-26T09:54:00)":"跟踪日期必须符合EL表达式，如： ${someDate} ,或者一个ISO标准日期，如：2015-06-26T09:54:00",Variables:"变量"};function u(e,t){return t=t||{},e=c[e]||e,e.replace(/{([^}]+)}/g,(function(e,n){var a=t[n];return null!==c[t[n]]&&"undefined"!==c[t[n]]&&(a=c[t[n]]),a||"{"+n+"}"}))}var d=n("7024"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"propertyPanel",staticClass:"property-panel"},[e.element?n(e.getComponent,{tag:"component",attrs:{element:e.element,modeler:e.modeler,users:e.users,groups:e.groups,categorys:e.categorys}}):e._e()],1)},p=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("x-form",{ref:"xForm",attrs:{config:e.formConfig},model:{value:e.formData,callback:function(t){e.formData=t},expression:"formData"}})],1)},b=[],v=(n("4160"),n("a15b"),n("1276"),n("5530")),y=n("c49e"),h=n("a8b6");h["a"].set({input:{size:"mini"},xform:{form:{labelPosition:"top",size:"mini"}}});var g={components:{xForm:y["a"].xForm},props:{modeler:{type:Object,required:!0},element:{type:Object,required:!0},categorys:{type:Array,required:!0}},watch:{"formData.id":function(e){this.updateProperties({id:e})},"formData.name":function(e){this.updateProperties({name:e})},"formData.color":function(e){this.setColor({fill:null,stroke:e}),this.updateProperties({color:e})}},methods:{updateProperties:function(e){var t=this.modeler.get("modeling");t.updateProperties(this.element,e)},setColor:function(e){var t=this.modeler.get("modeling");t.setColor(this.element,e)}}},w={mixins:[g],props:{users:{type:Array,required:!0},groups:{type:Array,required:!0}},data:function(){return{userTypeOption:[{label:"指定人员",value:"assignee"},{label:"候选人员",value:"candidateUsers"},{label:"候选组",value:"candidateGroups"}],formData:{}}},computed:{formConfig:function(){var e=this;return{inline:!1,item:[{xType:"input",name:"id",label:"节点 id",rules:[{required:!0,message:"Id 不能为空"}]},{xType:"input",name:"name",label:"节点名称"},{xType:"colorPicker",name:"color",label:"节点颜色"},{xType:"select",name:"userType",label:"人员类型",dic:e.userTypeOption},{xType:"select",name:"assignee",label:"指定人员",allowCreate:!0,filterable:!0,dic:{data:e.users,label:"name",value:"id"},show:"assignee"===e.formData.userType},{xType:"select",name:"candidateUsers",label:"候选人员",multiple:!0,allowCreate:!0,filterable:!0,dic:{data:e.users,label:"name",value:"id"},show:"candidateUsers"===e.formData.userType},{xType:"select",name:"candidateGroups",label:"候选组",multiple:!0,allowCreate:!0,filterable:!0,dic:{data:e.groups,label:"name",value:"id"},show:"candidateGroups"===e.formData.userType},{xType:"switch",name:"async",label:"异步",activeText:"是",inactiveText:"否"},{xType:"input",name:"priority",label:"优先级"},{xType:"input",name:"formKey",label:"表单标识key"},{xType:"input",name:"skipExpression",label:"跳过表达式"},{xType:"datePicker",type:"datetime",name:"dueDate",label:"到期时间"}]}}},watch:{"formData.userType":function(e){var t=this,n=["assignee","candidateUsers","candidateGroups"];n.forEach((function(e){delete t.element.businessObject.$attrs["flowable:".concat(e)],delete t.formData[e]}))},"formData.assignee":function(e){"assignee"===this.formData.userType&&this.updateProperties({"flowable:assignee":e})},"formData.candidateUsers":function(e){"candidateUsers"===this.formData.userType&&this.updateProperties({"flowable:candidateUsers":null===e||void 0===e?void 0:e.join(",")})},"formData.candidateGroups":function(e){"candidateGroups"===this.formData.userType&&this.updateProperties({"flowable:candidateGroups":null===e||void 0===e?void 0:e.join(",")})},"formData.async":function(e){e?this.updateProperties({"flowable:async":!0}):delete this.element.businessObject.$attrs["flowable:async"]},"formData.dueDate":function(e){e?this.updateProperties({"flowable:dueDate":e}):delete this.element.businessObject.$attrs["flowable:dueDate"]},"formData.formKey":function(e){e?this.updateProperties({"flowable:formKey":e}):delete this.element.businessObject.$attrs["flowable:formKey"]},"formData.priority":function(e){e?this.updateProperties({"flowable:priority":e}):delete this.element.businessObject.$attrs["flowable:priority"]},"formData.skipExpression":function(e){e?this.updateProperties({"flowable:skipExpression":e}):delete this.element.businessObject.$attrs["flowable:skipExpression"]},element:{handler:function(e){var t=Object(v["a"])(Object(v["a"])({},this.element.businessObject),this.element.businessObject.$attrs);for(var n in t)if(0===n.indexOf("flowable:")){var a,r=n.replace("flowable:","");if(t[r]=t[n],delete t[n],"candidateUsers"===r)t.userType="candidateUsers",t[r]=(null===(a=t[r])||void 0===a?void 0:a.split(","))||[];else if("candidateGroups"===r){var i;t.userType="candidateGroups",t[r]=(null===(i=t[r])||void 0===i?void 0:i.split(","))||[]}else"assignee"===r&&(t.userType="assignee")}this.formData=t},immediate:!0}}},x=w,E=n("2877"),T=Object(E["a"])(x,f,b,!1,null,null,null),D=T.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("x-form",{ref:"xForm",attrs:{config:e.formConfig},model:{value:e.formData,callback:function(t){e.formData=t},expression:"formData"}})],1)},C=[],O={mixins:[g],data:function(){return{formData:{}}},computed:{formConfig:function(){return{inline:!1,item:[{xType:"input",name:"id",label:"节点 id",rules:[{required:!0,message:"Id 不能为空"}]},{xType:"input",name:"name",label:"节点名称"},{xType:"colorPicker",name:"color",label:"节点颜色"},{xType:"input",name:"initiator",label:"发起人"},{xType:"input",name:"formKey",label:"表单标识key"}]}}},watch:{"formData.initiator":function(e){e?this.updateProperties({"flowable:initiator":e}):delete this.element.businessObject.$attrs["flowable:initiator"]},"formData.formKey":function(e){e?this.updateProperties({"flowable:formKey":e}):delete this.element.businessObject.$attrs["flowable:formKey"]},element:{handler:function(e){var t=Object(v["a"])(Object(v["a"])({},this.element.businessObject),this.element.businessObject.$attrs);for(var n in t)if(0===n.indexOf("flowable:")){var a=n.replace("flowable:","");t[a]=t[n],delete t[n]}this.formData=t},immediate:!0}}},j=O,k=Object(E["a"])(j,P,C,!1,null,null,null),S=k.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("x-form",{ref:"xForm",attrs:{config:e.formConfig},model:{value:e.formData,callback:function(t){e.formData=t},expression:"formData"}})],1)},I=[],B={mixins:[g],data:function(){return{formData:{}}},computed:{formConfig:function(){var e=this;return{inline:!1,item:[{xType:"select",name:"processCategory",label:"流程分类",dic:{data:e.categorys,label:"name",value:"id"}},{xType:"input",name:"id",label:"流程标识key",rules:[{required:!0,message:"Id 不能为空"}]},{xType:"input",name:"name",label:"流程名称"},{xType:"colorPicker",name:"color",label:"节点颜色"}]}}},watch:{"formData.processCategory":function(e){e?this.updateProperties({"flowable:processCategory":e}):delete this.element.businessObject.$attrs["flowable:processCategory"]},element:{handler:function(e){var t=Object(v["a"])(Object(v["a"])({},this.element.businessObject),this.element.businessObject.$attrs);for(var n in t)if(0===n.indexOf("flowable:")){var a=n.replace("flowable:","");t[a]=t[n],delete t[n]}this.formData=t},immediate:!0}}},A=B,_=Object(E["a"])(A,M,I,!1,null,null,null),$=_.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("x-form",{ref:"xForm",attrs:{config:e.formConfig},model:{value:e.formData,callback:function(t){e.formData=t},expression:"formData"}})],1)},N=[],F={mixins:[g],data:function(){return{formData:{}}},computed:{formConfig:function(){return{inline:!1,item:[{xType:"input",name:"id",label:"节点 id",rules:[{required:!0,message:"Id 不能为空"}]},{xType:"input",name:"name",label:"节点名称"},{xType:"colorPicker",name:"color",label:"节点颜色"},{xType:"input",name:"conditionExpression",label:"跳转条件"},{xType:"input",name:"skipExpression",label:"跳过表达式"}]}}},watch:{"formData.conditionExpression":function(e){if(e){var t=this.modeler.get("moddle").create("bpmn:FormalExpression",{body:"<![CDATA[".concat(e,"]]>")});this.updateProperties({conditionExpression:t})}else delete this.element.businessObject["conditionExpression"]},"formData.skipExpression":function(e){e?this.updateProperties({skipExpression:e}):delete this.element.businessObject.$attrs["skipExpression"]},element:{handler:function(e){var t=Object(v["a"])(Object(v["a"])({},this.element.businessObject),this.element.businessObject.$attrs);for(var n in t){if(0===n.indexOf("flowable:")){var a=n.replace("flowable:","");t[a]=t[n],delete t[n]}var r;if("conditionExpression"===n)t[n]=null===(r=t[n].body)||void 0===r?void 0:r.replace(/<!\[CDATA\[(.+)\]\]>/,"$1")}this.formData=t},immediate:!0}}},R=F,q=Object(E["a"])(R,L,N,!1,null,null,null),G=q.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("x-form",{ref:"xForm",attrs:{config:e.formConfig},model:{value:e.formData,callback:function(t){e.formData=t},expression:"formData"}})],1)},z=[],K={mixins:[g],data:function(){return{formData:{}}},computed:{formConfig:function(){return{inline:!1,item:[{xType:"input",name:"id",label:"节点 id",rules:[{required:!0,message:"Id 不能为空"}]},{xType:"input",name:"name",label:"节点名称"},{xType:"colorPicker",name:"color",label:"节点颜色"},{xType:"switch",name:"async",label:"异步",activeText:"是",inactiveText:"否"}]}}},watch:{"formData.async":function(e){e?this.updateProperties({"flowable:async":!0}):delete this.element.businessObject.$attrs["flowable:async"]},element:{handler:function(e){var t=Object(v["a"])(Object(v["a"])({},this.element.businessObject),this.element.businessObject.$attrs);for(var n in t)if(0===n.indexOf("flowable:")){var a=n.replace("flowable:","");t[a]=t[n],delete t[n]}this.formData=t},immediate:!0}}},V=K,J=Object(E["a"])(V,U,z,!1,null,null,null),X=J.exports,H={name:"PropertyPanel",components:{processPanel:$,taskPanel:D,startEndPanel:S,sequenceFlowPanel:G,gatewayPanel:X},props:{users:{type:Array,required:!0},groups:{type:Array,required:!0},categorys:{type:Array,required:!0},modeler:{type:Object,required:!0}},data:function(){return{element:null,form:{id:"",name:"",color:null},roles:[{value:"manager",label:"经理"},{value:"personnel",label:"人事"},{value:"charge",label:"主管"}]}},computed:{getComponent:function(){var e,t=null===(e=this.element)||void 0===e?void 0:e.type;return"bpmn:StartEvent"===t||"bpmn:EndEvent"===t?"startEndPanel":"bpmn:UserTask"===t?"taskPanel":"bpmn:SequenceFlow"===t?"sequenceFlowPanel":"bpmn:ExclusiveGateway"===t?"gatewayPanel":"bpmn:Process"===t?"processPanel":null}},mounted:function(){this.handleModeler()},methods:{handleModeler:function(){var e=this;this.modeler.on("element.click",(function(t){var n=t.element;console.log(n),"bpmn:Process"===n.type&&(e.element=n)})),this.modeler.on("selection.changed",(function(t){e.element=null;var n=t.newSelection[0];n&&e.$nextTick().then((function(){e.element=n}))}))}}},W=H,Q=(n("d7ca"),Object(E["a"])(W,m,p,!1,null,null,null)),Y=Q.exports,Z=(n("4de4"),n("d4ec")),ee=n("bee2"),te=function(){function e(){Object(Z["a"])(this,e),this.controls=[],this.init()}return Object(ee["a"])(e,[{key:"init",value:function(){this.controls=[{action:"create.start-event",title:"开始"},{action:"create.intermediate-event",title:"中间"},{action:"create.end-event",title:"结束"},{action:"create.exclusive-gateway",title:"网关"},{action:"create.task",title:"任务"},{action:"create.user-task",title:"用户任务"},{action:"create.user-sign-task",title:"会签任务"},{action:"create.subprocess-expanded",title:"子流程"},{action:"create.data-object",title:"数据对象"},{action:"create.data-store",title:"数据存储"},{action:"create.participant-expanded",title:"扩展流程"},{action:"create.group",title:"分组"}]}},{key:"getControl",value:function(e){var t=this.controls.filter((function(t){return t.action===e}));return t[0]||{}}}]),e}();n("99af"),n("fb6a"),n("25f0");function ne(){return Math.random().toString(36).slice(-8)}var ae=function(){return'<?xml version="1.0" encoding="UTF-8"?>\n    <definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:bioc="http://bpmn.io/schema/bpmn/biocolor/1.0" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" targetNamespace="http://www.flowable.org/processdef">\n      <process id="process_'.concat(ne(),'" name="name_').concat(ne(),'">\n        <startEvent id="startNode1" name="开始" />\n      </process>\n      <bpmndi:BPMNDiagram id="BPMNDiagram_flow">\n        <bpmndi:BPMNPlane id="BPMNPlane_flow" bpmnElement="T-2d89e7a3-ba79-4abd-9f64-ea59621c258c">\n          <bpmndi:BPMNShape id="BPMNShape_startNode1" bpmnElement="startNode1" bioc:stroke="">\n            <omgdc:Bounds x="240" y="200" width="30" height="30" />\n            <bpmndi:BPMNLabel>\n              <omgdc:Bounds x="242" y="237" width="23" height="14" />\n            </bpmndi:BPMNLabel>\n          </bpmndi:BPMNShape>\n        </bpmndi:BPMNPlane>\n      </bpmndi:BPMNDiagram>\n    </definitions>\n    ')},re={components:{panel:Y},props:{xml:{type:String,default:""},users:{type:Array,default:function(){return[{name:"张三",id:"zhangsan"},{name:"李四",id:"lisi"},{name:"王五",id:"wangwu"}]}},groups:{type:Array,default:function(){return[{name:"web组",id:"web"},{name:"java组",id:"java"},{name:"python组",id:"python"}]}},categorys:{type:Array,default:function(){return[{name:"OA",id:"oa"},{name:"财务",id:"finance"}]}}},data:function(){return{modeler:null,bpmData:new te}},watch:{xml:function(e){e&&this.createNewDiagram(e)}},mounted:function(){this.modeler=new d["a"]({container:this.$refs.canvas,additionalModules:[{translate:["value",u]}]}),this.xml?this.createNewDiagram(this.xml):this.newDiagram(),this.modeler.get("canvas").zoom("fit-viewport")},methods:{newDiagram:function(){this.createNewDiagram(ae())},createNewDiagram:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.modeler.importXML(e);case 3:t.adjustPalette(),n.next=9;break;case 6:n.prev=6,n.t0=n["catch"](0),console.error(n.t0.message,n.t0.warnings);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})))()},adjustPalette:function(){try{var e=this.$refs.canvas,t=e.children[0].children[1].children[4],n={width:"130px",padding:"5px",background:"white",left:"20px",borderRadius:0};for(var a in n)t.style[a]=n[a];var r=t.children[0],i=r.children;for(var o in i[0].style["display"]="none",i){var s=i[o];for(var l in s.children){var c=s.children[l],u={display:"flex",justifyContent:"flex-start",alignItems:"center",width:"100%",padding:"5px"};if(c.className&&c.dataset&&-1!==c.className.indexOf("entry")){var d=this.bpmData.getControl(c.dataset.action);for(var m in c.innerHTML="<div style='font-size: 14px;font-weight:500;margin-left:15px;'>".concat(d["title"],"</div>"),u)c.style[m]=u[m]}}}}catch(p){console.log(p)}},getProcess:function(){var e=this.getProcessElement();return{id:e.id,name:e.name,category:e.$attrs["flowable:processCategory"]}},getProcessElement:function(){return this.modeler.getDefinitions().rootElements[0]},saveXML:function(){var e=arguments,t=this;return Object(l["a"])(regeneratorRuntime.mark((function n(){var a,r,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.length>0&&void 0!==e[0]&&e[0],n.prev=1,n.next=4,t.modeler.saveXML({format:!0});case 4:return r=n.sent,i=r.xml,i=i.replace(/&lt;/g,"<"),i=i.replace(/&gt;/g,">"),a&&t.downloadFile("".concat(t.getProcessElement().name,".bpmn20.xml"),i,"application/xml"),n.abrupt("return",i);case 12:n.prev=12,n.t0=n["catch"](1),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[1,12]])})))()},saveImg:function(){var e=arguments,t=this;return Object(l["a"])(regeneratorRuntime.mark((function n(){var a,r,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.length>0&&void 0!==e[0]?e[0]:"svg",a=e.length>1&&void 0!==e[1]&&e[1],n.prev=2,n.next=5,t.modeler.saveSVG({format:!0});case 5:return r=n.sent,i=r.svg,a&&t.downloadFile(t.getProcessElement().name,i,"image/svg+xml"),n.abrupt("return",i);case 11:n.prev=11,n.t0=n["catch"](2),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[2,11]])})))()},openBpmn:function(e){var t=this,n=new FileReader;return n.readAsText(e,"utf-8"),n.onload=function(){t.createNewDiagram(n.result)},!1},downloadFile:function(e,t,n){var a=document.createElement("a"),r=window.URL.createObjectURL(new Blob([t],{type:n}));a.href=r,a.download=e,a.click(),window.URL.revokeObjectURL(r)}}},ie=re,oe=(n("238b"),Object(E["a"])(ie,o,s,!1,null,null,null)),se=oe.exports,le={components:{VueBpmn:se}},ce=le,ue=(n("5c0b"),Object(E["a"])(ce,r,i,!1,null,null,null)),de=ue.exports,me=n("5c96"),pe=n.n(me);n("0fae");a["default"].config.productionTip=!1,a["default"].use(pe.a),new a["default"]({render:function(e){return e(de)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},6129:function(e,t,n){},"8ed9":function(e,t,n){},"9c0c":function(e,t,n){},d7ca:function(e,t,n){"use strict";var a=n("6129"),r=n.n(a);r.a}});