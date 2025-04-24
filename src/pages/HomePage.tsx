
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import TestimonialSection from "@/components/TestimonialSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

// Mock popular topics
const popularTopics = [
  { id: "1", slug: "programming", title: "Programming", icon: "💻", mentorCount: 156 },
  { id: "2", slug: "design", title: "Design", icon: "🎨", mentorCount: 89 },
  { id: "3", slug: "marketing", title: "Marketing", icon: "📊", mentorCount: 72 },
  { id: "4", slug: "business", title: "Business", icon: "💼", mentorCount: 103 },
  { id: "5", slug: "personal-development", title: "Personal Development", icon: "🚀", mentorCount: 67 },
  { id: "6", slug: "language-learning", title: "Language Learning", icon: "🗣️", mentorCount: 45 }
];

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      
      {/* Popular Topics Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter">Popular Topics</h2>
              <p className="text-gray-500 mt-2">Find mentors in these trending areas</p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0" asChild>
              <Link to="/topics">View All Topics</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularTopics.map((topic) => (
              <Link key={topic.id} to={`/topics/${topic.slug}`}>
                <Card className="h-full hover:shadow-md transition-all">
                  <CardContent className="flex flex-col items-center justify-center p-4 text-center">
                    <div className="text-3xl mb-2">{topic.icon}</div>
                    <h3 className="font-medium">{topic.title}</h3>
                    <p className="text-xs text-muted-foreground">{topic.mentorCount} mentors</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <FeatureSection />
      <TestimonialSection />
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-teal-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
              Ready to grow with peer mentorship?
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-teal-50 md:text-xl">
              Join our community of learners and mentors today. Start your journey towards mastering new skills.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-teal-700 hover:bg-teal-50" size="lg" asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-teal-500" size="lg" asChild>
                <Link to="/discover">Browse Mentors</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
