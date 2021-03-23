package uk.org.sh24.seed24.stepdefs;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import uk.org.sh24.seed24.pages.HomePage;

public class Mypositive {


    @And("^I select Frequency of feeding twice per week$")
    public void iSelectFrequencyOfFeedingTwicePerWeek() {
        new HomePage().SelectTwicePerWeek();
    }



    @And("^I Enter Flock \"([^\"]*)\"$")
    public void iEnterFlock(String arg0)  {
        new HomePage().EnterFolkNumber(arg0);
    }

    @And("^I enter duration four weeks$")
    public void iEnterDurationFourWeeks() {
        new HomePage().sEleCtFOURwEeKDuration();
    }

    @Then("^I get total \"([^\"]*)\"$")
    public void iGetTotal(String arg0)  {
        Assert.assertEquals(arg0,new HomePage().getTotal());

    }

    @Then("^I get an Error message \"([^\"]*)\"$")
    public void iGetAnErrorMessage(String eRRor_mEsG)  {
       Assert.assertEquals(eRRor_mEsG,new HomePage().getFlockSizeErrorMessage());
    }

    @And("^I click on confirm Your Order BUtTon$")
    public void iClickOnConfirmYourOrderBUtTon() {
        new HomePage().ClickOnConfirmYourOrderButton();
    }

    @Then("^I can order seed for duck$")
    public void iCanOrderSeedForDuck() {


    }

    @Then("^I can order seed for duck and navigate to order page$")
    public void iCanOrderSeedForDuckAndNavigateToOrderPage() {
        Assert.assertEquals("Your Address Details",new HomePage().getFlockSizeSuccessMessage());
    }
}
