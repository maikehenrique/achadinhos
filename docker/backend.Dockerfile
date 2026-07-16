# Stage 1: Build
FROM node:20-bookworm-slim AS build

RUN apt-get update && apt-get install -y \
    build-essential \
    libvips-dev \
    python3 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /opt/app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Production
FROM node:20-bookworm-slim

RUN apt-get update && apt-get install -y \
    libvips \
    && rm -rf /var/lib/apt/lists/*

ENV NODE_ENV=production

WORKDIR /opt/app

COPY --from=build /opt/app/package.json /opt/app/package-lock.json ./
RUN npm ci --omit=dev

COPY --from=build /opt/app/build ./build
COPY --from=build /opt/app/config ./config
COPY --from=build /opt/app/database ./database
COPY --from=build /opt/app/public ./public
COPY --from=build /opt/app/src ./src
COPY --from=build /opt/app/favicon.png ./favicon.png

RUN chown -R node:node /opt/app
USER node

EXPOSE 1337

CMD ["npm", "run", "start"]
