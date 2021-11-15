1. aks
    1. working experience 
        1. Explain
    2. Functionality
        Private cluster => to access the api endpoint within a vnet
        Public cluster =>
        Monitor => |
            prometheus => to analysis the pod perfomance metrics
            Log analytics workspace => performace + log analytics => using the workbook.

2. Kubernetes
    component
    master nodes:
        1. api server
        4. scheduler
        5. controller
        6. etcd
    both
        2. proxy Server
        3. kublet

    replicaset
        Desire 
        available
        current

    Deploymentset
    configmap
        => configuration change and map
    Secrets
        => base64 
    Igress controller       => Ingress      => AGIC
        9.9.9.9                fourtimes.ml

2. azure devops
    pielines
        yaml    => code
        classic
        build ( possible to set approval ) + Release ( Approval machanisam )
    variables =>
        1. library => keyvault
        2. global  => yaml 
    service connections =>
        Service account or SPN
        SPN
    azure-pipelines.yml
    ---
    name:
    variables:
        environemnt: "name"
    parameters:
    triggers:
    pool:
    jobs:
      job:
    stages:
      stage
    steps:
     - bash:
     - bash:
3. acr

    how to integrate acr to aks
        U have integrate to directly
        kuberntes yaml ( Need to mention the yaml file)
4. aws

    s3 => 
    iam => 
    lambda => 

5. terraform
    provider =>
    resource =>
    data source =>
    variables =>
    module => 

# Provider
    provider "aws" {}
    resource "s3" "tf" {}
    data "s3" "tf" {}
    variable "region" {}

    module "tf" {
        source = "sourcePath"
    }
    
    # Provisionor {
        local_exec = "exec"
        remote_exec = "exec"
    }

6. ansible
    Configuration management tool
    terraform => Provisionor => 
    Roles => Resource module for ansible
    Playbook => multiple adhoc commands
    adhoc command = single line command
7. Jenkins
    Open source CICD
        Declarative
        Scripted

    # Declatrative
    pipeline {
        agent any
        stages{
            statge() {

            }
            statge() {
                
            }
        }
    } 

    # Scripted
    node {
        agent any
        stages{
            statge() {

            }
            statge() {
                
            }
        }
    } 

8. Docker
    Third generation of VM
        1. Baremetal
        2. virtualbox
        3. Containerized
    Dockerfile
    docker build -t tagname .
    docker push => authendication first

