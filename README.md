<div align=center>
  <img src="frontend/src/assets/images/logo.png" alt="Logo of Reflejos del lago" width="400">
</div>

<div align=center>
    <img src="https://img.shields.io/github/actions/workflow/status/sharedUSSRepo/Reflejos-del-lago/dockerhub.yml?logo=docker&label=Dockerhub" alt="Badge of dockerhub">
    <img src="https://img.shields.io/github/actions/workflow/status/sharedUSSRepo/Reflejos-del-lago/linter.yml?logo=eslint&label=Linter" alt="Badge of linter">
    <img src="https://img.shields.io/github/actions/workflow/status/sharedUSSRepo/Reflejos-del-lago/tests.yml?logo=jest&label=Tests" alt="Badge of tests">
    <img src="https://img.shields.io/github/actions/workflow/status/sharedUSSRepo/Reflejos-del-lago/deploy.yml?logo=iCloud&label=Deploy" alt="Badge of deploy">
</div>

**Reflejos del lago** is a Geoguessr game of the province of Llanquihue. Try to guess where you are looking just to a photo. Is it on Puerto Varas?, Puerto Montt? or maybe Llanquihue? Try your best to make the best score you can!

Play the game: https://sharedussrepo.github.io/Reflejos-del-lago/#/

## Install

### Locally
First, clone the repository
```bash
https://github.com/sharedUSSRepo/Reflejos-del-lago.git
```

then go to `frontend` and install the dependencies. Make sure you have `pnpm` installed. And do
```bash
pnpm install
```

then, to run the app, do:
```bash
pnpm run serve
```
### Docker
To install this project using docker, first, clone the repo and build the docker:
```bash
docker build -t reflejos-del-lago .
```

Then, run the docker.
```bash
docker run --rm -p 8080:8080 reflejos-del-lago
```

If you want to download the from Dockerhub, you can click [here](https://hub.docker.com/repository/docker/teg57/reflejos-del-lago/)

## Authors
- @[AlanSilvaaa](https://github.com/AlanSilvaaa)
- @[Vinbu](https://github.com/Vinbu)
