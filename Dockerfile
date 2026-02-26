FROM alpine:3.23.3 
ARG PACKAGES
RUN apk update && \
    apk add ${PACKAGES} && \
    apk upgrade && \
    rm -rf /var/cache/apk/*
CMD ["/bin/sh"]