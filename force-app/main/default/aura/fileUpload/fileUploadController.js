({
    handleUploadFinished: function (cmp, event) {
        // Get the list of uploaded files
        var uploadedFiles = event.getParam("files");
        alert("Files uploaded : " + uploadedFiles.length);

        // Get the file name
        uploadedFiles.forEach(file => console.log(file.name));
    },
    previewFile : function(component, event, helper) {
		var idFile = event.getSource().get("v.name");
        var openPreview = $A.get('e.lightning:openFiles');
        openPreview.fire({
            recordIds: [idFile]
        });
	},
    doInit : function(component, event, helper) {
        console.log('inside');
        var action = component.get("c.getFileId");
        //action.setparm
        action.setCallback(this,function(response){
            if (response.getState() === "SUCCESS"){
                 console.log('success');
                component.set("v.fileDetails",response.getReturnValue());
            }
            else
            {
                alert('Error');
            }
        });
        $A.enqueueAction(action);
    },
})