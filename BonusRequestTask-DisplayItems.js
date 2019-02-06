// The file has been created, saved into "/Style Library/"
// and attached to the XLV via JSLink property.

SP.SOD.executeFunc("clienttemplates.js", "SPClientTemplates", function() {

  function getBaseHtml(ctx) {
    return SPClientTemplates["_defaultTemplates"].Fields.default.all.all[ctx.CurrentFieldSchema.FieldType][ctx.BaseViewID](ctx);
  }

  function init() {

    SPClientTemplates.TemplateManager.RegisterTemplateOverrides({

       OnPreRender: function(ctx) {},

      Templates: {
            Item: function(ctx) { return "<tr><td>Task Name</td><td>Requestor Name</td><td>EService Type</td><td><a href='http://hraes-uat/sites/eservices/Lists/BonusRequestList/EditForm.aspx?ID=8'>View Details</</td></tr>"; },
        	Header: function(ctx) { return "<table><th>Task Name</th><th>Requestor Name</th><th>EService</th><th>View Details</th><th>Edit</th>"; },

      //    View: function(ctx) { return ""; }
      //     Header: function(ctx) { return ""; },
        
      //  Body: function(ctx) { return "<table id='table'><tr><th>Task Name</th><th>Request-ID</th><th>EService Name</th></table>"; },
       //  View: function(ctx) { return ""; },
          Group: function(ctx) { return "<div>I am Groupd</div>"; },
      
      //     Fields: {
      //         "<field internal name>": {
               
      //             EditForm: function(ctx) { return ""; },
      //             DisplayForm: function(ctx) { return ""; },
      //             NewForm: function(ctx) { return ""; }
      //         }
      //     },
        Footer: function(ctx) { return "</table>"; }

      },

      // OnPostRender: function(ctx) { },

      ListTemplateType: 171

    });
  }

  //RegisterModuleInit(SPClientTemplates.Utility.ReplaceUrlTokens("~siteCollection/Style Library/JSLinkLibrary.js"), init);
  init();

});
