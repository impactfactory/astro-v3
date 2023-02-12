// Cheatsheet: https://github.com/colinhacks/zod

import { z } from "astro:content";

export const authorsSchema: any = z.object({
  desc: z.string().optional(),
  draft: z.boolean(),
  firstname: z.string(),
  lastname: z.string(),
  /*portrait: z.object({
    src: z.string(),
    alt: z.string(),
  }),
  email: z.string().email().optional(),*/
  website: z.string().url().optional(),
});
