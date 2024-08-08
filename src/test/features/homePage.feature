Feature: Home Page

  Background: Go to home page
    When I go to the home page
  
  Scenario: Verify home page loads and navigation sections are visible
    Then The page title should be "Home Page"
    And The site logo should be visible
    And I should see the main navigation menu
    And I should see the following sections in the navigation:
      | What's New  |
      | Women       |
      | Men         |
      | Gear        |
      | Training    |
      | Sale        |

  Scenario: Verify footer content
   And I scroll down to the bottom of the page
   Then I should see the following footer link names:
      | Notes                                   |
      | Practice API Testing using Magento 2    |
      | Write for us                            |
      | Subscribe                               |
      | Search Terms                            |
      | Privacy and Cookie Policy               |
      | Advanced Search                         |
      | Orders and Returns                      |