import { env } from './common/libs/env';
import { app } from './server';

app.listen(env.PORT);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
