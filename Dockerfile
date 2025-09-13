FROM node:22-alpine as front

WORKDIR /app
COPY ./ /app/

RUN npm install
RUN npm run build

FROM nginx:1.28.0-alpine
RUN rm -rf /usr/share/nginx/html
COPY --from=front /app/public/ /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf