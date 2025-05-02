
// app/blogs/[slug]/page.tsx
import { PostsMetaData, PostsContent } from "@/demoData/Posts";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbNav from "@/components/ui/BreadcrumbNav";

export default function Post({ params }: { params: { slug: string } }) {
  const postMeta = PostsMetaData.find(post => post.slug === params.slug);
  const postContent = PostsContent.find(post => post.Id === postMeta?.Id);

  if (!postMeta || !postContent) {
    return (<>
      {/* Breadcrumb navigation */}
      <div className="p-4">
        <BreadcrumbNav
          items={[
            { label: "Home", href: "/" },
            { label: "Blogs", href: `/blogs/` },
          ]}
        />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-3xl font-bold text-gray-800">Post not found</h1>
        <p className="mt-4 text-gray-600">The blog post you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/blogs" className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Back to all posts
        </Link>
      </div>
    </>);
  }

  // Format date for better display
  const formattedDate = new Date(postMeta.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Breadcrumb navigation */}
      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Blogs", href: `/blogs` },
          { label: postMeta.title, href: null }  // Current page
        ]}
      />
      {/* Hero section with image */}
      <div className="relative w-full h-96">
        <Image
          src={postMeta.image}
          alt={postMeta.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 mb-4">
              <span className="px-3 py-1 text-xs font-medium bg-blue-600 rounded-full">
                {postMeta.category}
              </span>
              <span className="text-sm font-medium">{postMeta.readTime} read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{postMeta.title}</h1>
            <time className="text-sm font-medium">{formattedDate}</time>
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="max-w-4xl mx-auto px-4 -mt-10 relative">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Article content */}
          <article className="prose lg:prose-xl max-w-none p-8 md:p-12">
            <p className="text-xl text-gray-700 mb-8 font-medium leading-relaxed">
              {postMeta.description}
            </p>
            <div className="border-t border-gray-100 my-8"></div>
            <div className="text-gray-800 leading-relaxed">
              <ReactMarkdown >
                {postContent.content}
              </ReactMarkdown>
            </div>
          </article>

          {/* Author and sharing section */}
          <div className="bg-gray-50 p-8 border-t border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <p className="font-medium text-gray-900">Author Name</p>
                  <p className="text-sm text-gray-600">Writer & Content Creator</p>
                </div>
              </div>
              <div className="flex space-x-4 items-center">
                <span className="text-sm text-gray-600">Share:</span>
                <button className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded-full text-white">
                  <span className="sr-only">Twitter</span>
                  {/* Icon placeholder */}
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </button>
                <button className="w-8 h-8 flex items-center justify-center bg-blue-800 rounded-full text-white">
                  <span className="sr-only">Facebook</span>
                  {/* Icon placeholder */}
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </button>
                <button className="w-8 h-8 flex items-center justify-center bg-green-600 rounded-full text-white">
                  <span className="sr-only">Share</span>
                  {/* Icon placeholder */}
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"></path>
                    <polyline points="16 6 12 2 8 6"></polyline>
                    <line x1="12" y1="2" x2="12" y2="15"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related posts section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PostsMetaData.filter(post =>
              post.category === postMeta.category && post.slug !== postMeta.slug
            ).slice(0, 2).map(post => (
              <Link href={`/blogs/${post.slug}`} key={post.Id} className="block group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-lg">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-medium text-blue-600 uppercase">{post.category}</span>
                    <h3 className="mt-2 text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-gray-600 line-clamp-2">{post.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.readTime} read</span>
                      <span className="text-sm font-medium text-blue-600">Read more →</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
