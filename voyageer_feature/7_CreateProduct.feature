Feature: Create product from voyager
    
Background: voyager login
    Given Merchant is logged in
    When I am on the homepage
    And i am on the product screen
   
    @store @restaurant
    Scenario: creating new product from voyager

And click on the add button
And filled all the product details
And click on create product button
Then product is created successfullyy

