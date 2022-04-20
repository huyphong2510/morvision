({
    handleSubmit : function(component, event, helper) {
        component.find('editform').submit();
    },

    handleSuccess : function(component, event, helper) {
        var strPrjName = component.find("prjName").get("v.value");
        component.find('notifLib').showToast({
            "variant": "success",
            "title": strPrjName,
            "message": "Account Updated Successfully!!"
        });
        component.find("overlayLibDemo1").notifyClose();
    },
    openModel: function(component, event, helper) {
        // for Display Model,set the "isOpen" attribute to "true"
        component.set("v.isOpen", true);
     },
  
     closeModel: function(component, event, helper) {
        // for Hide/Close Model,set the "isOpen" attribute to "Fasle"  
        component.set("v.isOpen", false);
     },
  
     likenClose: function(component, event, helper) {
        // Display alert message on the click on the "Like and Close" button from Model Footer 
        // and set set the "isOpen" attribute to "False for close the model Box.
        alert('thanks for like Us :)');
        component.set("v.isOpen", false);
     },
    
})
