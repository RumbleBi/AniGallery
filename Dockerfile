FROM node:16

WORKDIR /freeboard_frontend/
COPY . /freeboard_frontend/

RUN yarn install
RUN yarn build:ssr

CMD yarn start