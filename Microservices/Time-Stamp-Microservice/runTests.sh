#!/bin/sh

docker image rm -f time-microservice-test


docker build -t time-microservice-test -f Test.Dockerfile .

docker run time-microservice-test