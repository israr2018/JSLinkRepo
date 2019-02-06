// List View – Accordion Sample 
// Muawiyah Shannak , @MuShannak 
 
(function () { 
 
    // jQuery library is required in this sample 
    // Fallback to loading jQuery from a CDN path if the local is unavailable 
    (window.jQuery || document.write('<script src="//ajax.aspnetcdn.com/ajax/jquery/jquery-1.10.0.min.js"><\/script>')); 
 
    // Create object that have the context information about the field that we want to change it's output render  
    var accordionContext = {}; 
    accordionContext.Templates = {}; 
 
    // Be careful when add the header fo"r the template, because it's will break the default list view render 
    accordionContext.Templates.Header = "<table><th>Task Name</th><th>Requestor Name</th><th>EService</th><th>View Details</th><th>Edit</th>"; 
    accordionContext.Templates.Footer = "</div>"; 
 
    // Add OnPostRender event handler to add accordion click events and style 
    accordionContext.OnPostRender = accordionOnPostRender; 
 
    // This line of code tell TemplateManager that we want to change all HTML for item row render 
    accordionContext.Templates.Item = accordionTemplate; 
 
    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(accordionContext); 
 
})(); 
 
// This function provides the rendering logic 
function accordionTemplate(ctx) { 
   // var title = ctx.CurrentItem["Title"]; 
 //var description = ctx.CurrentItem["Description"]; 
 
    // Return whole item html 
    return "<tr><td>Task Name</td><td>Requestor Name</td><td>EService Type</td><td><a href='http://hraes-uat/sites/eservices/Lists/BonusRequestList/EditForm.aspx?ID=8'>View Details</</td></tr>"; 
} 
 
function accordionOnPostRender() { 
 
    // Register event to collapse and uncollapse when click on accordion header 
   /*  $('.accordion h2').click(function () { 
        $(this).next().slideToggle(); 
    }).next().hide(); 
 
    $('.accordion h2').css('cursor', 'pointer'); 
 */
}