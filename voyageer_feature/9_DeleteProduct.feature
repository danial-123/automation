Feature: Deleting product from voyager
    
Background: voyager login
    Given Merchant is logged in
    When I am on the homepage
    And i am on the product screen
   
    @store @restaurant
    Scenario: Deleting product from voyager

    And And search the product from the search bar 
    And Open that product 
    And Click on Delete icon
    Then The product should get deleted