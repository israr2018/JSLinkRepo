// The file has been created, saved into "/Style Library/"
// and attached to the XLV via JSLink property.
/*
jQuery("#ctl00_onetidHeadbnnr2").hide();
JQuery.hide("Ribbon.ListForm.Edit");
divctl00_ctl39_g_b1218378_efca_4918_9d65_029f4dcb262c_ctl01
JQuery(".divctl00_ctl39_g_b1218378_efca_4918_9d65_029f4dcb262c_ctl01").hide();
ms-cui-topBar2 ms-cui-topBarMaximized ms-browseTabContainer
JQuery.hide(".ms-cui-topBar2 ms-cui-topBarMaximized ms-browseTabContainer");
JQuery(".ms-tl-mainAreaTitle ms-textLarge ms-soften").hide();
jQuery("#divctl00_ctl39_g_b1218378_efca_4918_9d65_029f4dcb262c_ctl01").hide();")
*/
SP.SOD.executeFunc("clienttemplates.js", "SPClientTemplates", function() {

    function getBaseHtml(ctx) {
      return SPClientTemplates["_defaultTemplates"].Fields.default.all.all[ctx.CurrentFieldSchema.FieldType][ctx.BaseViewID](ctx);
    }
  
    function init() {
  
      SPClientTemplates.TemplateManager.RegisterTemplateOverrides({
  
        // OnPreRender: function(ctx) { },
  
        Templates: {
  
        //     View: function(ctx) { return ""; },
        //     Header: function(ctx) { return ""; },
        //     Body: function(ctx) { return ""; },
        //     Group: function(ctx) { return ""; },
        //     Item: function(ctx) { return ""; },
        //     Fields: {
        //         "<field internal name>": {
        //             View: function(ctx) { return ""; },
        //             EditForm: function(ctx) { return ""; },
        //             DisplayForm: function(ctx) { return ""; },
        //             NewForm: function(ctx) { return ""; }
        //         }
        //     },
        //     Footer: function(ctx) { return ""; }
  
        },
  
        // OnPostRender: function(ctx) { },
  
        ListTemplateType: 171
  
      });
    }
  
    RegisterModuleInit(SPClientTemplates.Utility.ReplaceUrlTokens("~siteCollection/Style Library/displayItems.js"), init);
    init();
  
  });
  