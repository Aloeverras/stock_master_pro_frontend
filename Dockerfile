FROM alpine:3.23.3

ENV WORKSPACENAME=/workspace

ENV LANG=C.UTF-8
ENV LC_ALL=C.UTF-8

ENV TZ=UTC
ENV TIMEZONE=UTC

ENV USERNAME=aloesDev
ENV USERID=1000
ENV GROUPNAME=staff
ENV GROUPID=1000

ARG PACKAGES


RUN /bin/sh -c set -eux && \
    mkdir -p ${WORKSPACENAME} && \
    apk update && \
    apk add ${PACKAGES} && \
    # conditionner sir l'arg est avec un string
    if [ -n "${PACKAGES}" ]; then \
        # lancer la boucle si les packages sont plussierurs 
        for pkg in ${PACKAGES}; do \
            apk add $pkg ; \
        done \
    else \
        echo "No packages specified. Skipping package installation."; \    
    fi && \
    apk upgrade && \
    # création de l'user et de son groupe
    addgroup -g ${GROUPID} ${GROUPNAME} && \
    adduser -D -u ${USERID} -G ${GROUPNAME} ${USERNAME} && \
    rm -rf /var/cache/apk/*

WORKDIR ${WORKSPACENAME} 

COPY . .

USER ${USERID}:${GROUPID}

ARG PORT=3000

EXPOSE ${PORT}

CMD ["/bin/sh"]