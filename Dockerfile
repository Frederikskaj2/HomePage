FROM node:18.16.0 as front

WORKDIR /app
COPY ./ /app/

RUN npm install
RUN npm run build

FROM nginx:1.23.4-alpine
RUN rm -rf /usr/share/nginx/html
COPY --from=front /app/public/ /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf