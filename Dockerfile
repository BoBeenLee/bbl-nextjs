FROM node:8.9.3

WORKDIR /user/src/app
ADD . /user/src/app
RUN npm install --global gatsby-cli
RUN npm i
EXPOSE 80
CMD ["npm", "run", "prod"]