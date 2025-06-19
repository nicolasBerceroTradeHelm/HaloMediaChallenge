Feature: Playwright Homepage Tests

  Scenario: Search browserContext and validate URL
    When I click the Docs button
    Then I should see the text Installation
    When I search for "browserContext"
    And I click the first search result for "browserContext"
    Then the URL should contain "class-browsercontext"

  Scenario: New window opens from Community tab
    When I click the Community link
    Then I should see the Welcome text
    When I click the Learn Playwright button and a new window opens
    Then the new window should contain URL matching "build-with-playwright"
    And the new window should contain a heading with "Playwright"
