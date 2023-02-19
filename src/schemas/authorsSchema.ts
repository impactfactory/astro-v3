// Cheatsheet: https://github.com/colinhacks/zod

import { z } from "astro:content";

export const authorsSchema: any = z.object({
  draft: z.boolean(),
  firstname: z.string(),
  lastname: z.string(),
  /*
  email: z.string().email().optional(),*/
  website: z.string().url().optional(),
});
