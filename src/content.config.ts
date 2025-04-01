// 1. Import utilities from `astro:content`
import { defineCollection, reference, z } from "astro:content";

// 2. Import loader(s)
import { glob } from "astro/loaders";

// 3. Define your collection(s)
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    publishDate: z.date(),
    relatedPosts: z.array(reference("blog")).optional(),
  }),
});

const PageSchema = z.object({
  type: z.literal("page"),
  title: z.string(),
  size: z.string(),
  description: z.string(),
});

const FolderSchema = z.object({
  type: z.literal("folder"),
  title: z.string(),
});

const pages = defineCollection({
  loader: glob({
    pattern: ["**/*.md"],
    base: "./src/data/main",
  }),
  schema: z.union([PageSchema, FolderSchema]),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog, pages };
