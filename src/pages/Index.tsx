
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import LazyImage from "@/components/LazyImage";

const Index = () => {
  return (
    <Layout>
      <section className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 md:px-8">
        <div className="container mx-auto text-center max-w-3xl animate-fade-in">
          <div className="mb-8 overflow-hidden rounded-full border-2 border-gray-100 inline-block">
            <LazyImage
              src="/lovable-uploads/b16a76f5-d4d2-4333-9a08-5b24553c3e6f.png"
              alt="Alexia Vasilaki"
              className="w-40 h-40 object-cover"
              width={160}
              height={160}
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6">
            Alexia Vasilaki
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Welcome to my personal space. I'm passionate about sharing my journey through my work, experiences, 
          and contributions to various projects and events. Feel free to explore and connect with me. 🚀
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/resume">
              <Button variant="default" size="lg" className="min-w-32">
                See My Resume
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button variant="outline" size="lg" className="min-w-32">
                Get In Touch
              </Button>
            </Link>
            
            <a href="https://www.linkedin.com/in/alexandra-vasilaki" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="min-w-32 border-blue-500 text-blue-600 hover:bg-blue-50">
                <Linkedin className="mr-2" size={18} />
                LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
