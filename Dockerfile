# Build step
FROM node:20-alpine as build
WORKDIR /Chen_Yaohuang_ui_garden
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Run step (serve static build on 8083)
FROM node:20-alpine
WORKDIR /Chen_Yaohuang_ui_garden
RUN npm install -g serve
COPY --from=build /Chen_Yaohuang_ui_garden/build ./build
EXPOSE 8018
CMD ["serve","-s","build","-l","8018"]