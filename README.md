[![Registry](https://img.shields.io/badge/registry-docker.io-blue.svg)](https://hub.docker.com/r/devuserpp/selenium-chromless/)
[![](https://images.microbadger.com/badges/version/devuserpp/selenium-chromless.svg)](https://microbadger.com/images/devuserpp/selenium-chromless)
[![CircleCI](https://circleci.com/gh/devuserPP/testing_ci.svg?style=svg)](https://circleci.com/gh/devuserPP/testing_ci)
# testing_ci

```
docker run -it --name docker-selenium devuserpp/selenium-chromless bash
```
or if container already running
```
docker exec -it docker-selenium  bash
```
clone this repo

```
git clone https://github.com/devuserPP/testing_ci.git
```
update dependecies
```
cd testing_ci/tests/nightwatch
npm install mkdirp@latest --save-dev
npm install nightwatch@latest --save-dev
npm install nightwatch-api@latest --save-dev
```

