Feature: Create product with multiple select options from voyager
    
Background: voyager login
    Given Merchant is logged in restaurant
    When I am on the homepage
    And i am on the product screen
   
    @store @restaurant
    Scenario: creating new product with options from voyager

And click on the add button
And filled all the productss details
And fill the multiple select options details
And click on create product button
Then product is created successfully