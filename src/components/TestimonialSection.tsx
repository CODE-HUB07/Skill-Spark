
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Johnson",
    avatar: "/placeholder.svg",
    role: "Software Engineer",
    content: "I was stuck in my career as a junior developer. After three months of mentorship, I landed a senior role. My mentor provided practical guidance that no tutorial could offer.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    avatar: "/placeholder.svg",
    role: "UX Designer",
    content: "The mentorship I received helped me transition from graphic design to UX. My mentor reviewed my portfolio, suggested improvements, and helped me prepare for interviews.",
    rating: 5
  },
  {
    name: "Marcus Williams",
    avatar: "/placeholder.svg",
    role: "Product Manager",
    content: "As someone looking to break into product management, having a mentor who had walked the same path was invaluable. The personalized advice made all the difference.",
    rating: 4
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-amber-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Stories</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl">
            Hear from people who have transformed their careers through mentorship on our platform.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {Array(5).fill(0).map((_, i) => (
                    <Star 
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating 
                          ? "fill-amber-500 text-amber-500" 
                          : "text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <p className="mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
