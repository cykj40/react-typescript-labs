import { Card } from '$/common/components/card';
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

// Mock articles data
const MOCK_ARTICLES: Post[] = [
  {
    id: 1,
    title: 'Local Developer Discovers Coffee Makes Code Work Better',
    body: 'In a groundbreaking study conducted over 47 consecutive all-nighters, local developer Sam Chen has confirmed what the tech community has long suspected: coffee consumption is directly correlated with code quality. "I tried writing React without caffeine once," Chen reported. "It was TypeScript without the types."',
  },
  {
    id: 2,
    title: 'Stack Overflow Down For 3 Minutes, Thousands Unable To Code',
    body: 'Panic swept through the developer community today as Stack Overflow experienced a brief 3-minute outage. Developers worldwide were forced to actually read documentation. "I didn\'t know what to do," said one engineer. "I just stared at my screen and questioned all my life choices."',
  },
  {
    id: 3,
    title: 'Senior Developer Admits They Still Google "How to Center a Div"',
    body: 'In a shocking confession that sent ripples through the web development world, 15-year veteran developer Alex Morgan admitted to still googling basic CSS. "Flexbox? Grid? I know they exist," Morgan stated. "But every single time, I pretend it\'s my first day on the internet."',
  },
  {
    id: 4,
    title: 'npm Install Takes So Long, Developer Ages 3 Years',
    body: 'What started as a simple "npm install" command ended with developer Jamie Torres emerging from their basement with gray hair and existential dread. "I went in to add one package," Torres explained. "When I came back, my kids had graduated college and my houseplants had evolved into sentient beings."',
  },
  {
    id: 5,
    title: 'It Worked In Development Becomes Company Motto',
    body: 'Tech startup "Deploy First, Ask Later Inc." has officially adopted "It Worked In Development" as their company motto. CEO Chris Park explained: "Why waste time with staging environments when production is the ultimate test? Our users are very forgiving. Well, they were. Before they all left."',
  },
];

const getArticle = (id: number): Post => {
  // Return mock data directly - no async needed
  const article = MOCK_ARTICLES.find((a) => a.id === id) || MOCK_ARTICLES[0];
  return PostSchema.parse(article);
};

export const NewsArticle = ({ id = 1 }: NewsArticleProps) => {
  const article = getArticle(id);

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
