public with sharing class OrderController {

    public static void createOrder(Order__c orderRec) {
        insert orderRec;

        // Create task for order processing
        Task t = new Task(
            Subject = 'Process New Order',
            WhatId = orderRec.Id,
            Status = 'Not Started',
            Priority = 'High'
        );
        insert t;
    }

    public static void updateOrderStatus(Id orderId, String status) {
        Order__c ord = [SELECT Id, Status__c FROM Order__c WHERE Id = :orderId];
        ord.Status__c = status;
        update ord;

        // Send Notification (simplified)
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        mail.setToAddresses(new String[] {'ops@agriedge.com'});
        mail.setSubject('Order Status Updated');
        mail.setPlainTextBody('Order ' + orderId + ' is now ' + status);
        Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });
    }
}
