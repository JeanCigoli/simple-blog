FROM node:lts-slim as builder

WORKDIR /home/node/app

COPY package.json .
RUN npx handpick --target=buildDependencies --manager=yarn

COPY --chown=node:node . .
RUN yarn build

# RUN STAGE
FROM node:lts-slim
LABEL maintainer="Jean <jeancigoli30@gmail.com>"

ENV TZ=America/Sao_Paulo
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

WORKDIR /home/node/app
RUN chown node:node /home/node/app

COPY package.json .
RUN yarn install --production=true

USER node

COPY --from=builder /home/node/app/dist ./dist

RUN mkdir -p ./log/error

EXPOSE ${PORT}

CMD [ "yarn", "server:start"]