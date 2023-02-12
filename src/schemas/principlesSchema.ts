// Cheatsheet: https://github.com/colinhacks/zod

import { z } from "astro:content";

export const principlesSchema: any = z.object({
  name: z.string(),
  draft: z.boolean(),
  /*desc: z.string().optional(),
  keyvisual: z.object({
    src: z.string(),
    alt: z.string(),
  }),*/
});
