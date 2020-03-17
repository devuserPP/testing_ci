//const seleniumServer = require("selenium-standalone");
const SCREENSHOT_PATH = "tests_output/reports/screenshots/";
    
module.exports = {
  
    "src_folders" : ["my_tests"], // Where you are storing your Nightwatch e2e tests
    "output_folder": "tests_output/reports", // reports (test outcome) output by nightwatch
   
    
    "selenium" : {
      "start_process" : true, // tells nightwatch to start/stop the selenium process
      "server_path" : "/usr/local/lib/node_modules/selenium-standalone/.selenium/selenium-server/3.141.5-server.jar",
      //"server_path" : "node_modules/selenium-standalone/.selenium/selenium-server/3.141.5-server.jar",
      "log_path" : "tests_output/reports",
      "host": "127.0.0.1",
      "port" : 4444,
      "cli_args" : {
      //"webdriver.chrome.driver" : "/usr/local/lib/node_modules/selenium-standalone/.selenium/chromedriver/2.43-x64-chromedriver",
        "webdriver.chrome.driver" : "/usr/bin/chromedriver",

      }
    },


    "test_settings" : {
      "default" : {
        "selenium_port": 4444,
        "selenium_host": "localhost",
        "screenshots": {
          "enabled": true, // if you want to keep screenshots
          "path": SCREENSHOT_PATH, // save screenshots here},
          "on_failure": "true", // at the end of a test, if test assertions failed
          "on_error": "true" // when an error occurs while executing a command
        },
          "globals": {
            "waitForConditionTimeout": 5000 // sometimes internet is slow so wait.
          },
          "desiredCapabilities": { // use Chrome as the default browser for tests
            "browserName": "chrome",
            "chromeOptions": {
              "args" : ["headless", "no-sandbox", "disable-gpu"],              
              "w3c": false
            },
            "loggingPrefs": {"driver": "INFO", "performance": "INFO", "browser": "ALL"}
          }
        }
  }}
