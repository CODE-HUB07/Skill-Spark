
import { Calendar, MessageSquare, Search, Star, User } from "lucide-react";

const features = [
  {
    icon: <Search className="h-6 w-6" />,
    title: "Find the Perfect Mentor",
    description: "Search and filter by skills, availability, and ratings to find mentors who match your learning goals."
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Flexible Scheduling",
    description: "Book one-time or recurring sessions that fit both your schedule and your mentor's availability."
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Direct Communication",
    description: "Chat directly with mentors before booking to ensure they're the right fit for your learning needs."
  },
  {
    icon: <User className="h-6 w-6" />,
    title: "Become a Mentor",
    description: "Share your knowledge, build your reputation, and earn by helping others learn your skills."
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: "Verified Reviews",
    description: "Read detailed feedback from past mentees to make informed decisions about potential mentors."
  }
];

const FeatureSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How SkillSpark Works</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl">
            Our platform makes it easy to connect with mentors and learn the skills you need to succeed.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition-all"
            >
              <div className="mb-4 rounded-full bg-teal-100 p-3 w-fit text-teal-700">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
