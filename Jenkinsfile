pipeline {
    agent {
        docker {
            image 'devuserpp/selenium-chromless'
            args '-v /HOME/node.m2:/root/.m2'
        }
    }
    environment {
        HOME = '.'
    }
    
    stages {              
        
        stage('Install dependencies') {
            steps {
                    dir("./tests/nightwatch/") {                                                                    
                        sh "npm install"
                        sh "ls -la ${pwd()}"
                        
                    }
            }    
        }
        
        stage('Runing the test') {
            steps {
                     dir("./tests/nightwatch/") {
                         sh "npm run test-nightwatch"
                         sh "ls -la ${pwd()}"
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
