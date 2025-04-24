
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-teal-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Learn and grow with peer-to-peer mentorship
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl">
                Connect with mentors who have the skills you want to learn, or share your knowledge and help others grow.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-3 min-[400px]:flex-row">
              <Button className="bg-teal-600 hover:bg-teal-700" size="lg" asChild>
                <Link to="/discover">Find a Mentor</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/become-mentor">Become a Mentor</Link>
              </Button>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-gray-500">Trusted by community members from:</p>
              <div className="flex flex-wrap gap-6 opacity-60">
                <div className="font-semibold">Google</div>
                <div className="font-semibold">Microsoft</div>
                <div className="font-semibold">Amazon</div>
                <div className="font-semibold">Meta</div>
                <div className="font-semibold">Airbnb</div>
              </div>
            </div>
          </div>
          <div className="relative mx-auto aspect-video overflow-hidden rounded-xl bg-gray-100 shadow-lg lg:aspect-square lg:w-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-600 to-amber-500 opacity-20"></div>
            <div className="flex h-full items-center justify-center">
              <div className="grid w-full max-w-sm gap-4 p-6 sm:p-10">
                <div className="h-24 w-full rounded-lg bg-white shadow-sm"></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 rounded-lg bg-white shadow-sm"></div>
                  <div className="h-24 rounded-lg bg-white shadow-sm"></div>
                </div>
                <div className="h-24 w-full rounded-lg bg-white shadow-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
