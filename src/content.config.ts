// Import the glob loader
import { glob } from "astro/loaders";

// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// Define a `loader` and `schema` for each collection
const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/pages/blog" }),
    schema: z.object({
      layout: z.string(),
      authorName: z.string(),
      postTitle: z.string(),
      postExcerpt: z.string(),
      postURL: z.string(),
      tags: z.array(z.string()),
      imageURL: z.string(),
      imageAlt: z.string(),
      postDate: z.string(),
      categoryName: z.string(),
      shadowColor: z.string()
    })
});

// Export a single `collections` object to register your collection(s)
export const collections = { blog };