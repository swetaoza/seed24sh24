package uk.org.sh24.seed24;


import com.cucumber.listener.Reporter;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import uk.org.sh24.seed24.basepage.BasePage;
import uk.org.sh24.seed24.propertyreader.PropertyReader;
import uk.org.sh24.seed24.utilities.Utility;

import java.io.IOException;


public class Hooks extends BasePage {
    //TestBase is similar

    @Before
    public void openBrowser(){
        selectBrowser(PropertyReader.getInstance().getProperty("browser"));
    }
   // Reporter.assignAuthor("Prime Trainee", "Sweta oza");

    @After
    public void tearDown(Scenario scenario){
        if(scenario.isFailed()){
            String screenShotPath = Utility.getScreenshot(driver, scenario.getName().replace(" ", "_"));
            try {
                Reporter.addScreenCaptureFromPath(screenShotPath);
            } catch (IOException e) {
                e.printStackTrace();
            }

        }
        driver.quit();
    }
}
