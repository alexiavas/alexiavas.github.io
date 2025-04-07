
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import LazyImage from "@/components/LazyImage";

interface Award {
  id: number;
  title: string;
  date: string;
  organization: string;
  image: string;
  description: string;
  link?: string;
}

const AwardCard = ({ award }: { award: Award }) => (
  <Card className="overflow-hidden transition-all hover:shadow-md flex flex-col h-full">
    <div className="relative aspect-video overflow-hidden">
      <LazyImage
        src={award.image}
        alt={award.title}
        className="object-cover w-full h-full transition-transform hover:scale-105 duration-500"
      />
    </div>
    <CardHeader className="pt-4 pb-2">
      <CardTitle className="text-xl font-serif">{award.title}</CardTitle>
      <CardDescription>
        <span className="block mb-1">{award.organization}</span>
        <span>{award.date}</span>
      </CardDescription>
    </CardHeader>
    <CardContent className="text-gray-600 pb-4 flex-grow">{award.description}</CardContent>
    {award.link && (
      <CardFooter className="mt-auto">
        <a href={award.link} target="_blank" rel="noopener noreferrer">
          <Button className="gap-2">
            Learn More
            <ExternalLink size={16} />
          </Button>
        </a>
      </CardFooter>
    )}
  </Card>
);

const Awards = () => {
  const awards: Award[] = [
    {
      id: 1,
      title: "Forbes 30 under 30 List - Greece",
      date: "October 2022",
      organization: "Forbes Greece",
      image: "/lovable-uploads/f34c38dc-10c7-4956-b808-697afc50db50.png",
      description: "Selected as one of Greece's top 30 young entrepreneurs by Forbes for our innovative healthcare startup, Drug n Drop. The recognition highlighted our impact on the digital health sector, showcasing our commitment to improving access to pharmaceuticals through technology-driven solutions and forward-thinking business strategy.",
      link: "https://www.forbesgreece.gr/forbes-30-under-30-2023/3683370/h-drugndrop-me-ti-boitheia-tou-iot-bazei-telos-sti-spatali-farmakon/"
    },
    {
      id: 2,
      title: "AmCham EU Youth Entrepreneurship Award 2023 finalist",
      date: "June 2023",
      organization: "American Chamber of Commerce to the European Union (AmCham EU)",
      image: "/lovable-uploads/6d64e3fd-0f31-48b4-bac0-b9a3ad0217cb.png",
      description: "The American Chamber of Commerce to the European Union, focusing on female entrepreneurship, presents the AmCham EU Youth Entrepreneurship Award that identifies young people who have participated in a JA programme, made it past the initial start-up phase and have a business concept with strong growth potential.",
      link: "https://www.amchameu.eu/news/introducing-youth-entrepreneurship-award-finalists/"
    },
    {
      id: 3,
      title: "2nd place at the GreenTech Challenge",
      date: "December 2022",
      organization: "ESU NTUA",
      image: "/lovable-uploads/7ae71df2-161c-4589-98cc-1489f0cf83ca.png",
      description: "The GreenTech Challenge | by ESU NTUA is the largest National Program of Green Innovation. It targets startups, innovative SMEs, researchers, and students who want to develop innovative solutions that concern the Environment, Climate Change and Sustainable Development. Our team reached the 2nd place among 143 teams, for the Innovation Idea Holder category.",
      link: "https://greentechchallenge.gr/greentech-challenge-2022/#:~:text=%CE%9A%CE%B1%CF%84%CE%B7%CE%B3%CE%BF%CF%81%CE%AF%CE%B1%20Innovation%20Idea%20Holder/"
    },
    {
      id: 4,
      title: "3rd place in the paneuropean JA Competition",
      date: "July 2022",
      organization: "JA Europe",
      image: "/lovable-uploads/00514d87-0794-42e6-bf59-5dc6e25fe631.png",
      description: "The Gen-E festival organized by JA Europe and hosted this year by JA Estonia where 21 teams, who have already been the winners in their own countries completed for the Enterprise of the year award. Drug n Drop won the 3rd award, as well as the Financial Sustainability & Growth Award by GAM Investments. Our team was also nominated for the Avanade Digital Innovation Award, the Novartis Digital Health Innovation Award, and the UniCredit Future Award 2022 ",
      link: "https://www.dept.aueb.gr/en/dmst/news/distinctions-gen-e-2022-competition/"
    },

    {
      id: 5,
      title: "National Start Up Awards",
      date: "December 2022",
      organization: "Elevate Greece",
      image: "/lovable-uploads/010cdd78-e1cb-457a-b696-fe9c8e2b3be5.png",
      description: "Drug n Drop had the supreme honour to get awarded at the National Start Up Awards of Elevate Greece, for the achievements and contribution to entrepreneurship this year. Our core team attended the awards and enjoyed networking with key individuals for Drug n Drop's further development. This award is particularly special and empowers us to keep up the good work cause it gets recognised and has impact.",
      link: "https://www.latsis-foundation.org/eng/news/national-start-up-awards-2021-2022-elevate-greece/"
    },

    {
      id: 6,
      title: "1st place in the JA Greece National Competition",
      date: "June 2022",
      organization: "JA Greece",
      image: "/lovable-uploads/7569cc02-e05c-444f-9221-1d3a3ff15859.png",
      description: "Awarded first place in the Start-up of the Year category for our innovative business concept and execution. Recognized for outstanding entrepreneurial vision, strategic planning, and real-world impact, standing out among top student-led ventures across the country.",
      link: "https://jagreece.org/ja-greece-h-drug-n-drop-%CE%BC%CE%B5-%CF%84%CE%BF-%CE%AD%CE%BE%CF%85%CF%80%CE%BD%CE%BF-%CF%83%CF%8D%CF%83%CF%84%CE%B7%CE%BC%CE%B1-%CE%B4%CE%B9%CE%B1%CF%87%CE%B5%CE%AF%CF%81%CE%B9%CF%83%CE%B7%CF%82/"
    },
    {
      id: 7,
      title: "Mobile Excellence Awards 2023",
      date: "December 2022",
      organization: "Boussias Events | SEKEE",
      image: "/lovable-uploads/5a14fef8-f48f-4cce-bbcd-3314ffb5a897.png",
      description: "We had the honour to be awarded for Drug n Drop at the Mobile Excellence Awards '23! We appreciate the judging committee but most importantly the Jury President Mr. Georgios Doukidis, professor at the Department of Management Science and Technology and initiator and director of ELTRUN (Electronic Trading Research UNit) at Athens University of Economics and Business.",
      link: "https://m-awards.boussiasevents.gr/past-winners/#2023/"
    },

    {
      id: 8,
      title: "Best Athlete Award",
      date: "July 2015",
      organization: "Rethymno Swimming Club",
      image: "https://images.unsplash.com/photo-1600965962323-6362f726c3f8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/",
      description: "Earned Best Athlete Award of Rethymno Swimming Club at 2015, regarding my 5th and 7th place in the National Swimming Championship (2014, 2015)",
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader 
          title="Awards" 
          subtitle="Recognition and honors I've received throughout my career"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {awards.map((award) => (
            <AwardCard key={award.id} award={award} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Awards;
