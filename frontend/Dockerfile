FROM node:20-alpine AS builder

LABEL author="Soft Uzbek Slogan"

WORKDIR /app

COPY package.*json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

WORKDIR /app

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]