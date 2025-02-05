import type { MetadataRoute } from 'next';

import readAllPostsMetadata from '@/utils/readAllPostsMetadata';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = readAllPostsMetadata();

  return [
    {
      url: 'https://lah1203.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'daily',
    },
    ...posts.map(post => ({
      url: `https://lah1203.vercel.app/post/${post.category}/${post.fileName.split('.')[0]}`,
      lastModified: post.date,
      changeFrequency: 'daily' as 'daily',
      priority: 0.7,
      images: [post.thumbnail],
    })),
  ];
}
