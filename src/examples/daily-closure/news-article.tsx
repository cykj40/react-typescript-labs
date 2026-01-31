import { Card } from '$/common/components/card';
import { use } from 'react';
import { currentDate } from './utilities';
import { z } from 'zod';

type NewsArticleProps = {
  id: number;
};

type Post = z.infer<typeof PostSchema>;

const PostSchema = z.object({
  id: z.number(),
  title: z.string(),
  body: z.string(),
});

const fetchArticle = async (id: number): Promise<Post> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const posisblePost = await response.json();
  const post = PostSchema.parse(posisblePost);
  return post;
};

export const NewsArticle = ({ id = 1 }: NewsArticleProps) => {
  // Important: The type for article is any because the API returns.

  const article = use(Promise.resolve(fetchArticle(id)));

  return (
    <Card as="article" className="space-y-4 font-mono md:first:col-span-2">
      <header className="flex items-start justify-between">
        <h2 className="text-lg font-semibold">{article?.title}</h2>
        <p className="text-sm whitespace-nowrap text-gray-500">{currentDate}</p>
      </header>
      <p>{article?.body}</p>
    </Card>
  );
};
