Feature: Create product for sorting from voyager
    
Background: voyager login
    Given Merchant is logged in
    When I am on the homepage
    And i am on the product screen
   
    @store @restaurant
    Scenario: creating new product from voyager


And check on the product page
Then product has been sort successfully