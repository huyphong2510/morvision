public with sharing class CommunityCreateNew {
    @AuraEnabled    
    Public static list<contact> getContacts(){
        return [SELECT id,name from contact limit 10];
    }
}
