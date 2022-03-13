#!/bin/sh
echo "Please Login to OCP using oc login ..... "  
echo "Make sure Openshift Serverless Operator is installed"
echo "Make sure knative-serving namespace is created and an instance is already provisioned"
echo "Press [Enter] key to resume..." 
read

oc new-project dev
oc apply -f https://raw.githubusercontent.com/osa-ora/LoanValService/master/configs/image.yaml
oc apply -f https://raw.githubusercontent.com/osa-ora/LoanValService/master/configs/bc.yaml
oc apply -f https://raw.githubusercontent.com/osa-ora/LoanValService/master/configs/serverless.yaml
echo "Service 'LoanVal' deployed successfully as a serverless" 
