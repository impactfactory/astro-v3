declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"animals": {
"de/animals/beaver.mdx": {
  id: "de/animals/beaver.mdx",
  slug: "de/animals/beaver",
  body: string,
  collection: "animals",
  data: InferEntrySchema<"animals">
},
"de/animals/dragonfly.mdx": {
  id: "de/animals/dragonfly.mdx",
  slug: "de/animals/dragonfly",
  body: string,
  collection: "animals",
  data: InferEntrySchema<"animals">
},
"de/animals/frog.mdx": {
  id: "de/animals/frog.mdx",
  slug: "de/animals/frog",
  body: string,
  collection: "animals",
  data: InferEntrySchema<"animals">
},
"de/animals/marten.mdx": {
  id: "de/animals/marten.mdx",
  slug: "de/animals/marten",
  body: string,
  collection: "animals",
  data: InferEntrySchema<"animals">
},
"de/animals/mosquito.mdx": {
  id: "de/animals/mosquito.mdx",
  slug: "de/animals/mosquito",
  body: string,
  collection: "animals",
  data: InferEntrySchema<"animals">
},
"de/animals/template.mdx": {
  id: "de/animals/template.mdx",
  slug: "de/animals/template",
  body: string,
  collection: "animals",
  data: InferEntrySchema<"animals">
},
"de/animals/wildboar.mdx": {
  id: "de/animals/wildboar.mdx",
  slug: "de/animals/wildboar",
  body: string,
  collection: "animals",
  data: InferEntrySchema<"animals">
},
"en/animals/dragonfly.mdx": {
  id: "en/animals/dragonfly.mdx",
  slug: "en/animals/dragonfly",
  body: string,
  collection: "animals",
  data: InferEntrySchema<"animals">
},
"en/animals/frog.mdx": {
  id: "en/animals/frog.mdx",
  slug: "en/animals/frog",
  body: string,
  collection: "animals",
  data: InferEntrySchema<"animals">
},
},
"articles": {
"de/articles/01022023.mdx": {
  id: "de/articles/01022023.mdx",
  slug: "de/articles/01022023",
  body: string,
  collection: "articles",
  data: InferEntrySchema<"articles">
},
"de/articles/02022023.mdx": {
  id: "de/articles/02022023.mdx",
  slug: "de/articles/02022023",
  body: string,
  collection: "articles",
  data: InferEntrySchema<"articles">
},
"de/articles/08072023.mdx": {
  id: "de/articles/08072023.mdx",
  slug: "de/articles/08072023",
  body: string,
  collection: "articles",
  data: InferEntrySchema<"articles">
},
"en/articles/01022023.mdx": {
  id: "en/articles/01022023.mdx",
  slug: "en/articles/01022023",
  body: string,
  collection: "articles",
  data: InferEntrySchema<"articles">
},
"en/articles/02022023.mdx": {
  id: "en/articles/02022023.mdx",
  slug: "en/articles/02022023",
  body: string,
  collection: "articles",
  data: InferEntrySchema<"articles">
},
"en/articles/08072023.mdx": {
  id: "en/articles/08072023.mdx",
  slug: "en/articles/08072023",
  body: string,
  collection: "articles",
  data: InferEntrySchema<"articles">
},
},
"authors": {
"de/authors/kai-pulfer.md": {
  id: "de/authors/kai-pulfer.md",
  slug: "de/authors/kai-pulfer",
  body: string,
  collection: "authors",
  data: InferEntrySchema<"authors">
},
"de/authors/kermit-frog.md": {
  id: "de/authors/kermit-frog.md",
  slug: "de/authors/kermit-frog",
  body: string,
  collection: "authors",
  data: InferEntrySchema<"authors">
},
"en/authors/kai-pulfer.md": {
  id: "en/authors/kai-pulfer.md",
  slug: "en/authors/kai-pulfer",
  body: string,
  collection: "authors",
  data: InferEntrySchema<"authors">
},
"en/authors/kermit-frog.md": {
  id: "en/authors/kermit-frog.md",
  slug: "en/authors/kermit-frog",
  body: string,
  collection: "authors",
  data: InferEntrySchema<"authors">
},
},
"environments": {
"de/environments/balcony.mdx": {
  id: "de/environments/balcony.mdx",
  slug: "de/environments/balcony",
  body: string,
  collection: "environments",
  data: InferEntrySchema<"environments">
},
"de/environments/city.mdx": {
  id: "de/environments/city.mdx",
  slug: "de/environments/city",
  body: string,
  collection: "environments",
  data: InferEntrySchema<"environments">
},
"de/environments/farm.mdx": {
  id: "de/environments/farm.mdx",
  slug: "de/environments/farm",
  body: string,
  collection: "environments",
  data: InferEntrySchema<"environments">
},
"de/environments/garden.mdx": {
  id: "de/environments/garden.mdx",
  slug: "de/environments/garden",
  body: string,
  collection: "environments",
  data: InferEntrySchema<"environments">
},
"de/environments/ocean.mdx": {
  id: "de/environments/ocean.mdx",
  slug: "de/environments/ocean",
  body: string,
  collection: "environments",
  data: InferEntrySchema<"environments">
},
"de/environments/wilderness.mdx": {
  id: "de/environments/wilderness.mdx",
  slug: "de/environments/wilderness",
  body: string,
  collection: "environments",
  data: InferEntrySchema<"environments">
},
"en/environments/balcony.mdx": {
  id: "en/environments/balcony.mdx",
  slug: "en/environments/balcony",
  body: string,
  collection: "environments",
  data: InferEntrySchema<"environments">
},
"en/environments/city.mdx": {
  id: "en/environments/city.mdx",
  slug: "en/environments/city",
  body: string,
  collection: "environments",
  data: InferEntrySchema<"environments">
},
"en/environments/farm.mdx": {
  id: "en/environments/farm.mdx",
  slug: "en/environments/farm",
  body: string,
  collection: "environments",
  data: InferEntrySchema<"environments">
},
"en/environments/garden.mdx": {
  id: "en/environments/garden.mdx",
  slug: "en/environments/garden",
  body: string,
  collection: "environments",
  data: InferEntrySchema<"environments">
},
"en/environments/ocean.mdx": {
  id: "en/environments/ocean.mdx",
  slug: "en/environments/ocean",
  body: string,
  collection: "environments",
  data: InferEntrySchema<"environments">
},
"en/environments/wilderness.mdx": {
  id: "en/environments/wilderness.mdx",
  slug: "en/environments/wilderness",
  body: string,
  collection: "environments",
  data: InferEntrySchema<"environments">
},
},
"plants": {
"de/plants/lotus.mdx": {
  id: "de/plants/lotus.mdx",
  slug: "de/plants/lotus",
  body: string,
  collection: "plants",
  data: InferEntrySchema<"plants">
},
"de/plants/watercress.mdx": {
  id: "de/plants/watercress.mdx",
  slug: "de/plants/watercress",
  body: string,
  collection: "plants",
  data: InferEntrySchema<"plants">
},
"de/plants/waterlily.mdx": {
  id: "de/plants/waterlily.mdx",
  slug: "de/plants/waterlily",
  body: string,
  collection: "plants",
  data: InferEntrySchema<"plants">
},
"en/plants/lotus.mdx": {
  id: "en/plants/lotus.mdx",
  slug: "en/plants/lotus",
  body: string,
  collection: "plants",
  data: InferEntrySchema<"plants">
},
"en/plants/watercress.mdx": {
  id: "en/plants/watercress.mdx",
  slug: "en/plants/watercress",
  body: string,
  collection: "plants",
  data: InferEntrySchema<"plants">
},
"en/plants/waterlily.mdx": {
  id: "en/plants/waterlily.mdx",
  slug: "en/plants/waterlily",
  body: string,
  collection: "plants",
  data: InferEntrySchema<"plants">
},
},
"principles": {
"de/principles/borders.mdx": {
  id: "de/principles/borders.mdx",
  slug: "de/principles/borders",
  body: string,
  collection: "principles",
  data: InferEntrySchema<"principles">
},
"de/principles/diversity.mdx": {
  id: "de/principles/diversity.mdx",
  slug: "de/principles/diversity",
  body: string,
  collection: "principles",
  data: InferEntrySchema<"principles">
},
"de/principles/positioning.mdx": {
  id: "de/principles/positioning.mdx",
  slug: "de/principles/positioning",
  body: string,
  collection: "principles",
  data: InferEntrySchema<"principles">
},
"de/principles/waterretention.mdx": {
  id: "de/principles/waterretention.mdx",
  slug: "de/principles/waterretention",
  body: string,
  collection: "principles",
  data: InferEntrySchema<"principles">
},
"en/principles/borders.mdx": {
  id: "en/principles/borders.mdx",
  slug: "en/principles/borders",
  body: string,
  collection: "principles",
  data: InferEntrySchema<"principles">
},
"en/principles/diversity.mdx": {
  id: "en/principles/diversity.mdx",
  slug: "en/principles/diversity",
  body: string,
  collection: "principles",
  data: InferEntrySchema<"principles">
},
"en/principles/positioning.mdx": {
  id: "en/principles/positioning.mdx",
  slug: "en/principles/positioning",
  body: string,
  collection: "principles",
  data: InferEntrySchema<"principles">
},
"en/principles/waterretention.mdx": {
  id: "en/principles/waterretention.mdx",
  slug: "en/principles/waterretention",
  body: string,
  collection: "principles",
  data: InferEntrySchema<"principles">
},
},
"seeds": {
"de/seeds/antsstone.mdx": {
  id: "de/seeds/antsstone.mdx",
  slug: "de/seeds/antsstone",
  body: string,
  collection: "seeds",
  data: InferEntrySchema<"seeds">
},
"de/seeds/asphaltcracking.mdx": {
  id: "de/seeds/asphaltcracking.mdx",
  slug: "de/seeds/asphaltcracking",
  body: string,
  collection: "seeds",
  data: InferEntrySchema<"seeds">
},
"de/seeds/bathtubpond.mdx": {
  id: "de/seeds/bathtubpond.mdx",
  slug: "de/seeds/bathtubpond",
  body: string,
  collection: "seeds",
  data: InferEntrySchema<"seeds">
},
"de/seeds/beaverbombing.mdx": {
  id: "de/seeds/beaverbombing.mdx",
  slug: "de/seeds/beaverbombing",
  body: string,
  collection: "seeds",
  data: InferEntrySchema<"seeds">
},
"de/seeds/benjeshedge.mdx": {
  id: "de/seeds/benjeshedge.mdx",
  slug: "de/seeds/benjeshedge",
  body: string,
  collection: "seeds",
  data: InferEntrySchema<"seeds">
},
"de/seeds/birdbath.mdx": {
  id: "de/seeds/birdbath.mdx",
  slug: "de/seeds/birdbath",
  body: string,
  collection: "seeds",
  data: InferEntrySchema<"seeds">
},
"de/seeds/boomforest.mdx": {
  id: "de/seeds/boomforest.mdx",
  slug: "de/seeds/boomforest",
  body: string,
  collection: "seeds",
  data: InferEntrySchema<"seeds">
},
"de/seeds/coralsplanting.mdx": {
  id: "de/seeds/coralsplanting.mdx",
  slug: "de/seeds/coralsplanting",
  body: string,
  collection: "seeds",
  data: InferEntrySchema<"seeds">
},
"de/seeds/flowermeadow.mdx": {
  id: "de/seeds/flowermeadow.mdx",
  slug: "de/seeds/flowermeadow",
  body: string,
  collection: "seeds",
  data: InferEntrySchema<"seeds">
},
"de/seeds/habitariuminsektorum.mdx": {
  id: "de/seeds/habitariuminsektorum.mdx",
  slug: "de/seeds/habitariuminsektorum",
  body: string,
  collection: "seeds",
  data: InferEntrySchema<"seeds">
},
"de/seeds/hedgehoghouse.mdx": {
  id: "de/seeds/hedgehoghouse.mdx",
  slug: "de/seeds/hedgehoghouse",
  body: string,
  collection: "seeds",
  data: InferEntrySchema<"seeds">
},
"de/seeds/insectwaterthrough.mdx": {
  id: "de/seeds/insectwaterthrough.mdx",
  slug: "de/seeds/insectwaterthrough",
  body: string,
  collection: "seeds",
  data: InferEntrySchema<"seeds">
},
"de/seeds/sandlens.mdx": {
  id: "de/seeds/sandlens.mdx",
  slug: "de/seeds/sandlens",
  body: string,
  collection: "seeds",
  data: InferEntrySchema<"seeds">
},
"de/seeds/seedbomb.mdx": {
  id: "de/seeds/seedbomb.mdx",
  slug: "de/seeds/seedbomb",
  body: string,
  collection: "seeds",
  data: InferEntrySchema<"seeds">
},
"de/seeds/template.mdx": {
  id: "de/seeds/template.mdx",
  slug: "de/seeds/template",
  body: string,
  collection: "seeds",
  data: InferEntrySchema<"seeds">
},
"de/seeds/wildbeerocket.mdx": {
  id: "de/seeds/wildbeerocket.mdx",
  slug: "de/seeds/wildbeerocket",
  body: string,
  collection: "seeds",
  data: InferEntrySchema<"seeds">
},
"en/seeds/antsstone.mdx": {
  id: "en/seeds/antsstone.mdx",
  slug: "en/seeds/antsstone",
  body: string,
  collection: "seeds",
  data: InferEntrySchema<"seeds">
},
"en/seeds/bathtubpond.mdx": {
  id: "en/seeds/bathtubpond.mdx",
  slug: "en/seeds/bathtubpond",
  body: string,
  collection: "seeds",
  data: InferEntrySchema<"seeds">
},
"en/seeds/beaverbombing.mdx": {
  id: "en/seeds/beaverbombing.mdx",
  slug: "en/seeds/beaverbombing",
  body: string,
  collection: "seeds",
  data: InferEntrySchema<"seeds">
},
"en/seeds/boomforest.mdx": {
  id: "en/seeds/boomforest.mdx",
  slug: "en/seeds/boomforest",
  body: string,
  collection: "seeds",
  data: InferEntrySchema<"seeds">
},
"en/seeds/coralsplanting.mdx": {
  id: "en/seeds/coralsplanting.mdx",
  slug: "en/seeds/coralsplanting",
  body: string,
  collection: "seeds",
  data: InferEntrySchema<"seeds">
},
"en/seeds/habitariuminsektorum.mdx": {
  id: "en/seeds/habitariuminsektorum.mdx",
  slug: "en/seeds/habitariuminsektorum",
  body: string,
  collection: "seeds",
  data: InferEntrySchema<"seeds">
},
"en/seeds/hedgehoghouse.mdx": {
  id: "en/seeds/hedgehoghouse.mdx",
  slug: "en/seeds/hedgehoghouse",
  body: string,
  collection: "seeds",
  data: InferEntrySchema<"seeds">
},
"en/seeds/seedbomb.mdx": {
  id: "en/seeds/seedbomb.mdx",
  slug: "en/seeds/seedbomb",
  body: string,
  collection: "seeds",
  data: InferEntrySchema<"seeds">
},
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
