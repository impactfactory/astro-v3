import { defineCollection } from "astro:content";

import { animalsSchema } from "../schemas/animalsSchema";
import { authorsSchema } from "../schemas/authorsSchema";
import { environmentsSchema } from "../schemas/environmentsSchema";
import { plantsSchema } from "../schemas/plantsSchema";
import { principlesSchema } from "../schemas/principlesSchema";
import { seedsSchema } from "../schemas/seedsSchema";
/*
import { articlesSchema } from "../schemas/articlesSchema";
*/

const animalsCollection = defineCollection({ schema: animalsSchema });
const authorsCollection = defineCollection({ schema: authorsSchema });
const environmentsCollection = defineCollection({ schema: environmentsSchema });
const plantsCollection = defineCollection({ schema: plantsSchema });
const principlesCollection = defineCollection({ schema: principlesSchema });
const seedsCollection = defineCollection({ schema: seedsSchema });
/*
const articlesCollection = defineCollection({ schema: articlesSchema });
*/

export const collections = {
  animals: animalsCollection,
  authors: authorsCollection,

  environments: environmentsCollection,
  plants: plantsCollection,
  principles: principlesCollection,
  seeds: seedsCollection,
};

/*articles: articlesCollection,
 */
