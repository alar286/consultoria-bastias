import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    category: z.enum(['Comunicación', 'Liderazgo', 'Procesos']).optional(),
  }),
});

export const collections = { blog };
