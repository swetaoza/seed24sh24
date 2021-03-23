package uk.org.sh24.seed24.stepdefs;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.org.sh24.seed24.pages.HomePage;

public class MyStepdefs {
    @When("^I am on home page$")
    public void iAmOnHomePage() {
    }

    @And("^I click on OrderNowTab$")
    public void iClickOnOrderNowTab() {
        new HomePage().ClickOnOrDerNOw();

    }

    @Then("^I redirected to Order Page$")
    public void iRedirectedToOrderPage() {
    }




    @When("^I enter Url$")
    public void iEnterUrl() {
    }
}
