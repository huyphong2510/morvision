({
    init: function (cmp, event, helper) {
        var actions = [
            { label: 'View', name: 'view' },
            { label: 'Edit', name: 'edit' },         
            { label: 'Delete', name: 'delete' } ];
        cmp.set('v.columns', [
            { label: 'Name', fieldName: 'Name', type: 'text' },
            { label: 'Project', fieldName: 'phongnh__Project__c', type: 'text' },
            { label: 'Assigner', fieldName: 'phongnh__Assigner__c', type: 'text' },
            { label: 'Status', fieldName: 'phongnh__Status__c', type: 'text' },
            { label: 'End Date', fieldName: 'phongnh__End_Date__c', type: 'date' },
            { type: 'action', typeAttributes: { rowActions: actions } } 
        ]);
        var action = cmp.get("c.getTasks");
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                cmp.set("v.data", response.getReturnValue());
                cmp.set("v.filteredData", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    },
    searchTable : function(cmp,event,helper) {
        var allRecords = cmp.get("v.data");
        var searchFilter = event.getSource().get("v.value").toUpperCase();
        
        var tempArray = [];
        var i;

        for(i=0; i < allRecords.length; i++){
            if(allRecords[i].Name && allRecords[i].Name.toUpperCase().indexOf(searchFilter) != -1) 
            {
                tempArray.push(allRecords[i]);
            }
        }
        cmp.set("v.filteredData",tempArray);
    },
    handleRowAction: function ( cmp, event, helper ) {
       
        var action = event.getParam( 'action' );
        var row = event.getParam( 'row' );
        var recId = row.Id;

        switch ( action.name ) {
            case 'edit':
                var editRecordEvent = $A.get("e.force:editRecord");
                editRecordEvent.setParams({
                    "recordId": recId
                });
                editRecordEvent.fire();
                break;
            case 'view':
                var viewRecordEvent = $A.get("e.force:navigateToURL");
                viewRecordEvent.setParams({
                    "url": "/" + recId
                });
                viewRecordEvent.fire();
                break;
            case 'delete':
                var idx = component.get("v.keyField");
                alert(idx)
        // component.find("recordHandler").deleteRecord($A.getCallback(function(deleteResult) {
        //     // NOTE: If you want a specific behavior(an action or UI behavior) when this action is successful 
        //     // then handle that in a callback (generic logic when record is changed should be handled in recordUpdated event handler)
        //     if (deleteResult.state === "SUCCESS" || deleteResult.state === "DRAFT") {
        //         // record is deleted
        //         console.log("Record is deleted.");
        //     } else if (deleteResult.state === "INCOMPLETE") {
        //         console.log("User is offline, device doesn't support drafts.");
        //     } else if (deleteResult.state === "ERROR") {
        //         console.log('Problem deleting record, error: ' + JSON.stringify(deleteResult.error));
        //     } else {
        //         console.log('Unknown problem, state: ' + deleteResult.state + ', error: ' + JSON.stringify(deleteResult.error));
        //     }
            
        // }));
         }
    }
})
