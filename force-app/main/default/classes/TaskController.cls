public with sharing class TaskController {

    @AuraEnabled
    public static List<taskcustom__c> getTasks()
    {
        return [SELECT Id,Name,phongnh__Assigner__r.Name, phongnh__Status__c, phongnh__Start_Date__c, phongnh__End_Date__c,phongnh__Project__r.Name  FROM phongnh__TaskCustom__c order by phongnh__End_Date__c asc];
    }

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
    public static void delTask(Task taskRec){
    delete taskRec;
    } 

}
