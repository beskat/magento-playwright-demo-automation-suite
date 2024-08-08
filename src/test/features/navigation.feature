Feature: Navigation to Main Sections

  Scenario: User navigates to What's New section
    When I go to the home page
    And I click on "What's New" in the navigation menu
    Then I should be on the section page with title "What's New"