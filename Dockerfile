ARG JSPACK="package.json"

FROM alpine:3.23.3 AS builder
ARG JSPACK
WORKDIR /workspace
COPY . .
RUN apk update && \
    apk upgrade