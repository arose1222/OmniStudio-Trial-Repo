let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{},"type":null,"value":{}},"dynamicCanvasWidth":{"type":"desktop"},"enableLwc":true,"events":[{"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1625931781422-g2d6zvo2b","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"Parent.details","fieldValue":"{action.response.records[0].details}"}],"flyoutLwc":"l-w-c-c-p-q-approve-discount-items-multi-language","flyoutParams":{"ContextId":"{recordId}"},"flyoutType":"OmniScripts","hasExtraParams":true,"id":"flex-action-1623771382931","layoutType":"lightning","openFlyoutIn":"Modal","osName":"LWCCPQ/ApproveDiscountItems/Multi-Language","type":"cardAction"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_cart_updated","element":"action","eventLabel":"pubsub","eventname":"cpq_cart_updated","eventtype":"pubsub","key":"event-0","recordIndex":"0"}],"globalCSS":false,"isFlex":true,"lwc":{"DeveloperName":"cfCpqReadyToSubmitCancelledMobile_1_Vlocity","Id":"0RbHp000000v2Pe0AY","ManageableState":"unmanaged","MasterLabel":"cfCpqReadyToSubmitCancelledMobile_1_Vlocity","NamespacePrefix":"c"},"multilanguageSupport":true,"sessionVars":[],"states":[{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"flexMenu","elementLabel":"Menu-4","name":"Menu","property":{"card":"{card}","data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"data-preloadConditionalElement":false,"flyoutObj":{"menuItemFlyout4":{"displayName":"Request Pending Approval","flyoutLwc":"l-w-c-c-p-q-approve-discount-items-multi-language","flyoutParams":{"ContextId":"{recordId}"},"flyoutType":"OmniScripts","hasExtraParams":true,"id":"menuItemFlyout4","layoutType":"lightning","openFlyoutIn":"Modal","openUrlIn":"Current Window","osName":"LWCCPQ/ApproveDiscountItems/Multi-Language","parent":"menu","type":"Flyout","vlocityIcon":"icon-v-document1-line"},"menuItemFlyout7":{"flyoutLwc":"cpqDiscount","flyoutParams":{"cartId":"{Id}"},"flyoutType":"childCard","id":"menuItemFlyout7"},"menuItemFlyout9":{"flyoutLwc":"cpqDeleteModal","flyoutParams":{"cartId":"{Id}","objType":"Order"},"flyoutType":"childCard","id":"menuItemFlyout9"}},"iconName":"utility:down","menuItems":[{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQViewRecord}","id":"flex-action-1629441760328","name":"View Record","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQViewRecord}","id":"flex-action-1629441760328","name":"View Record","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQViewRecord}","name":"menu-item-1612100275302-0","showSpinner":"false"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQGenerateDocumentPDF}","id":"flex-action-1629441766652","name":"Generate Document PDF","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQGenerateDocumentPDF}","id":"flex-action-1629441766652","name":"Generate Document PDF","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQGenerateDocumentPDF}","name":"menu-item-1612100312317-0","showSpinner":"false"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQAmendmentHistory}","id":"flex-action-1629441770304","name":"Amendment History","openUrlIn":"New Tab/Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQAmendmentHistory}","id":"flex-action-1629441770304","name":"Amendment History","openUrlIn":"New Tab/Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQAmendmentHistory}","name":"menu-item-1612100357124-0","showSpinner":"false"},{"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQStatusNotifications}","id":"flex-action-1629441773416","name":"Status Notifications","openUrlIn":"New Tab/Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQStatusNotifications}","id":"flex-action-1629441773416","name":"Status Notifications","openUrlIn":"New Tab/Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQStatusNotifications}","name":"menu-item-1612100381466-0","showSpinner":"false"},{"actionConditions":{"group":[{"field":"Parent.details.records[0].discountsForSubmission","hasMergeField":false,"id":"state-new-condition-2","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQRequestPendingApproval}","flyoutLwc":"l-w-c-c-p-q-approve-discount-items-multi-language","flyoutParams":{"ContextId":"{recordId}"},"flyoutType":"OmniScripts","hasExtraParams":true,"id":"flex-action-1629183275280","layoutType":"lightning","openFlyoutIn":"Modal","openUrlIn":"Current Window","osName":"LWCCPQ/ApproveDiscountItems/Multi-Language","parent":"menu","type":"Flyout","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQRequestPendingApproval}","flyoutLwc":"l-w-c-c-p-q-approve-discount-items-multi-language","flyoutParams":{"ContextId":"{recordId}"},"flyoutType":"OmniScripts","hasExtraParams":true,"id":"flex-action-1629183275280","layoutType":"lightning","openFlyoutIn":"Modal","openUrlIn":"Current Window","osName":"LWCCPQ/ApproveDiscountItems/Multi-Language","parent":"menu","type":"Flyout","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQRequestPendingApproval}","name":"menu-item-1612103374315-0","showSpinner":"false"},{"actionData":{"card":"{card}","stateAction":{"Web Page":{"targetName":"/{Id}/p"},"actionConditions":null,"displayName":"{Label.CPQPrintableView}","id":"flex-action-1629106962287","openUrlIn":"New Tab/Window","parent":"menu","targetType":"Web Page","type":"Custom","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","stateAction":{"Web Page":{"targetName":"/{Id}/p"},"actionConditions":null,"displayName":"{Label.CPQPrintableView}","id":"flex-action-1629106962287","openUrlIn":"New Tab/Window","parent":"menu","targetType":"Web Page","type":"Custom","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQPrintableView}","name":"menu-item-1615224887780-0","showSpinner":"false"},{"actionData":{"card":"{card}","stateAction":{"Record":{"targetAction":"clone","targetId":"{Id}","targetName":"Order"},"actionConditions":null,"displayName":"{Label.CPQClone}","id":"flex-action-1629107000517","openUrlIn":"New Tab/Window","parent":"menu","targetType":"Record","type":"Custom","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","stateAction":{"Record":{"targetAction":"clone","targetId":"{Id}","targetName":"Order"},"actionConditions":null,"displayName":"{Label.CPQClone}","id":"flex-action-1629107000517","openUrlIn":"New Tab/Window","parent":"menu","targetType":"Record","type":"Custom","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQClone}","name":"menu-item-1615225295907-0","showSpinner":"false"},{"actionConditions":{"group":[{"field":"Parent.isAsyncProcessesPresent","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"0"},{"group":[{"field":"Parent.isAsyncProcessesPresent","hasMergeField":false,"id":"state-new-condition-7","operator":">","type":"custom","value":"0"},{"field":"Parent.isAsyncProcessCompleted","hasMergeField":false,"id":"state-new-condition-21","logicalOperator":"&&","operator":"==","type":"custom","value":"true"}],"id":"state-new-group-8","logicalOperator":"||"}],"id":"state-condition-object","isParent":true},"actionData":{"card":"{card}","stateAction":{"actionConditions":null,"cardName":"cpqDiscount","cardNode":"","displayName":"{Label.CPQApplyDiscount}","flyoutLwc":"cpqDiscount","flyoutParams":{"cartId":"{Id}"},"flyoutType":"childCard","hasExtraParams":true,"id":"flex-action-1629107016984","openFlyoutIn":"Modal","openUrlIn":"Current Window","parent":"menu","type":"Flyout","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"actionIndex":0,"card":"{card}","draggable":false,"isOpen":true,"key":"1658214432430-te4emuna5","label":"Action","stateAction":{"actionConditions":null,"cardName":"cpqDiscount","cardNode":"","channelName":"close_modal_apply_discount","displayName":"{Label.CPQApplyDiscount}","flyoutLwc":"cpqDiscount","flyoutParams":{"cartId":"{Id}"},"flyoutType":"childCard","hasExtraParams":true,"id":"flex-action-1658214434227","openFlyoutIn":"Modal","openUrlIn":"Current Window","type":"Flyout","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQApplyDiscount}","name":"menu-item-1615225404994-0","showSpinner":"false"},{"actionData":{"card":"{card}","stateAction":{"actionConditions":null,"cardName":"cpqDeleteModal","displayName":"{Label.CPQDelete}","flyoutLwc":"cpqDeleteModal","flyoutParams":{"cartId":"{Id}","objType":"Order"},"flyoutType":"childCard","hasExtraParams":true,"id":"flex-action-1629107041317","openFlyoutIn":"Modal","openUrlIn":"Current Window","parent":"menu","type":"Flyout","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","stateAction":{"actionConditions":null,"cardName":"cpqDeleteModal","displayName":"{Label.CPQDelete}","flyoutLwc":"cpqDeleteModal","flyoutParams":{"cartId":"{Id}","objType":"Order"},"flyoutType":"childCard","hasExtraParams":true,"id":"flex-action-1629107041317","openFlyoutIn":"Modal","openUrlIn":"Current Window","parent":"menu","type":"Flyout","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQDelete}","name":"menu-item-1615229656542-0","showSpinner":"false"},{"actionConditions":{"group":[{"field":"Parent.details.records[0].canCheckoutDiscounts","hasMergeField":false,"id":"state-new-condition-0","operator":"===","type":"custom","value":"true"},{"field":"Parent.details.records[0].frameAgreementPresent","hasMergeField":false,"id":"state-new-condition-1","logicalOperator":"&&","operator":"===","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQCreateFrameAgreement}","id":"flex-action-1631197819935","name":"Create Frame Agreement-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQCreateFrameAgreement}","id":"flex-action-1631197819935","name":"Create Frame Agreement-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQCreateFrameAgreement}","name":"menu-item-1631197645037-0","showSpinner":"false"},{"actionConditions":{"group":[{"field":"Parent.details.records[0].canCheckoutDiscounts","hasMergeField":false,"id":"state-new-condition-7","operator":"===","type":"custom","value":"true"},{"field":"Parent.details.records[0].frameAgreementPresent","hasMergeField":false,"id":"state-new-condition-10","logicalOperator":"&&","operator":"===","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQCreateFrameAmendment}","id":"flex-action-1631197808181","name":"Create Frame Amendment-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQCreateFrameAmendment}","id":"flex-action-1631197808181","name":"Create Frame Amendment-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQCreateFrameAmendment}","name":"menu-item-1631197664739-0","showSpinner":"false"},{"actionConditions":{"group":[{"field":"Parent.details.records[0].canCheckoutDiscounts","hasMergeField":false,"id":"state-new-condition-14","operator":"===","type":"custom","value":"true"},{"field":"Parent.details.records[0].frameAgreementPresent","hasMergeField":false,"id":"state-new-condition-15","logicalOperator":"&&","operator":"===","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQUpdateFrameAgreement}","id":"flex-action-1631197827730","name":"Update Frame Agreement-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQUpdateFrameAgreement}","id":"flex-action-1631197827730","name":"Update Frame Agreement-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQUpdateFrameAgreement}","name":"menu-item-1631197689383-0","showSpinner":"false"},{"actionConditions":{"group":[{"field":"Parent.details.records[0].canCheckoutDiscounts","hasMergeField":false,"id":"state-new-condition-16","operator":"===","type":"custom","value":"true"},{"field":"Parent.details.records[0].frameAgreementPresent","hasMergeField":false,"id":"state-new-condition-17","logicalOperator":"&&","operator":"===","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"actionData":{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQUpdateFrameAmendment}","id":"flex-action-1631197836845","name":"Update Frame Amendment-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"},"actionList":[{"card":"{card}","contextId":"\\{Id}","sObjectType":"Order","stateAction":{"actionConditions":null,"displayName":"{Label.CPQUpdateFrameAmendment}","id":"flex-action-1631197836845","name":"Update Frame Amendment-Order","openUrlIn":"Current Window","parent":"menu","type":"Vlocity Action","vlocityIcon":"icon-v-document1-line"},"stateObj":"{record}"}],"iconName":"icon-v-document1-line","label":"{Label.CPQUpdateFrameAmendment}","name":"menu-item-1631197701814-0","showSpinner":"false"}],"overflow":true,"position":"right","record":"{record}","size":"small","type":"action","variant":"neutral"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"custom-btn","container":{"class":""},"customClass":"custom-btn","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"element"}]}},"conditions":{"group":[{"field":"Parent.details.records[0].ObjectType","id":"state-condition-13","operator":"==","type":"custom","value":"Order"},{"group":[{"field":"Parent.details.records[0].orderStatusValue","id":"state-condition-15","operator":"==","type":"custom","value":"Ready To Submit"},{"field":"Parent.details.records[0].orderStatusValue","id":"state-condition-16","logicalOperator":"||","operator":"==","type":"custom","value":"Cancelled"}],"id":"state-condition-14","logicalOperator":"&&"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Order ReadyToSubmit Cancelled","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"#F3F2F2","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card  ","container":{"class":"slds-card "},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#F3F2F2;     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}},{"actions":[],"childCards":["cpqReadyToSubmitCancelledMobileChild"],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"childCardPreview","elementLabel":"FlexCard-0","name":"FlexCard","property":{"cardName":"cpqReadyToSubmitCancelledMobileChild","cardNode":"{record}","isChildCardTrackingEnabled":false,"parentAttribute":{"details":"{Parent.details}"},"recordId":"{recordId}","selectedState":"Order Complete Activated"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"}]}},"conditions":{"group":[{"field":"Parent.details.records[0].ObjectType","id":"state-condition-17","operator":"==","type":"custom","value":"Order"},{"group":[{"field":"Parent.details.records[0].orderStatusValue","id":"state-condition-19","operator":"==","type":"custom","value":"Activated"},{"field":"Parent.details.records[0].orderStatusValue","hasMergeField":false,"id":"state-condition-20","logicalOperator":"||","operator":"==","type":"custom","value":"Complete"},{"field":"Parent.details.records[0].orderStatusValue","hasMergeField":false,"id":"state-new-condition-72","logicalOperator":"||","operator":"==","type":"custom","value":"Queued"}],"id":"state-condition-18","logicalOperator":"&&"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Order Complete / Activated / Queued","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"#F3F2F2","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card  ","container":{"class":"slds-card "},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#F3F2F2;     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqReadyToSubmitCancelledMobile","Id":"0koHp000000Cn35IAW","OmniUiCardKey":"cpqReadyToSubmitCancelledMobile/Vlocity/4/1658214337740"};
  export default definition