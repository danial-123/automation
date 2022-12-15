Feature: Point of sale walkin

Background: voyager login
    Given Merchant is logged in
    When I am on the homepage
    And  i am on the pos screen

    @store @restaurant
    Scenario: placing order from walkin

    And select the walkin
    And check the customer details by entering number for walkin
    And i search the product with name "Tuc" for walkin
    And check the calculation for walkin
    And go to the checkout page for walkin
    And click on place order button for walkin
    Then my order should get place for walkin