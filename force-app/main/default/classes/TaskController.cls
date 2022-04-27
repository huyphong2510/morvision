public with sharing class TaskController {

    // @AuraEnabled
    // public static List<taskcustom__c> getTasks()
    // {
    //     return [SELECT Id,Name,Assigner__r.name, Status__c, Start_Date__c, End_Date__c, Project__r.name  FROM TaskCustom__c order by END_DATE__c asc];
    // }

    @AuraEnabled
  	  public static List<TaskCustom__c> findTasks(String searchKey ){
          String name = '%'+ searchKey  + '%';        	
          return [select Id,Name, Project__r.Name, Assigner__r.Name, Status__c, End_Date__c  FROM TaskCustom__c
          where Name LIKE: name order by END_DATE__c asc LIMIT 20];
            }

  
    @AuraEnabled
    public static List<taskcustom__c> get1Month()
    {
    return [SELECT Id,Name, Assigner__r.Name, Project__r.Name, Status__c, End_Date__c FROM TaskCustom__c WHERE End_Date__c = THIS_MONTH order by End_Date__c asc];
    }   
    
    @AuraEnabled
    public static List<taskcustom__c> get7Days()
{
    return [SELECT Id,Name, Assigner__r.Name, Project__r.Name, Status__c, End_Date__c FROM TaskCustom__c WHERE End_Date__c = THIS_WEEK order by End_Date__c asc];
}
@AuraEnabled
    public static List<TaskResponse> getTaskRecords() {
        try {
            HttpRequest httpRequest = new HttpRequest();
            httpRequest.setMethod('GET');
            httpRequest.setEndpoint('callout:TaskResponse');
            Http http = new Http();
            HttpResponse httpResponse = http.send(httpRequest);
            return (List<TaskResponse>) JSON.deserialize(httpResponse.getBody(), List<TaskResponse>.class);
        } catch (Exception ex) {
            throw new AuraHandledException(ex.getMessage());
        }
    }
 
    public class TaskResponse {
        @AuraEnabled
        public Integer id { get; set; }
        @AuraEnabled
        public String name { get; set; }

    }
}
