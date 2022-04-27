({
    searchKeyChange: function(component, event, helper) {
        var myEvent = $A.get("e.phongnh:SearchKeyChange");
        console.log(myEvent);
        myEvent.setParams({"searchKey": event.target.value});
        myEvent.fire();
    }
})