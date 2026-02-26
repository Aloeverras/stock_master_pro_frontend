ARG JSPACK="package.json"
ARG WORKDIR="/workspace"

FROM alpine:3.23.3 AS builder
ARG JSPACK
ARG WORKDIR
WORKDIR $WORKDIR
COPY . .
RUN apk update && \
    apk upgrade