FROM node:slim

WORKDIR /app

RUN npm install -g pnpm@latest-10

COPY ./frontend/package.json ./frontend/pnpm-lock.yaml ./

RUN pnpm install

COPY ./frontend .

EXPOSE 8080

CMD ["pnpm", "run", "serve"]
