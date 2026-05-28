# Stage 1: Build
FROM node:20-alpine AS build

ARG HOST_API=http://localhost:3001

ENV HOST_API=${HOST_API}

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build && npm run generate

# Stage 2: Production
FROM node:20-alpine

RUN npm install -g serve

ENV NODE_ENV=production

WORKDIR /app

COPY --from=build /app/dist ./dist

USER node

EXPOSE 3000

CMD ["serve", "dist", "-l", "3000"]
