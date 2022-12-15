Feature: Point of sale
    
Background: voyager login
    Given Merchant is logged in
    When I am on the homepage
    And i am on the pos screen

    @store @restaurant
    Scenario: placing order from delivery

        And select the delivery
        And check the customer details by entering number
        And i search the product with name "Tuc"
        And check the calculation
        And go to the checkout page
        And click on place order button
        Then my order should get place
        # Then open the details on orders detail page
        # Then verify the details
    


    