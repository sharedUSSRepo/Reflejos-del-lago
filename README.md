<div align=center>
  <img src="frontend/src/assets/images/logo.png" alt="Logo of Reflejos del lago" width="400">
</div>

<div align=center>
    <img src="https://github.com/sharedUSSRepo/Reflejos-del-lago/actions/workflows/dockerhub.yml/badge.svg" alt="Badge of dockerhub">
</div>

**Reflejos del lago** is a Geoguessr game of the province of Llanquihue. Developed in college.

## Install
### Docker
build
```bash
docker build -t reflejos-del-lago .
```

run
```bash
docker run --rm -p 8080:8080 reflejos-del-lago
```