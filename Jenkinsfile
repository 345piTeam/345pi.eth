pipeline {
  agent {
    docker {
      image 'node'
    }

  }
  stages {
    stage('Install Ganache') {
      steps {
          sh 'npm i ganache-cli'
          sh 'nohup ganache-cli -p 7545 -i 5777 -m broccoli proof roof ozone help sustain turtle daughter vault picture potato reduce &'
      }
    }


    stage('Build') {
      steps {
        sh 'npm i'
        sh 'truffle migrate'
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