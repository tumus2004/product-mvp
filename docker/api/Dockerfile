#==
# Base
FROM node:14-alpine as base

WORKDIR /app

COPY package.json package.json
COPY yarn.lock yarn.lock

COPY redwood.toml redwood.toml
COPY graphql.config.js graphql.config.js
COPY babel.config.js babel.config.js

COPY api/package.json api/package.json
COPY web/package.json web/package.json

RUN yarn install --frozen-lockfile

#==
# Build
FROM base as api_build

COPY api api

RUN yarn workspace api build

#==
# Serve
FROM node:14-alpine

WORKDIR /app
RUN chown -R node /app

COPY api/package.json .

RUN yarn install && \
    yarn global add @redwoodjs/api-server @redwoodjs/internal

COPY graphql.config.js .
COPY redwood.toml .
COPY api api

COPY --from=api_build /app/api/dist /app/api/dist
COPY --from=api_build /app/node_modules/.prisma /app/node_modules/.prisma

EXPOSE 8911

USER node

ENTRYPOINT [ "rw-api-server" ]
CMD []

### Connect image to repository
LABEL org.opencontainers.image.source=https://github.com/buildcities/product-mvp
