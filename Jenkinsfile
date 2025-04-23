pipeline {
    agent any

    environment {
        NODE_HOME = tool name: 'nodejs', type: 'ToolType'  // Si Node.js est installé via Jenkins
    }

    stages {
        stage('Install dependencies') {
            steps {
                script {
                    // Installer les dépendances
                    sh 'npm install'
                }
            }
        }

        stage('Run tests') {
            steps {
                script {
                    // Lancer les tests avec Jest
                    sh 'npm test'
                }
            }
        }
    }

    post {
        always {
            // Actions après l'exécution des tests, comme un rapport ou une notification
            echo 'Pipeline terminé.'
        }
    }
}
