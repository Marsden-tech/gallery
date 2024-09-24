pipeline {
    agent any
    tools{
        nodejs 'node'
    }
    
    environment {
        RENDER_API_KEY = credentials('render-api-key')
        RENDER_SERVICE_ID = 'srv-crmqoro8fa8c73andlg0'
    }

    stages {
        stage('Cloning..') {
            steps {
                git branch:'master', url:'https://github.com/Marsden-tech/gallery'
            }
        }
        stage('Installing dependencies') {
            steps{
                sh 'npm install'
            }
        }
        stage('Testing..'){
            steps{
                sh 'npm test'
            }
        }
        stage('Deploying...'){
            steps{
                sh """
                    curl --request POST \
                    --url https://api.render.com/v1/services/${RENDER_SERVICE_ID}/deploys \
                    --header 'accept: application/json' \
                    --header 'authorization: Bearer ${RENDER_API_KEY}' \
                    --header 'content-type: application/json'
                """
            }
        }
        
    }
    post {
    success {
        slackSend (
            message: "IP1-New Attempt has been successfully deployed by build #${env.BUILD_ID}. Check it out on this link: https://gallery-np5f.onrender.com"
            )
        }


    failure {
        mail(
            to: 'marsdenodhiambo60@gmail.com',
            subject: "Build Failed: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
            body: "The build ${env.JOB_NAME} #${env.BUILD_NUMBER} has failed. View details at: ${env.BUILD_URL}"
        )
    }
}
}