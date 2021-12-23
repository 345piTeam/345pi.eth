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

    stage('Deploy') {
      steps {
        dir(path: './app') {
          octopusPack(outputPath: './artifacts/', sourcePath: './build/', packageFormat: 'zip', packageId: '345pi', toolId: 'octocli')
          octopusPushPackage(serverId: 'octopus-server', toolId: 'octocli', packagePaths: './artifacts/*', overwriteMode: 'FailIfExists', verboseLogging: true, spaceId: 'space1')
          octopusCreateRelease(serverId: 'octopus-server', toolId: 'octocli', project: '345pi', releaseVersion: '0.1.1', spaceId: 'space1', verboseLogging: true)
        }

      }
    }

  }
  environment {
    NODE_OPTIONS = '--openssl-legacy-provider'
    CI = 'false'
  }
}