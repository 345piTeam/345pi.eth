pipeline {
  agent {
    docker {
      args '-p 9998:9998'
      image 'node'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'npm i'
      }
    }

  }
}