FROM node:4.6.0
MAINTAINER Brian Bartholomew <me@bcbrian.com>

RUN mkdir -p /usr/api
COPY . /usr/api
WORKDIR /usr/api/programs/server
RUN npm install
WORKDIR /usr/api
RUN ls -la

ENV PORT 3000
EXPOSE  $PORT

CMD ["node", "main.js"]
