pipeline {
    agent {
        docker {
            image 'devuserpp/selenium-chromless'
        }
    }
    environment {
        HOME = '.'
    }
    
    stages {              
        
        stage('Install dependencies') {
            steps {
                    dir("./tests/cucumber/") {                                                                    
                        sh 'yarn install'
                        sh 'ls -all'
                        
                    }
            }    
        }
        
        stage('Runing the test') {
            steps {
                     dir("./tests/cucumber/") {
                        sh 'npm run e2e-json'
                        sh 'npm run json2junit'                        
                     }
                        
            }
            post {    
                always {
                        dir("./tests/cucumber/tests_output/reports") {                       
                        cucumber jsonReportDirectory: './',
                                 fileIncludePattern: "cucumber_report.json"
                        archiveArtifacts artifacts: '*.log', fingerprint: true
                        junit '*.xml'
                        publishHTML([allowMissing: true, alwaysLinkToLastBuild: false, keepAll: true, reportDir: './', reportFiles: 'cucumber_report.html', reportName: 'HTML Report', reportTitles: 'My Report'])
                        }
                }
            }
        }

   
    }
}
