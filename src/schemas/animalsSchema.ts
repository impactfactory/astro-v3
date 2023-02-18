// Cheatsheet: https://github.com/colinhacks/zod

import { z } from "astro:content";

export const animalsSchema: any = z.object({
  name: z.string(),
  draft: z.boolean(),
  icon: z
    .object({
      name: z.string().default(""),
      cc: z.string().default(""),
    })
    .default({}),
  prey: z.array(z.string()).default([]),
  vegis: z.array(z.string()).default([]),
  /*desc: z.string().optional(),
  //,
  keyvisual: z
    .object({
      src: z.string(),
      alt: z.string(),
    })
    .optional(),
    */
});
