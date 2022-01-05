pipeline {
  agent {
    docker {
      image 'node'
      args '-u 0'
    }
  }

  stages {
    stage('Start Ganache') {
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

    stage('Deploy') {
      steps {
        sh 'npm i -g @octopusdeploy/octojs'
        dir(path: './app') {
          sh 'octojs pack --id 345pi-${env.JOB_NAME}'
          sh 'octojs push --package /artifacts/* --apiKey API-UETROE50KPOYRDE4O5X032BAKNIRZEZ --server https://octopus.nrgserver.me --replace'
        }
      }
    }
  }

  environment {
    NODE_OPTIONS = '--openssl-legacy-provider'
    CI = 'false'
  }
}