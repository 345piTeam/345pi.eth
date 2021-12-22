pipeline {
  agent {
    docker {
      image 'node'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'npm i'
        echo 'Changing directory to ./app'
        dir(path: './app') {
          sh 'npm i'
          sh 'npm run build'
        }

      }
    }

    stage('Test') {
      steps {
        dir(path: './app') {
          sh 'npm run test'
        }

      }
    }

  }
  environment {
    NODE_OPTIONS = '--openssl-legacy-provider'
    CI = 'false'
  }
}