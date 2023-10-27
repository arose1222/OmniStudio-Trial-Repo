let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"IntegrationProcedures","value":{"dsDelay":"","inputMap":{"cartId":"{Parent.cartId}","pricelistId":"{Parent.pricelistId}"},"ipMethod":"CPQ_GetAppliedDiscounts","resultVar":"[\"response\"]","vlocityAsync":false}},"enableLwc":true,"events":[{"actionData":{"card":"{card}","draggable":true,"isOpen":false,"key":"1626285615028-2guuwv008","label":"Action","stateAction":{"eventName":"reload","id":"flex-action-1620123479946","type":"cardAction"}},"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1626285637868-yr7u3x59w","label":"Action","stateAction":{"eventName":"reload","id":"flex-action-1620123479946","type":"cardAction"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_discount_apply_response","element":"action","eventLabel":"pubsub","eventname":"cpq_discount_apply_response","eventtype":"pubsub","key":"event-0","recordIndex":"0"},{"actionData":{"card":"{card}","draggable":true,"isOpen":false,"key":"1626285615028-e13b1t51a","label":"Action","stateAction":{"eventName":"reload","id":"flex-action-1620123509131","type":"cardAction"}},"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1626285637868-ax8uxzsog","label":"Action","stateAction":{"eventName":"reload","id":"flex-action-1620123509131","type":"cardAction"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_discount_delete_response","element":"action","eventLabel":"pubsub","eventname":"cpq_discount_delete_response","eventtype":"pubsub","key":"event-1","recordIndex":"0"}],"globalCSS":false,"isFlex":true,"lwc":{"DeveloperName":"cfCpqCartAppliedDiscount_3_Vlocity","Id":"0RbHp000000v2QqCAC","ManageableState":"unmanaged","MasterLabel":"cfCpqCartAppliedDiscount_3_Vlocity","NamespacePrefix":"vlocity_cmt"},"multilanguageSupport":true,"sessionVars":[],"states":[{"actions":[],"childCards":["cpqCartDiscount"],"components":{"layer-0":{"children":[{"children":[{"class":"slds-col ","element":"childCardPreview","elementLabel":"Block-1-FlexCard-0","key":"element_element_block_0_0_childCardPreview_0_0","name":"FlexCard","parentElementKey":"element_block_0_0","property":{"cardName":"cpqCartDiscount","cardNode":"{record.records}","data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"data-preloadConditionalElement":false,"isChildCardTrackingEnabled":false,"parentAttribute":{"cartId":"{Parent.cartId}"},"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-1","name":"Block","property":{"action":null,"card":"{card}","collapsedByDefault":false,"collapsible":true,"label":"\\{Label.CPQAppliedDiscounts} ({totalSize})","record":"{record}","styles":{"label":{"color":"#181818"}}},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__cart-applied-discount_block ","container":{"class":"cpq__cart-applied-discount_block"},"elementStyleProperties":{"styles":{"label":{"color":"#181818"}}},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__cart-applied-discount_block ","container":{"class":"cpq__cart-applied-discount_block"},"elementStyleProperties":{"styles":{"label":{"color":"#181818"}}},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"}]}},"conditions":{"group":[{"field":"totalSize","id":"state-new-condition-11","operator":">","type":"custom","value":"0"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__cart-applied-disc_container slds-p-around_x-small slds-m-around_none ","container":{"class":"cpq__cart-applied-disc_container"},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"around:none","size":"none","type":"around"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}},{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Block-1-Text-0","key":"element_element_block_0_1_outputField_0_1","name":"Text","parentElementKey":"element_block_0_1","property":{"card":"{card}","mergeField":"%3Ch4%20class=%22slds-text-heading_medium%22%3E%3Cspan%20class=%22slds-text-heading_medium%22%3E%7BLabel.CPQNoAppliedDiscountsEmptyText%7D%3C/span%3E%3C/h4%3E%0A%3Ch4%3E%3Cspan%20class=%22slds-text-heading_medium%22%3E%7BLabel.CPQNoAppliedDiscMissingOut%7D%3C/span%3E%3C/h4%3E%0A%3Cp%3E%3Cspan%20class=%22slds-text-body_regular%22%20style=%22color:%20#3e3e3c;%22%3E%7BLabel.CPQNoAppliedDiscountText%7D%3C/span%3E%3C/p%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center slds-p-around_x-small cpq__cart-applied-discounts_empty-text","container":{"class":""},"customClass":"cpq__cart-applied-discounts_empty-text","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"center","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center slds-p-around_x-small cpq__cart-applied-discounts_empty-text","container":{"class":""},"customClass":"cpq__cart-applied-discounts_empty-text","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"center","color":""}}}],"type":"text"},{"class":"slds-col ","element":"action","elementLabel":"Block-1-Action-1","key":"element_element_block_0_1_action_1_1","name":"Action","parentElementKey":"element_block_0_1","property":{"actionList":[{"actionIndex":0,"draggable":false,"isOpen":true,"key":"1652852616756-z2h3q118r","label":"Open Add Discount Flyout","stateAction":{"cardName":"cpqDiscount","channelName":"close_modal_apply_discount","flyoutLwc":"cpqDiscount","flyoutParams":{"cartId":"{Parent.cartId}"},"flyoutType":"childCard","hasExtraParams":true,"id":"flex-action-1656593153293","openFlyoutIn":"Modal","openUrlIn":"Current Window","type":"Flyout"}}],"buttonVariant":"outline-brand","card":"{card}","displayAsButton":true,"flyoutChannel":"close_modal_apply_discount","flyoutDetails":{"openFlyoutIn":"Modal"},"iconColor":"#0176D3","iconName":"utility:add","iconSize":"x-small","label":"\\{Label.CPQAddNewDiscount}","record":"{record}","showSpinner":"false","stateObj":"{record}","styles":{"label":{"color":"#0176D3"}}},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center ","container":{"class":""},"elementStyleProperties":{"iconColor":"#0176D3","iconSize":"x-small","styles":{"label":{"color":"#0176D3"}}},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"center","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center ","container":{"class":""},"elementStyleProperties":{"iconColor":"#0176D3","iconSize":"x-small","styles":{"label":{"color":"#0176D3"}}},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"center","color":""}}}],"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-1","name":"Block","property":{"action":null,"card":"{card}","collapsedByDefault":false,"collapsible":true,"label":"\\{Label.CPQAppliedDiscounts} (0)","record":"{record}","styles":{"label":{"color":"#181818"}}},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__cart-applied-discount_block ","container":{"class":"cpq__cart-applied-discount_block"},"elementStyleProperties":{"styles":{"label":{"color":"#181818"}}},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__cart-applied-discount_block ","container":{"class":"cpq__cart-applied-discount_block"},"elementStyleProperties":{"styles":{"label":{"color":"#181818"}}},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"}]}},"conditions":{"group":[{"field":"records.totalSize","hasMergeField":false,"id":"state-new-condition-11","operator":"<=","type":"custom","value":"0"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Empty State","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__cart-applied-disc_container slds-p-around_x-small slds-m-around_none ","container":{"class":"cpq__cart-applied-disc_container"},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"around:none","size":"none","type":"around"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqCartAppliedDiscount","Id":"0koHp000000Cn3DIAW","OmniUiCardKey":"cpqCartAppliedDiscount/Vlocity/3/1643787391256"};
  export default definition