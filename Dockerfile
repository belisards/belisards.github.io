FROM node:22-alpine AS build
WORKDIR /app/astro-site

COPY astro-site/package.json ./
RUN npm install

COPY astro-site/ ./
COPY code/ /app/code/
RUN npm run build

FROM nginx:1.29-alpine
COPY --from=build /app/docs/ /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
