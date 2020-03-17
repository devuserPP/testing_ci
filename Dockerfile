FROM node:10
MAINTAINER devuser DevOps


ARG BUILD_DATE
ARG VCS_REF

LABEL org.label-schema.build-date=$BUILD_DATE \
      org.label-schema.vcs-url="https://github.com/devuserPP/testing_ci.git" \
      org.label-schema.vcs-ref=$VCS_REF \
      org.label-schema.schema-version="1.0.0-rc1"

RUN apt-get update -qq -y \
&&  apt-get install -qq -y apt-transport-https unzip \
&&  curl -sSL https://dl.google.com/linux/linux_signing_key.pub | apt-key add - \
&&  echo "deb [arch=amd64] https://dl.google.com/linux/chrome/deb/ stable main #Google-Chrome" > /etc/apt/sources.list.d/google-chrome.list \
&&  apt-get update -qq -y \
&&  apt-get install -qq -y --no-install-recommends google-chrome-stable \
&&  curl -s https://chromedriver.storage.googleapis.com/"$(curl -s https://chromedriver.storage.googleapis.com/LATEST_RELEASE)"/chromedriver_linux64.zip -o /tmp/chromedriver_linux64.zip \
&&  unzip -d /usr/bin /tmp/chromedriver_linux64.zip \
&&  npm install npm@latest -g \
&&  npm install selenium-standalone@latest -g \
&&  apt install openjdk-8-jre -y \
&&  selenium-standalone install \
&&  apt-get clean \
&&  rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
WORKDIR /home/node
