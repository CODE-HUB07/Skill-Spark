
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    number: 1,
    title: "Create Your Profile",
    description: "Sign up and build your profile highlighting your learning goals or expertise you want to share.",
    forMentee: "Specify the skills you want to learn and your availability for sessions.",
    forMentor: "Showcase your experience, set your rates, and define when you're available to mentor."
  },
  {
    number: 2,
    title: "Connect and Communicate",
    description: "Browse profiles, search for specific skills, and reach out to potential matches.",
    forMentee: "Message mentors who match your learning needs to discuss your goals.",
    forMentor: "Respond to mentee inquiries and determine if your skills align with their needs."
  },
  {
    number: 3,
    title: "Schedule Sessions",
    description: "Book one-on-one sessions that fit both of your schedules.",
    forMentee: "Choose from available time slots and confirm your booking.",
    forMentor: "Accept session requests and prepare learning materials if needed."
  },
  {
    number: 4,
    title: "Learn and Grow Together",
    description: "Participate in your sessions via our integrated video platform or your preferred method.",
    forMentee: "Come prepared with questions and goals for each session.",
    forMentor: "Provide guidance, feedback, and resources tailored to your mentee."
  },
  {
    number: 5,
    title: "Share Feedback",
    description: "After sessions, leave reviews and ratings to help the community.",
    forMentee: "Rate your experience and share how the mentor helped you progress.",
    forMentor: "Provide constructive feedback on your mentee's progress and engagement."
  }
];

const faq = [
  {
    question: "How much does it cost to use SkillSpark?",
    answer: "SkillSpark is free to join. Mentors set their own rates, which can range from free sessions to premium rates based on expertise. You only pay for the sessions you book."
  },
  {
    question: "How do I become a mentor?",
    answer: "Sign up for an account, complete your profile highlighting your expertise, set your availability and rates, and enable the 'Mentor Mode' in your settings. Our team will review your profile before it goes live."
  },
  {
    question: "What happens if I need to cancel a session?",
    answer: "You can cancel a session up to 24 hours before the scheduled time without any penalty. For cancellations within 24 hours, our fair cancellation policy applies, which may include a partial fee depending on the circumstances."
  },
  {
    question: "How do I know if a mentor is right for me?",
    answer: "We encourage you to review mentor profiles thoroughly, including their expertise, reviews from other mentees, and session rates. You can also message them before booking to discuss your goals and determine if they're a good fit."
  },
  {
    question: "Are sessions recorded?",
    answer: "Sessions are not automatically recorded. However, with mutual consent, you and your mentor/mentee can choose to record sessions for future reference."
  }
];

const HowItWorksPage = () => {
  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">How SkillSpark Works</h1>
        <p className="text-muted-foreground">
          Our platform makes it easy to connect mentors and mentees for meaningful skill development. 
          Here's how to get started in five simple steps:
        </p>
      </div>
      
      {/* Steps Section */}
      <div className="max-w-4xl mx-auto mb-16">
        {steps.map((step, index) => (
          <div key={index} className="mb-8 md:mb-12">
            <div className="flex items-start gap-4">
              <div className="bg-teal-600 text-white rounded-full w-10 h-10 flex-shrink-0 flex items-center justify-center font-bold">
                {step.number}
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">{step.title}</h2>
                <p className="text-muted-foreground mb-4">{step.description}</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-muted/40 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">For Mentees</h3>
                    <p className="text-sm">{step.forMentee}</p>
                  </div>
                  <div className="bg-muted/40 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">For Mentors</h3>
                    <p className="text-sm">{step.forMentor}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {index < steps.length - 1 && (
              <div className="ml-5 h-8 border-l-2 border-dashed border-muted-foreground/30"></div>
            )}
          </div>
        ))}
      </div>
      
      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faq.map((item, index) => (
            <div key={index} className="bg-white border rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
              <p className="text-muted-foreground">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="max-w-2xl mx-auto text-center bg-teal-50 rounded-xl p-8 border border-teal-100">
        <h2 className="text-2xl font-bold mb-4">Ready to start your journey?</h2>
        <p className="text-muted-foreground mb-6">
          Join our community today and connect with mentors who can help you achieve your learning goals.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-teal-600 hover:bg-teal-700" size="lg" asChild>
            <Link to="/signup">Sign Up</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/discover">Browse Mentors</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;
