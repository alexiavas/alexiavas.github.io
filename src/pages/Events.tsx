
import { useState } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import LazyImage from "@/components/LazyImage";

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
  fullDescription: string;
}

const EventCard = ({ event, onReadMore }: { event: Event; onReadMore: (event: Event) => void }) => (
  <Card className="overflow-hidden transition-all hover:shadow-md flex flex-col h-full">
    <div className="relative aspect-video overflow-hidden">
      <LazyImage
        src={event.image}
        alt={event.title}
        className="object-cover w-full h-full transition-transform hover:scale-105 duration-500"
        width={400}
        height={225}
        quality={75}
      />
    </div>
    <CardHeader className="pt-4 pb-2">
      <CardTitle className="text-xl font-serif">{event.title}</CardTitle>
      <CardDescription>
        <span className="block mb-1">{event.date}</span>
        <span>{event.location}</span>
      </CardDescription>
    </CardHeader>
    <CardContent className="text-gray-600 pb-4 flex-grow">{event.description}</CardContent>
    <CardFooter className="mt-auto">
      <Button variant="ghost" onClick={() => onReadMore(event)}>
        Read More
      </Button>
    </CardFooter>
  </Card>
);

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const events: Event[] = [
    {
      id: 1,
      title: "Women in Digital",
      date: "March 6, 2025",
      location: "Athens, Greece",
      image: "/lovable-uploads/329c68df-c8dc-45eb-a212-d422eab69076.png",
      description: "A panel discussion on work-life balance, and what this means for the different generations of women.",
      fullDescription: "We had a powerfull discussion at Women in Digital, where I had the opportunity to speak on the panel \"Work-Life Balance: Myth or Reality?\". We shared important insights on what balance really means in today's fast-paced digital world, how AI is reshaping productivity, and the strategies we use to stay resilient without burning out. Spoiler alert: balance doesn't look the same for everyone, and that's okay!."
    },
    {
      id: 2,
      title: "Global Final Competition of Social Innovation Relay (SIR)",
      date: "June 10, 2024",
      location: "Online",
      image: "/lovable-uploads/73cdf160-a627-4b19-8537-3945c68b12b2.png",
      description: "Member of the jury committee of the Social Innovation Relay, a global competition focusing on social entrepreneurship.",
      fullDescription: "I was a judge in the Global Final Competition of the Social Innovation Relay (SIR), organized by JA Europe in collaboration with NN Group, for the 10th year. It was an inspiring experience to witness the brilliant ideas and passion for social change from young minds across the globe."
    },
    {
      id: 3,
      title: "Future of Retail Conference",
      date: "March 8, 2023",
      location: "Athens, Greece",
      image: "/lovable-uploads/00085189-95cc-4320-bf55-82c4ed5be250.png",
      description: "A panel discussion on the skills and mindset necessary for the  and leaders of the future.",
      fullDescription: "I was honored to have contributed to the \"Empowering Tomorrow's Leaders: A Focus on Skills and Entrepreneurship\" panel at the Future of Retail! It was an enlightening discussion highlighting the crucial skills and mindset necessary for the entrepreneurs of the future."
    },
    {
      id: 4,
      title: "EUnite4Health Innovation Demo Day at European Parliament",
      date: "October 5, 2023",
      location: "Strasbourg, France",
      image: "/lovable-uploads/9d81f9a9-8caa-43e6-9475-6cf285ee633b.png",
      description: "Guest speaker for the #EUnite4Health event, where we had a dynamic discussion on how we can collectively build a healthier Europe by injecting innovation into the healthcare sector.",
      fullDescription: "I had the honor to visit the European Parliament in Strasbourg as a guest speaker for the EUnite4Health event. We had a dynamic discussion on how we can collectively build a healthier Europe by injecting innovation into the healthcare sector. I had the unique opportunity to address this pressing matter in front of a distinguished audience, which included experts from the consortium of partners deeply committed to the EUnite4Health initiative, as well as influential policymakers who shape the healthcare landscape of our continent."
    }, 
    {
      id: 5,
      title: "Engaging with the European Commission",
      date: "June 30, 2023",
      location: "Brussels, Belgium",
      image: "/lovable-uploads/bacbba63-2648-49de-9130-349a3864ae26.png",
      description: "A visit to the European Commission led to a valuable discussion about Drug n Drop with Vice-President Margaritis Schinas, highlighting the EU's commitment to sustainability and innovation.",
      fullDescription: "An inspiring visit to the European Commission, where a meaningful exchange took place with Vice-President Margaritis Schinas regarding the mission and impact of Drug n Drop. The conversation focused on addressing critical healthcare and sustainability challenges, aligning with the EU's broader vision for a stronger, more resilient future. Gratitude goes to Vice-President Schinas for his time and insights, as well as to Daniel Calleja Crespo, Director General of Legal Services at the European Commission, for his support. This opportunity was made possible through the efforts of JA Europe and AmCham EU, whose commitment to empowering young innovators continues to open doors for impactful dialogue and growth across Europe."
    },
    {
      id: 6,
      title: "HEInnovate webinar - Student entrepreneurship and competitions",
      date: "September 29, 2022",
      location: "Online",
      image: "/lovable-uploads/1d7cf85d-39f5-42dc-bd19-58d95087c234.png",
      description: "Drug n Drop presented its entrepreneurial journey at the HEInnovate webinar, a European Commission and OECD initiative.",
      fullDescription: "The co-founders of Drug n Drop participated in the HEInnovate webinar, hosted by the European Commission and OECD. The session, titled Student Entrepreneurship and Competitions, explored how student entrepreneurship is promoted and the role of entrepreneurship competitions in shaping young innovators. During the webinar, Nikolas Spyrellis, Alexia Vasilaki, and Giannis Spyrellis shared their entrepreneurial journey, from launching Drug n Drop in Greece their journey to Estonia and France. Moderated by Rebecca Allinson, Managing Partner at Technopolis Group, the webinar also featured industry experts such as Alberto Corti from the Stockholm School of Entrepreneurship and Minna Melleri from JA Europe. The event provided valuable insights into the world of student-led startups and the opportunities entrepreneurship competitions offer."
    }
  ];

  const handleReadMore = (event: Event) => {
    setSelectedEvent(event);
    setIsDialogOpen(true);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader 
          title="Events" 
          subtitle="Conferences, workshops, and speaking engagements I've participated in"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {events.map((event) => (
            <EventCard key={event.id} event={event} onReadMore={handleReadMore} />
          ))}
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          {selectedEvent && (
            <DialogContent className="sm:max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-serif mb-2">{selectedEvent.title}</DialogTitle>
                <DialogDescription className="text-sm">
                  <span className="block">{selectedEvent.date}</span>
                  <span>{selectedEvent.location}</span>
                </DialogDescription>
              </DialogHeader>
              <div className="mt-2">
                <LazyImage
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-64 object-cover rounded-md mb-4"
                  width={800}
                  height={450}
                  quality={80}
                />
                <div className="text-gray-700 space-y-4">
                  <p>{selectedEvent.fullDescription}</p>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </Layout>
  );
};

export default Events;
