FROM node:8.9.3

WORKDIR /user/src/app
ADD . /user/src/app
RUN npm i
EXPOSE 9000
CMD ["npm", "run", "prod"]