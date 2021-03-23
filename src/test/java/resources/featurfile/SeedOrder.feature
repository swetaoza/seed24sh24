Feature: OrderSeed Functional Testing
  In Order to check Order Seed Functionality Is Working

  I want to order my duck feed online
  So that I can feed the ducks

  @smoke
  Scenario: I can open given URL
    Given I am on home page
    When I enter Url
    And I click on OrderNowTab
    Then I redirected to Order Page

  @smoke
Scenario: I can Order seed with valid Input
      Given I am on home page
      When I enter Url
      And I click on OrderNowTab
      And I Enter Flock "50"
      And I select Frequency of feeding twice per week
      And I enter duration four weeks
      Then I get total "£59.45"
@smoke
Scenario: I can Order seed With valid Input
    Given I am on home page
    When I enter Url
  And I click on OrderNowTab
  And I Enter Flock "100"
  And I select Frequency of feeding twice per week
  And I enter duration four weeks
  Then I get total "£118.90"

  @smoke
  Scenario: I can not Order seed for invalid Flock Input
    Given I am on home page
    When I enter Url
    And I click on OrderNowTab
    And I Enter Flock "0"
    And I click on confirm Your Order BUtTon
    Then I get an Error message "How many ducks are you feeding? You must have at least 1 duck"

  @smoke
  Scenario: I can not Order seed for invalid Flock Input
    Given I am on home page
    When I enter Url
    And I click on OrderNowTab
    And I Enter Flock "100"
    And I click on confirm Your Order BUtTon
    Then I can order seed for duck and navigate to order page
