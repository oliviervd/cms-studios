FROM node:18.8-alpine as base

FROM base as builder

WORKDIR /home/node/app
COPY package*.json ./

COPY . .
RUN npm install
RUN npm run build
RUN apt-get update && apt-get install -y python3 python3-pip

FROM base as runtime

ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js

WORKDIR /home/node/app
COPY package*.json  ./

RUN npm install --production
COPY --from=builder /home/node/app/dist ./dist
COPY --from=builder /home/node/app/build ./build

EXPOSE 3000

CMD ["node", "dist/server.js"]
