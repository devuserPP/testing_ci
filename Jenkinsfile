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
                    dir("./tests/nightwatch/") {                                                                    
                        sh 'npm install'
                        sh 'npm audit fix'
                        sh 'npm audit'
                        sh 'ls -all'
                        
                    }
            }    
        }
        
        stage('Runing the test') {
            steps {
                     dir("./tests/nightwatch/") {
                        sh 'npm run test-nightwatch'                        
                     }                        
            }
            post {    
                always {
                        dir("./tests/nightwatch/tests_output/reports") {                                               
                        archiveArtifacts artifacts: '*.log', fingerprint: true
                        junit '*.xml'
                        
                        }
                }
            }
        }

   
    }
}
