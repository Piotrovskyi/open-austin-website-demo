import fs from "fs";
import path from "path";
import matter from "gray-matter";
import yaml from "js-yaml";

let Cache: { [key: string]: unknown[] } = {};

export function fetchContent<T>(collection: string): T[] {
  if (Cache[collection]) {
    return Cache[collection] as T[];
  }
  const Directory = path.join(process.cwd(), `content/${collection}`);
  // Get file names under /
  const fileNames = fs.readdirSync(Directory);
  const allData = fileNames.map((fileName) => {
    // Read markdown file as string
    const fullPath = path.join(Directory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the  metadata section
    const matterResult = matter(fileContents, {
      engines: {
        yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
      },
    });
    const matterData = matterResult.data;
    matterData.slug = fileName.replace(/\.mdx?$/, "");

    return matterData;
  });

  // Sort  by date
  Cache[collection] = allData
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    })
    .filter((el) => el.published || !el.archived) as T[];

  return Cache[collection] as T[];
}

export function count(collections: string): number {
  return fetchContent(collections).length;
}

export function listContent<T>(
  collection: string,
  page: number,
  limit: number
): T[] {
  return fetchContent<T>(collection).slice((page - 1) * limit, page * limit);
}
