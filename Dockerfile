FROM node:12.16.1 AS app
WORKDIR app
COPY . .
RUN npm i 
RUN npm run build

FROM nginx
COPY nginx.config /etc/nginx/conf.d/default.conf
COPY --from=app app/dist /usr/share/nginx/html
