FROM node:18

RUN mkdir -p /usr/src/

WORKDIR /usr/src/

COPY ./package.json package.json
COPY ./package-lock.json package-lock.json

COPY . .

RUN npm install

EXPOSE 3005

CMD ["npm", "start"]