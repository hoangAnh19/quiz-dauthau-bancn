import { z } from 'zod';

const environmentSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  API_PORT: z.coerce.number().int().min(1).max(65535).default(3001),
  DATABASE_URL: z.string().min(1),
  CORS_ORIGINS: z.string().min(1).default('http://localhost:3000'),
});

export type Environment = z.infer<typeof environmentSchema>;

export function validateEnvironment(input: Record<string, unknown>): Environment {
  return environmentSchema.parse(input);
}
