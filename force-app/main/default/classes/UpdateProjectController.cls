public with sharing class UpdateProjectController {
    @AuraEnabled    
    Public static list<project__c> getProjects(){
        return [SELECT Id,Name__c, Deadline__c, Status__c, PM__r.Name, Account_Lookup__r.Name from Project__c LIMIT 1] ;
    }
}
