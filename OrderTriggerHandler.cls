public class OrderTriggerHandler {

    public static void afterInsert(List<Order__c> newOrders) {
        for (Order__c ord : newOrders) {
            InventoryService.updateInventory(ord.Product__c, ord.Quantity__c);
        }
    }
}
