pipeline {
  agent {
    docker {
      image "node"
      args "-u 0"
    }
  }

  stages {
    stage("Install Dependencies") {
      steps {
        sh "npm i"
      }
    }

    stage("Test Contracts") {
      steps {
        sh "npx hardhat test"
      }
    }

    stage("Compile Contracts") {
      steps {
        sh "npx hardhat compile"
      }
    }

    stage("Build Frontend") {
      steps {
        sh "npm run build"
      }
    }

    stage("Test Frontend") {
      steps {
        sh "npm run test"
      }
    }

    // stage("Deploy") {
    //   steps {
    //     sh "npm i -g @octopusdeploy/octojs"
    //     sh "octojs pack"
    //     withCredentials([string(credentialsId: 'OctopusAPIKey', variable: 'APIKey')]) {
    //       sh "octojs push --package /artifacts/* --apiKey ${APIKey} --server https://octopus.nrgserver.me --replace"
    //     }
    //   }
    // }
  }

  environment {
    NODE_OPTIONS = "--openssl-legacy-provider"
    CI = "false"
  }
}