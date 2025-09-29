FROM oven/bun AS build

WORKDIR /app

# Cache packages installation
COPY package.json package.json
COPY bun.lock bun.lock

RUN bun install

# Copy TypeScript config for path mapping
COPY tsconfig.json tsconfig.json

COPY ./src ./src

ENV NODE_ENV=production

RUN bun build \
	--compile \
	--minify-whitespace \
	--minify-syntax \
	--outfile server \
	src/index.ts

FROM gcr.io/distroless/base

WORKDIR /app

COPY --from=build /app/server server
COPY --from=build /app/src/common/database/migrations ./src/common/database/migrations

ENV NODE_ENV=production

CMD ["./server"]

EXPOSE 3333
