// Cheatsheet: https://github.com/colinhacks/zod

import { z } from "astro:content";

export const environmentsSchema: any = z.object({
  name: z.string(),
  /*desc: z.string().optional(),
  draft: z.boolean(),
  keyvisual: z
    .object({
      src: z.string(),
      alt: z.string(),
    })
    .optional(),*/
});
