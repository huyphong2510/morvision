({
    handleSubmit : function(component, event, helper) {
        component.find('editform').submit();
        var a= component.get("v.recordChild");
        console.log(a);     

    },

    handleSuccess : function(component, event, helper) {
        var strPrjName = component.find("prjName").get("v.value");
        component.find('notifLib').showToast({
            "variant": "success",
            "title": strPrjName,
            "message": "Task Updated Successfully!!"
        });
        component.find("overlayLibDemo1").notifyClose();
    },
    
    openModel: function(component, event, helper) {
        // for Display Model,set the "isOpen" attribute to "true"
        component.set("v.isOpen", true);
     },
     handleRecordUpdated: function(component, event, helper) {
        var eventParams = event.getParams();
        if(eventParams.changeType === "CHANGED") {
           // record is changed
        } else if(eventParams.changeType === "LOADED") {
            // record is loaded in the cache
        } else if(eventParams.changeType === "REMOVED") {
            // record is deleted, show a toast UI message
            var resultsToast = $A.get("e.force:showToast");
            resultsToast.setParams({
                "title": "Deleted",
                "message": "The record was deleted."
            });
            resultsToast.fire();
            window.location.href = "https://internsf-dev-ed.lightning.force.com/lightning/o/Project__c/list?filterName=Recent";

        } else if(eventParams.changeType === "ERROR") {
            // there’s an error while loading, saving, or deleting the record
        }
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
