package uk.org.sh24.seed24.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import uk.org.sh24.seed24.utilities.Utility;

public class OrderPage extends Utility {

    //---Web elements Locators---//

    @FindBy(xpath = "//body[1]/div[1]/main[1]/div[1]/form[1]/div[1]/div[1]/input[1]")
    WebElement _oRdEr_Name;
    @FindBy(xpath = "//body[1]/div[1]/main[1]/div[1]/form[1]/div[2]/div[1]/input[1]")
    WebElement _oRdEr_AddREss;
    @FindBy(xpath = "//body[1]/div[1]/main[1]/div[1]/form[1]/div[2]/div[1]/input[3]")
    WebElement _oRdEr_ToWn;
    @FindBy(xpath = "//body[1]/div[1]/main[1]/div[1]/form[1]/div[2]/div[1]/input[4]")
    WebElement _oRdEr_PoSTCode;

    @FindBy(xpath = "//body[1]/div[1]/main[1]/div[1]/form[1]/div[3]/div[1]/input[1]")
    WebElement _proCeD_To_Confirm_ButTOn;

    @FindBy(xpath = "//body[1]/div[1]/main[1]/div[1]/h3[1]")
    ////body[1]/div[1]/main[1]/div[1]/form[1]/div[1]/div[1]/input[1]
    WebElement _oRdeR_Detail_Confirmation_text;


    @FindBy(xpath = "//body[1]/div[1]/main[1]/div[1]/form[1]/div[1]/div[1]/input[1]")
    WebElement _cONFirM_YouR_Order_Button;


    //----Methods ----//

    //---This Method will Enter Order Name To Order Form
    public void eNteROrdErName(String O_name) {
        sendTextToElement(_oRdEr_Name, O_name);
    }

    //---This Will Enter Address to Order Form
    public void eNtEROrderAddress(String o_Address) {
        sendTextToElement(_oRdEr_AddREss, o_Address);
    }

    //----This Will Enter Town to order form
    public void eNTerOrderTown(String o_Town) {
        sendTextToElement(_oRdEr_ToWn, o_Town);
    }

    //----This will Enter PostCode to OrderForm
    public void eNtEROrDerPosTCoDE(String o_PostCode) {
        sendTextToElement(_oRdEr_PoSTCode, o_PostCode);
    }

}
