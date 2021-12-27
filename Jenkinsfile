pipeline {
  agent {
    docker {
      image 'node'
      args '--name jenkins-npm-build -u 0'
    }

  }
  stages {
    stage('Start Ganache-cli') {
      steps {
        sh 'npm i -g ganache-cli'
        sh 'nohup ganache-cli -p 7545 -i 5777 -m broccoli proof roof ozone help sustain turtle daughter vault picture potato reduce &'
      }
    }

    stage('Compile Contracts') {
      steps {
        sh 'npm i'
        sh 'npm i -g truffle'
        sh 'truffle migrate'
      }
    }

    stage('Build App') {
      steps {
        echo 'cd ./app'
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