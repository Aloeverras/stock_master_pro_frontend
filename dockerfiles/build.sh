#!/bin/sh

fileNodeName="NodeFrontend"
nodeName="node_frontend"
version="1.0.0.0"

docker build -f "${fileNodeName}.Dockerfile" -t "${nodeName}_test:${version}" .