FROM alpine:3.23.3 AS builder
WORKDIR /workspace
COPY . .
RUN apk update && \
    apk upgrade