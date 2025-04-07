
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import LazyImage from "@/components/LazyImage";

interface Article {
  id: number;
  title: string;
  date: string;
  publication: string;
  image: string;
  description: string;
  link: string;
}

const ArticleCard = ({ article }: { article: Article }) => (
  <Card className="overflow-hidden transition-all hover:shadow-md flex flex-col h-full">
    <div className="relative aspect-video overflow-hidden">
      <LazyImage
        src={article.image}
        alt={article.title}
        className="object-cover w-full h-full transition-transform hover:scale-105 duration-500"
      />
    </div>
    <CardHeader className="pt-4 pb-2">
      <CardTitle className="text-xl font-serif">{article.title}</CardTitle>
      <CardDescription>
        <span className="block mb-1">{article.publication}</span>
        <span>{article.date}</span>
      </CardDescription>
    </CardHeader>
    <CardContent className="text-gray-600 pb-4 flex-grow">{article.description}</CardContent>
    <CardFooter className="mt-auto">
      <a href={article.link} target="_blank" rel="noopener noreferrer">
        <Button className="gap-2">
          Read Article
          <ExternalLink size={16} />
        </Button>
      </a>
    </CardFooter>
  </Card>
);

const Articles = () => {
  const articles: Article[] = [
    {
      id: 1,
      title: "23 Women for '23: The Next Generation of Women",
      date: "March 8, 2023",
      publication: "jenny.gr",
      image: "/lovable-uploads/e23bae95-2bd1-4369-9875-a5bc9ffb1c7e.png",
      description: "This article highlights 23 inspiring Greek women under 30 who are shaping the future with their work, vision, and voice. It celebrates the new generation of empowered women—especially Gen Z—who are turning past struggles into action and redefining leadership across all fields.",
      link: "https://23women.liquid.gr/articles/24_i-alexandra-basilaki-einai-synidrytria-tis-drug-n-drop/"
    },
    {
      id: 2,
      title: "JA Start Up 2022: Drug n Drop, recognized for pharmaceutical waste management, is heading to Europe",
      date: "June 6, 2022",
      publication: "Ert News",
      image: "/lovable-uploads/6ff2e001-bb34-448f-8ac6-545626da91f3.png",
      description: "Drug n Drop won 1st place at the JA Start Up 2022 competition for its smart system that manages unused and near-expiry medicines. The team will represent Greece at the Gen-E 2022 European Entrepreneurship Festival in Tallinn.",
      link: "https://www.ertnews.gr/eidiseis/epistimi/ja-start-up-2022-i-drug-n-drop-gia-ti-diacheirisi-farmakeytikon-apovliton-diakrithike-kai-paei-eyropi/"
    },
    {
      id: 3,
      title: "JA Greece: Drug n Drop won the student competition JA Start Up 2022",
      date: "June 8, 2022",
      publication: "The TOC",
      image: "/lovable-uploads/d917c869-6efa-46f2-a1fe-f4691aa6799c.png",
      description: "Drug n Drop won 1st place at the JA Start Up 2022 competition for its innovative pharmaceutical waste management system, created by students from AUEB and the University of Athens. The team will represent Greece at the Gen-E 2022 European Entrepreneurship Festival in Tallinn, with support from EY Greece.",
      link: "https://www.thetoc.gr/koinwnia/article/ja-greece-h-drug-n-drop-kerdise-ton-foititiko-diagonismo-ja-start-up-2022/"
    
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader 
          title="Articles" 
          subtitle="A selection of articles in which I've been featured"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Articles;
