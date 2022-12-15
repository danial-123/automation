Feature: Create product from voyager
    
Background: voyager login
    Given Merchant is logged in
    When I am on the homepage
    And I am on the settings screen

@store @restaurant
    Scenario: change settings from voyager

    And fill the details of store settings
    And set the Pre payment configurations
    # And set the operating hours
    And set the fullfillment options and pickup detail
    And click on the save button 
    Then my details should get saved






