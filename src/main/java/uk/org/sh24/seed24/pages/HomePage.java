package uk.org.sh24.seed24.pages;

import org.openqa.selenium.Alert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import uk.org.sh24.seed24.utilities.Utility;

public class HomePage extends Utility {

    //-------WebElements Locators------//
    @FindBy(xpath = "//body[1]/div[1]/main[1]/div[1]/a[1]")
    WebElement _Order_Now_Button;

    @FindBy(id = "quantity_form_flock_size")
    WebElement _fLOcKInput;

    @FindBy(id = "quantity_form_feeding_frequency_1")
    WebElement _once_per_week;
    @FindBy(xpath = "//body[1]/div[1]/main[1]/div[1]/form[1]/div[3]/div[1]/div[1]/label[2]")
    WebElement _twice_Per_week_button;
    @FindBy(id = "quantity_form_feeding_frequency_7")
    WebElement _Seven_times_per_week;

    @FindBy(name = "One week")
    WebElement _one_week_duration;
    @FindBy(name = "Two weeks")
    WebElement _two_week_duration;
    @FindBy(xpath = "//body[1]/div[1]/main[1]/div[1]/form[1]/div[4]/div[1]/div[1]/label[3]")
    WebElement _four_week_duration;
    @FindBy(name = "Twelve weeks")
    WebElement _twelve_week_duration;

    @FindBy(name = "commit")
    WebElement _conFirM_Your_Order;

    @FindBy(xpath = "//body[1]/div[1]/main[1]/div[1]/form[1]/div[5]/div[1]/strong[2]")
    WebElement _first_Verified_Value;

    @FindBy(xpath = "//body[1]/div[1]/main[1]/div[1]/form[1]/div[1]/ul[1]/li[1]")
    WebElement _fLooCKSize_Error_Message;

    @FindBy(xpath = "//body[1]/div[1]/main[1]/div[1]/h1[1]")
    WebElement _flOcKSize_Success_Message;


    //-----Methods--------//

    //--This Method will click on Order now button
    public void ClickOnOrDerNOw() {
        clickOnElement(_Order_Now_Button);
    }


    //---This method will enter flock number to number of Duck Button
    public void EnterFolkNumber(String fOlkNUmbER) {
        sendTextToElement(_fLOcKInput, fOlkNUmbER);
    }

    //---This Will select Once per week feed
    public void SelectOncePerWeek() {

        clickOnElement(_once_per_week);
    }

    //---This will select twice per week
    public void SelectTwicePerWeek() {

        clickOnElement(_twice_Per_week_button);
    }

    //---This will select  seven Times per week
    public void SelectSevenTimesPerWeek() {

        clickOnElement(_Seven_times_per_week);
    }

    //----This will select duration one week
    public void sEleCtONEwEeKDuration() {

        clickOnElement(_one_week_duration);
    }

    //----This will select duration two week
    public void sEleCtTwOwEeKDuration() {

        clickOnElement(_two_week_duration);
    }

    //----This will select duration four week
    public void sEleCtFOURwEeKDuration() {
        clickOnElement(_four_week_duration);
    }

    //----This will select duration tWelEVe week
    public void sEleCtTWelVewEeKDuration() {

        clickOnElement(_twelve_week_duration);
    }

    public String getTotal() {
        return getTextFromElement(_first_Verified_Value);
    }

    //-----This Method Will click on confirm your order button

    public void ClickOnConfirmYourOrderButton() {

        clickOnElement(_conFirM_Your_Order);
    }

    public String getFlockSizeErrorMessage() {
        return getTextFromElement(_fLooCKSize_Error_Message);
    }

    public String getFlockSizeSuccessMessage() {
        return getTextFromElement(_flOcKSize_Success_Message);
    }

}
