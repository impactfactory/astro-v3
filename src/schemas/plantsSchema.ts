// Cheatsheet: https://github.com/colinhacks/zod

import { z } from "astro:content";

export const plantsSchema: any = z.object({
  name: z.string(),
  draft: z.boolean(),
});
