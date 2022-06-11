# Stage 1
FROM node:14 as build-stage

WORKDIR /bezkoder-ui
COPY package.json .
RUN npm install
COPY . .

ARG ANGULAR_APP_API_BASE_URL
ENV ANGULAR_APP_API_BASE_URL=$ANGULAR_APP_API_BASE_URL

RUN npm run build

# Stage 2
FROM nginx:1.17.0-alpine

COPY --from=build-stage /bezkoder-ui/build /usr/share/nginx/html
EXPOSE $ANGULAR_DOCKER_PORT

CMD nginx -g 'daemon off;'
