import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'blogs');

type PostDataProps = {
  Id: number;
  title: string;
  slug: string;
  description: string;
  content: string;
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

const fileNames = fs.readdirSync(postsDirectory);

const allPostsContent: PostDataProps[] = [];
const allPostsMetaData: PostMetadata[] = [];

fileNames.forEach((fileName, index) => {
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content, data } = matter(fileContents);

  const Id = index + 1;
  const slug = data.slug ?? Id ;

  allPostsMetaData.push({
    Id,
    title: data.title,
    slug,
    description: data.description || '',
    category: data.category || '',
    date: data.date || '',
    readTime: data.readTime || '',
    featured: data.featured || false,
    image: data.image || '',
  });

  allPostsContent.push({
    Id,
    title: data.title,
    slug,
    description: data.description || '',
    content,
  });
});

// Write JSON files
const jsonData = JSON.stringify(allPostsMetaData, null, 2);
const contentData = JSON.stringify(allPostsContent, null, 2);

// Save to files
fs.writeFileSync(path.join(process.cwd(), 'demoData/postsMetaData.json'), jsonData);
fs.writeFileSync(path.join(process.cwd(), 'demoData/postsContent.json'), contentData);
