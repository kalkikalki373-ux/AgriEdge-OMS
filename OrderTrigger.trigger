trigger OrderTrigger on Order__c (after insert) {
    if (Trigger.isAfter && Trigger.isInsert) {
        OrderTriggerHandler.afterInsert(Trigger.new);
    }
}
