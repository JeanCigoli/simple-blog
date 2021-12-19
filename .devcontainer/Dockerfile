
ARG VARIANT="14.18.1-buster"
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}

# ATUALIZANDO O TIMEZONE
ENV TZ=America/Sao_Paulo
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone


# ATUALIZANDO OS PACOTES
RUN apt-get update && apt-get upgrade -yq


COPY --chown=node:node ./assets /home/node

RUN chmod +x /home/node/entrypoint.sh

RUN /home/node/entrypoint.sh
