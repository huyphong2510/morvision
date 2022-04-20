({
    doInit : function(component, event, helper) {
        console.log('inside');
        var action = component.get("c.getContacts");
        //action.setparm
        action.setCallback(this,function(response){
            if (response.getState() === "SUCCESS"){
                 alert('success');
                component.set("v.userDetails",response.getReturnValue());
            }
            else
            {
                alert('Error');
            }
        });
        $A.enqueueAction(action);
    }
});