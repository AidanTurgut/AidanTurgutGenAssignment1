pipeline {
	agent any
	stages {
		stage('Build'){
			steps { sh 'mvn clean install' }
		}
		stage('Test'){
			steps { sh 'mvn test' }
		}
		post{
			success{
				echo 'Pipeline has successfully completed.'
			}
			failure{
				echo 'The pipeline failed.'
			}
		}
	}
}