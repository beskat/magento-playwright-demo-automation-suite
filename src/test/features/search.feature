Feature: Product Search

  Scenario: User can search for a product
    When I go to the home page
    And I enter "T-shirt" in the search bar
    And I click the search button
    Then I should see search results page title is "Search results for: 'T-shirt'"