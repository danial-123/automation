Feature: Point of sale pickup
    
Background: voyager login
    Given Merchant is logged in
    When I am on the homepage
    And i am on the pos screen

    
    @store @restaurant
    Scenario: placing order from pickup
        And select the pickup
        And check the customer details by entering number for pickup
        And i search the product with name "Tuc" for pickup
        And check the calculation for pickup
        And go to the checkout page for pickup
        And click on place order button for pickup
        Then my order should get place for pickup
        