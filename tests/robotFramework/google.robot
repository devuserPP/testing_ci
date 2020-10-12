*** Settings ***
Documentation    This is a basic test
Library          SeleniumLibrary 
# https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html

*** Variables ***
${url}                https://www.google.com
${browser}            chrome
${text}               css:input[name=q]
${expected_result}    Test


*** Test Cases ***


User fill in the Search text box
    [Documentation]             The user search 'Test' 
    set log level               trace
    open browser                ${url}                     ${browser}
    wait until page contains    ${url}
    input text                  ${text}                    Test
    press keys                  ${text}                    RETURN
    wait until page contains    ${expected_result}
    sleep                       5s
    close browser
