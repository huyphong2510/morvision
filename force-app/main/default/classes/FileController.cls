public with sharing class FileController {
    
    @AuraEnabled    
    Public static list<ContentDocument> getFileId(){
        return [SELECT Id FROM ContentDocument];
    }
}
