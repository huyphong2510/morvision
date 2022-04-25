({
    
    doInit : function(component, event, helper) {
        console.log('inside');
        var action = component.get("c.getProjects");
        //action.setparm
        action.setCallback(this,function(response){
            if (response.getState() === "SUCCESS"){
                 console.log('success');
                component.set("v.projectDetails",response.getReturnValue());
            }
            else
            {
                alert('Error');
            }
        });
        $A.enqueueAction(action);
    },
})
