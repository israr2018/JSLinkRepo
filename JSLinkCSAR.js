// The file has been created, saved into "/Style Library/"
// and attached to the LFWP via JSLink property.

SP.SOD.executeFunc("clienttemplates.js", "SPClientTemplates", function() {

    function getBaseHtml(ctx) {
      return SPClientTemplates["_defaultTemplates"].Fields.default.all.all[ctx.CurrentFieldSchema.FieldType][ctx.BaseViewID](ctx);
    }
  
    function init() {
  
      SPClientTemplates.TemplateManager.RegisterTemplateOverrides({
  
         OnPreRender: function(ctx) {jQuery("#Ribbon.ListForm.Edit").hide() },
  
        Templates: {
  
           Fields: {
                "Title": {
                    View: function(ctx) { return ""; },
                   EditForm: function(ctx) { return "<h2>Test</h2>"; },
                    DisplayForm: function(ctx) { return ""; },
        //             NewForm: function(ctx) { return ""; }
        //         },
        //         "StartDate": {
        //             View: function(ctx) { return ""; },
        //             EditForm: function(ctx) { return ""; },
        //             DisplayForm: function(ctx) { return ""; },
        //             NewForm: function(ctx) { return ""; }
        //         },
        //         "DueDate": {
        //             View: function(ctx) { return ""; },
        //             EditForm: function(ctx) { return ""; },
        //             DisplayForm: function(ctx) { return ""; },
        //             NewForm: function(ctx) { return ""; }
        //         },
        //         "AssignedTo": {
        //             View: function(ctx) { return ""; },
        //             EditForm: function(ctx) { return ""; },
        //             DisplayForm: function(ctx) { return ""; },
        //             NewForm: function(ctx) { return ""; }
        //         },
        //         "PercentComplete": {
        //             View: function(ctx) { return ""; },
        //             EditForm: function(ctx) { return ""; },
        //             DisplayForm: function(ctx) { return ""; },
        //             NewForm: function(ctx) { return ""; }
        //         },
        //         "Body": {
        //             View: function(ctx) { return ""; },
        //             EditForm: function(ctx) { return ""; },
        //             DisplayForm: function(ctx) { return ""; },
        //             NewForm: function(ctx) { return ""; }
        //         },
        //         "Predecessors": {
        //             View: function(ctx) { return ""; },
        //             EditForm: function(ctx) { return ""; },
        //             DisplayForm: function(ctx) { return ""; },
        //             NewForm: function(ctx) { return ""; }
        //         },
        //         "Priority": {
        //             View: function(ctx) { return ""; },
        //             EditForm: function(ctx) { return ""; },
        //             DisplayForm: function(ctx) { return ""; },
        //             NewForm: function(ctx) { return ""; }
        //         },
        //         "Status": {
        //             View: function(ctx) { return ""; },
        //             EditForm: function(ctx) { return ""; },
        //             DisplayForm: function(ctx) { return ""; },
        //             NewForm: function(ctx) { return ""; }
        //         }
        //     },
  
        },
  
         OnPostRender: function(ctx) {alert("hello world" },
  
        ListTemplateType: 171
  
      });
    }
  
    RegisterModuleInit(SPClientTemplates.Utility.ReplaceUrlTokens("~siteCollection/Style Library/test.js"), init);
    init();
  
  });
  