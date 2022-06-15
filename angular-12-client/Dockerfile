# Stage 1
FROM node:14 as build-stage

WORKDIR /usr/src/app
COPY package.json .
RUN npm install
RUN npm i --save-dev @types/node
COPY . .


ARG ANGULAR_APP_API_BASE_URL
ENV ANGULAR_APP_API_BASE_URL=$ANGULAR_APP_API_BASE_URL
RUN npm run build --configuration=production

FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /usr/src/app/static /usr/share/nginx/html

EXPOSE $ANGULAR_DOCKER_PORT

CMD nginx -g 'daemon off;'
