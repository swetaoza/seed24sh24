$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurfile/SeedOrder.feature");
formatter.feature({
  "line": 1,
  "name": "OrderSeed Functional Testing",
  "description": "In Order to check Order Seed Functionality Is Working\r\n\r\nI want to order my duck feed online\r\nSo that I can feed the ducks",
  "id": "orderseed-functional-testing",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3993848000,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "I can open given URL",
  "description": "",
  "id": "orderseed-functional-testing;i-can-open-given-url",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I enter Url",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click on OrderNowTab",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I redirected to Order Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 136276900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iEnterUrl()"
});
formatter.result({
  "duration": 25600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnOrderNowTab()"
});
formatter.result({
  "duration": 227050800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iRedirectedToOrderPage()"
});
formatter.result({
  "duration": 88800,
  "status": "passed"
});
formatter.after({
  "duration": 747718400,
  "status": "passed"
});
formatter.before({
  "duration": 2558429500,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "I can Order seed with valid Input",
  "description": "",
  "id": "orderseed-functional-testing;i-can-order-seed-with-valid-input",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I enter Url",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click on OrderNowTab",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Enter Flock \"50\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select Frequency of feeding twice per week",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter duration four weeks",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I get total \"£59.45\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 39000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iEnterUrl()"
});
formatter.result({
  "duration": 32100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnOrderNowTab()"
});
formatter.result({
  "duration": 214664200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 15
    }
  ],
  "location": "Mypositive.iEnterFlock(String)"
});
formatter.result({
  "duration": 119826300,
  "status": "passed"
});
formatter.match({
  "location": "Mypositive.iSelectFrequencyOfFeedingTwicePerWeek()"
});
formatter.result({
  "duration": 72879900,
  "status": "passed"
});
formatter.match({
  "location": "Mypositive.iEnterDurationFourWeeks()"
});
formatter.result({
  "duration": 71383500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£59.45",
      "offset": 13
    }
  ],
  "location": "Mypositive.iGetTotal(String)"
});
formatter.result({
  "duration": 43737600,
  "status": "passed"
});
formatter.after({
  "duration": 672160800,
  "status": "passed"
});
formatter.before({
  "duration": 2623560300,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "I can Order seed With valid Input",
  "description": "",
  "id": "orderseed-functional-testing;i-can-order-seed-with-valid-input",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I enter Url",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I click on OrderNowTab",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I Enter Flock \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select Frequency of feeding twice per week",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter duration four weeks",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I get total \"£118.90\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 89100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iEnterUrl()"
});
formatter.result({
  "duration": 122500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnOrderNowTab()"
});
formatter.result({
  "duration": 222789600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 15
    }
  ],
  "location": "Mypositive.iEnterFlock(String)"
});
formatter.result({
  "duration": 105960400,
  "status": "passed"
});
formatter.match({
  "location": "Mypositive.iSelectFrequencyOfFeedingTwicePerWeek()"
});
formatter.result({
  "duration": 76803400,
  "status": "passed"
});
formatter.match({
  "location": "Mypositive.iEnterDurationFourWeeks()"
});
formatter.result({
  "duration": 108992200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£118.90",
      "offset": 13
    }
  ],
  "location": "Mypositive.iGetTotal(String)"
});
formatter.result({
  "duration": 40614700,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c£[118.90]\u003e but was:\u003c£[59.45]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat uk.org.sh24.seed24.stepdefs.Mypositive.iGetTotal(Mypositive.java:31)\r\n\tat ✽.Then I get total \"£118.90\"(src/test/java/resources/featurfile/SeedOrder.feature:31)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1073469200,
  "status": "passed"
});
formatter.before({
  "duration": 2525461100,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "I can not Order seed for invalid Flock Input",
  "description": "",
  "id": "orderseed-functional-testing;i-can-not-order-seed-for-invalid-flock-input",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I enter Url",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I click on OrderNowTab",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I Enter Flock \"0\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on confirm Your Order BUtTon",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I get an Error message \"How many ducks are you feeding? You must have at least 1 duck\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 48100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iEnterUrl()"
});
formatter.result({
  "duration": 30200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnOrderNowTab()"
});
formatter.result({
  "duration": 282701200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 15
    }
  ],
  "location": "Mypositive.iEnterFlock(String)"
});
formatter.result({
  "duration": 125224600,
  "status": "passed"
});
formatter.match({
  "location": "Mypositive.iClickOnConfirmYourOrderBUtTon()"
});
formatter.result({
  "duration": 191009800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "How many ducks are you feeding? You must have at least 1 duck",
      "offset": 24
    }
  ],
  "location": "Mypositive.iGetAnErrorMessage(String)"
});
formatter.result({
  "duration": 71674500,
  "status": "passed"
});
formatter.after({
  "duration": 815596300,
  "status": "passed"
});
formatter.before({
  "duration": 2465774000,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "I can not Order seed for invalid Flock Input",
  "description": "",
  "id": "orderseed-functional-testing;i-can-not-order-seed-for-invalid-flock-input",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 42,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "I enter Url",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "I click on OrderNowTab",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I Enter Flock \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I click on confirm Your Order BUtTon",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I can order seed for duck and navigate to order page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 385900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iEnterUrl()"
});
formatter.result({
  "duration": 33600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnOrderNowTab()"
});
formatter.result({
  "duration": 269417800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 15
    }
  ],
  "location": "Mypositive.iEnterFlock(String)"
});
formatter.result({
  "duration": 119631500,
  "status": "passed"
});
formatter.match({
  "location": "Mypositive.iClickOnConfirmYourOrderBUtTon()"
});
formatter.result({
  "duration": 222827900,
  "status": "passed"
});
formatter.match({
  "location": "Mypositive.iCanOrderSeedForDuckAndNavigateToOrderPage()"
});
formatter.result({
  "duration": 63009200,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Your Address Details]\u003e but was:\u003c[Order Duck Seed]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat uk.org.sh24.seed24.stepdefs.Mypositive.iCanOrderSeedForDuckAndNavigateToOrderPage(Mypositive.java:53)\r\n\tat ✽.Then I can order seed for duck and navigate to order page(src/test/java/resources/featurfile/SeedOrder.feature:49)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1275915600,
  "status": "passed"
});
});