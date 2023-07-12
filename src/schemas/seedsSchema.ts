// Cheatsheet: https://github.com/colinhacks/zod

import { z } from "astro:content";

export const seedsSchema: any = z.object({
  name: z.string(),
  animals: z.array(z.string()).default([]),
  authors: z.array(z.string()).default([]),
  costs: z.number().optional(),
  desc_long: z.string().optional(),
  desc_short: z.string().optional(),
  draft: z.boolean(),
  environments: z.array(z.string()).default([]),
  gallery: z.array(z.object({ file: z.string(), alt: z.string() })).default([]),
  inspirational: z.string().optional(),
  keyvisual: z
    .object({
      author: z.string().optional(),
      author_url: z.string().nullable(),
      hint: z.string().nullable(),
      lic: z.string().nullable(),
      lic_url: z.string().nullable(),
    })
    .optional(),
  links: z
    .array(
      z.object({
        url: z.string(),
        label: z.string(),
      })
    )
    .default([]),
  materials: z.array(z.string()).default([]),
  plants: z.array(z.string()).default([]),
  preview: z.boolean().default(false),
  principles: z.array(z.string()).default([]),
  sortOrder: z.number().optional(),
  steps: z
    .array(
      z.object({
        title: z.string(),
        desc: z.string().optional(),
        img: z.string(),
        substeps: z.array(z.string()).default([]),
      })
    )
    .default([]),
  synonyms: z.array(z.string()).default([]),
  time: z.number().optional(),
  tools: z.array(z.string()).default([]),
  type: z.string().optional(),
  videos: z.array(z.string()).default([]),
});
