FROM node:14.18

EXPOSE 3000
#ENV NODE_ENV=production
WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app

# Production use node instead of root
# USER node

RUN yarn install

COPY . /usr/src/app

RUN yarn generate

CMD [ "yarn", "start" ]
