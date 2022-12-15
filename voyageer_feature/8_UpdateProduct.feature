Feature: Update product from voyager
    
Background: voyager login
    Given Merchant is logged in
    When I am on the homepage
    And i am on the product screen
   
    @store @restaurant
    Scenario: Updating product from voyager

    And And searches the product from the search bar 
    And Open that product to update
    And Update all the values of the product and save it
    And Again search the product from the search bar and open the product 
    Then The product should get updated
    