import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader 
          title="Contact Me" 
          subtitle="Let's connect! Here's how you can reach me."
        />

        <div className="max-w-2xl mx-auto mb-16 text-center">
          <div className="flex flex-col items-center justify-center gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="p-4 rounded-full bg-gray-100 mb-4">
                <Mail className="h-8 w-8 text-gray-700" />
              </div>
              <h3 className="font-serif text-xl mb-2">Email</h3>
              <p className="text-gray-600 mb-2">For inquiries and opportunities:</p>
              <a 
                href="mailto:contact@avasilaki.gr" 
                className="font-medium text-black hover:underline"
              >
                contact@avasilaki.gr
              </a>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-gray-600 max-w-lg mx-auto">
              I'm always open to discussing new projects, opportunities, or collaborations. 
              Feel free to reach out with any questions or just to say hello!
            </p>
            <div className="mt-6">
              <a href="mailto:contact@avasilaki.gr">
                <Button size="lg">
                  Send Me an Email
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
