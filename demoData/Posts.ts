import allPostsContent from "@/demoData/postsContent.json";
import allPostsMetaData from "@/demoData/postsMetaData.json";

type PostDataProps = {
  Id: number;
  title: string;
  slug: string;
  description: string;
  contentHtml: string;
};

type PostMetadata = {
  Id: number;
  title: string;
  slug: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  featured: boolean;
  image: string;
};
// Store posts data once when the file system is first read
export const PostsContent = allPostsContent;

// Store posts data once when the file system is first read
export const PostsMetaData = allPostsMetaData;

const uniqueCategory = new Set<string>()
PostsMetaData.map(post => uniqueCategory.add(post.category))
export const PostsCategory: string[] = [...uniqueCategory]
