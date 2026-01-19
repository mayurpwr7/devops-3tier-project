pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main',
                url: 'https://github.com/mayurpwr7/devops-3tier-project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                cd backend
                docker build -t backend-app:latest .
                '''
            }
        }
    }
}
