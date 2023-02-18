import { defineCollection } from "astro:content";

import { animalsSchema } from "../schemas/animalsSchema";
import { articlesSchema } from "../schemas/articlesSchema";
import { authorsSchema } from "../schemas/authorsSchema";
import { environmentsSchema } from "../schemas/environmentsSchema";
import { plantsSchema } from "../schemas/plantsSchema";
import { principlesSchema } from "../schemas/principlesSchema";
import { seedsSchema } from "../schemas/seedsSchema";

const animalsCollection = defineCollection({ schema: animalsSchema });
const articlesCollection = defineCollection({ schema: articlesSchema });
const authorsCollection = defineCollection({ schema: authorsSchema });
const environmentsCollection = defineCollection({ schema: environmentsSchema });
const plantsCollection = defineCollection({ schema: plantsSchema });
const principlesCollection = defineCollection({ schema: principlesSchema });
const seedsCollection = defineCollection({ schema: seedsSchema });

export const collections = {
  animals: animalsCollection,
  articles: articlesCollection,
  authors: authorsCollection,
  environments: environmentsCollection,
  plants: plantsCollection,
  principles: principlesCollection,
  seeds: seedsCollection,
};
