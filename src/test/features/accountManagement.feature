Feature: Account Management

  Scenario: User can create a new account
    When I go to the home page
    And I click Create an Account link
    Then I should be on account creation page with title "Create New Customer Account"
    When I enter first name "Ibrahim"
    And I enter last name "Beskat"
    And I enter email "beskat_${uniqueString}@example.com"
    And I enter password "Test@123"
    And I enter confirm password "Test@123"
    And I click Create an Account button
    Then I should see the account dashboard with title "My Account"
    And I should see greeting message "Welcome, Ibrahim Beskat!"

  

   