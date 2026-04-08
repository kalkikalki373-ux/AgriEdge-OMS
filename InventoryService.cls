public with sharing class InventoryService {

    public static void updateInventory(Id productId, Integer quantity) {
        Inventory__c inv = [
            SELECT Id, Stock__c 
            FROM Inventory__c 
            WHERE Product__c = :productId
            LIMIT 1
        ];

        inv.Stock__c = inv.Stock__c - quantity;
        update inv;

        if (inv.Stock__c < 10) {
            sendLowStockAlert(inv);
        }
    }

    private static void sendLowStockAlert(Inventory__c inv) {
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        mail.setToAddresses(new String[] {'inventory@agriedge.com'});
        mail.setSubject('Low Stock Alert');
        mail.setPlainTextBody('Stock is low for product: ' + inv.Product__c);
        Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });
    }
}
