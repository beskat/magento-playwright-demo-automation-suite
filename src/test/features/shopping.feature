Feature: Shopping

  Scenario: User can add a product to the cart
    When I go to the home page
    And I navigate to Men>Tops>Tees page
    Then I should be on tees page with title "Tees"
    And I verify the tee "Strike Endurance Tee" is displayed on the page
    When I click on the tee "Strike Endurance Tee"
    Then I should be on the tee page with title "Strike Endurance Tee"  
    When I select size "M"
    And I select color "Blue"
    And I click on Add to Cart button
    Then I should see the message "You added Strike Endurance Tee to your shopping cart." on the page