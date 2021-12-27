pipeline {
  agent {
    docker {
      image 'node'
    }

  }
  stages {
    stage('Install Ganache') {
      steps {
          // Fix npm perm issues
          //sh 'wget -O- https://raw.githubusercontent.com/glenpike/npm-g_nosudo/master/npm-g-nosudo.sh | sh'
          sh 'chown -R 99:100 "/.npm"'
          sh 'npm i --global --unsafe-perm ganache-cli'
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