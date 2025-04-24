
import { useState } from "react";
import MentorCard from "@/components/MentorCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

// Mock mentors data
const mentors = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar: "/placeholder.svg",
    title: "Senior Software Engineer at Google",
    rating: 4.9,
    sessionCount: 147,
    hourlyRate: 60,
    skills: ["JavaScript", "React", "Node.js"],
    availableNow: true
  },
  {
    id: "2",
    name: "Michael Chen",
    avatar: "/placeholder.svg",
    title: "UX Designer at Airbnb",
    rating: 4.8,
    sessionCount: 93,
    hourlyRate: 75,
    skills: ["UI Design", "Figma", "User Research"]
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    avatar: "/placeholder.svg",
    title: "Marketing Director at Spotify",
    rating: 4.7,
    sessionCount: 68,
    hourlyRate: 55,
    skills: ["Digital Marketing", "SEO", "Content Strategy"]
  },
  {
    id: "4",
    name: "James Wilson",
    avatar: "/placeholder.svg",
    title: "Data Scientist at Netflix",
    rating: 4.9,
    sessionCount: 112,
    hourlyRate: 80,
    skills: ["Python", "Machine Learning", "Data Visualization"]
  },
  {
    id: "5",
    name: "Aisha Patel",
    avatar: "/placeholder.svg",
    title: "Product Manager at Amazon",
    rating: 4.6,
    sessionCount: 51,
    hourlyRate: 65,
    skills: ["Product Strategy", "Agile", "User Stories"]
  },
  {
    id: "6",
    name: "David Kim",
    avatar: "/placeholder.svg",
    title: "Freelance Illustrator",
    rating: 4.8,
    sessionCount: 74,
    hourlyRate: 45,
    skills: ["Illustration", "Adobe Illustrator", "Character Design"]
  },
  {
    id: "7",
    name: "Lisa Taylor",
    avatar: "/placeholder.svg",
    title: "Career Coach",
    rating: 4.9,
    sessionCount: 203,
    hourlyRate: 70,
    skills: ["Resume Review", "Interview Prep", "LinkedIn Optimization"],
    availableNow: true
  },
  {
    id: "8",
    name: "Robert Martinez",
    avatar: "/placeholder.svg",
    title: "Financial Advisor",
    rating: 4.7,
    sessionCount: 89,
    hourlyRate: 90,
    skills: ["Personal Finance", "Investing", "Retirement Planning"]
  }
];

// Mock topic filters
const topicFilters = [
  "Programming",
  "Design",
  "Marketing",
  "Data Science",
  "Product Management",
  "Illustration",
  "Career Development",
  "Finance"
];

const DiscoverPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([0, 100]);
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [sortBy, setSortBy] = useState("rating");

  const handleTopicToggle = (topic: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topic)
        ? prev.filter((t) => t !== topic)
        : [...prev, topic]
    );
  };

  const handlePriceRangeChange = (value: number[]) => {
    setPriceRange(value);
  };

  // Filter and sort mentors
  let filteredMentors = [...mentors];

  // Filter by search query
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filteredMentors = filteredMentors.filter(
      (mentor) =>
        mentor.name.toLowerCase().includes(query) ||
        mentor.title.toLowerCase().includes(query) ||
        mentor.skills.some((skill) => skill.toLowerCase().includes(query))
    );
  }

  // Filter by selected topics
  if (selectedTopics.length > 0) {
    filteredMentors = filteredMentors.filter((mentor) =>
      mentor.skills.some((skill) =>
        selectedTopics.some((topic) => 
          skill.toLowerCase().includes(topic.toLowerCase())
        )
      )
    );
  }

  // Filter by price range
  filteredMentors = filteredMentors.filter(
    (mentor) =>
      mentor.hourlyRate! >= priceRange[0] && 
      mentor.hourlyRate! <= priceRange[1]
  );

  // Filter by availability
  if (showAvailableOnly) {
    filteredMentors = filteredMentors.filter((mentor) => mentor.availableNow);
  }

  // Sort mentors
  if (sortBy === "rating") {
    filteredMentors.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "sessions") {
    filteredMentors.sort((a, b) => b.sessionCount - a.sessionCount);
  } else if (sortBy === "price_low") {
    filteredMentors.sort((a, b) => (a.hourlyRate || 0) - (b.hourlyRate || 0));
  } else if (sortBy === "price_high") {
    filteredMentors.sort((a, b) => (b.hourlyRate || 0) - (a.hourlyRate || 0));
  }

  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar filters */}
        <div className="w-full md:w-64 space-y-6">
          <div>
            <h2 className="font-semibold mb-3">Topics</h2>
            <div className="space-y-2">
              {topicFilters.map((topic) => (
                <div key={topic} className="flex items-center">
                  <Checkbox
                    id={`topic-${topic}`}
                    checked={selectedTopics.includes(topic)}
                    onCheckedChange={() => handleTopicToggle(topic)}
                  />
                  <Label htmlFor={`topic-${topic}`} className="ml-2">
                    {topic}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="font-semibold mb-3">Price Range</h2>
            <div className="pt-4 px-1">
              <Slider
                defaultValue={[0, 100]}
                max={100}
                step={5}
                value={priceRange}
                onValueChange={handlePriceRangeChange}
                className="mb-4"
              />
              <div className="flex justify-between">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}+</span>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="font-semibold mb-3">Availability</h2>
            <div className="flex items-center">
              <Checkbox
                id="available-now"
                checked={showAvailableOnly}
                onCheckedChange={() => setShowAvailableOnly(!showAvailableOnly)}
              />
              <Label htmlFor="available-now" className="ml-2">
                Available now
              </Label>
            </div>
          </div>
          
          <Button variant="outline" className="w-full" onClick={() => {
            setSearchQuery("");
            setSelectedTopics([]);
            setPriceRange([0, 100]);
            setShowAvailableOnly(false);
          }}>
            Clear All Filters
          </Button>
        </div>
        
        {/* Main content area */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <h1 className="text-2xl md:text-3xl font-bold">Find a Mentor</h1>
            
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-80">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search by name, skill, or title..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-auto">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Highest Rating</SelectItem>
                  <SelectItem value="sessions">Most Sessions</SelectItem>
                  <SelectItem value="price_low">Price: Low to High</SelectItem>
                  <SelectItem value="price_high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Active filters */}
          {(selectedTopics.length > 0 || showAvailableOnly || searchQuery) && (
            <div className="mb-4 flex flex-wrap gap-2">
              {searchQuery && (
                <Badge
                  variant="secondary"
                  className="flex items-center gap-1"
                >
                  Search: {searchQuery}
                  <button
                    onClick={() => setSearchQuery("")}
                    className="ml-1 rounded-full hover:bg-muted p-0.5"
                  >
                    &times;
                  </button>
                </Badge>
              )}
              
              {selectedTopics.map((topic) => (
                <Badge
                  key={topic}
                  variant="secondary"
                  className="flex items-center gap-1"
                >
                  {topic}
                  <button
                    onClick={() => handleTopicToggle(topic)}
                    className="ml-1 rounded-full hover:bg-muted p-0.5"
                  >
                    &times;
                  </button>
                </Badge>
              ))}
              
              {showAvailableOnly && (
                <Badge
                  variant="secondary"
                  className="flex items-center gap-1"
                >
                  Available now
                  <button
                    onClick={() => setShowAvailableOnly(false)}
                    className="ml-1 rounded-full hover:bg-muted p-0.5"
                  >
                    &times;
                  </button>
                </Badge>
              )}
            </div>
          )}
          
          {/* Results count */}
          <p className="text-sm text-muted-foreground mb-6">
            Showing {filteredMentors.length} {filteredMentors.length === 1 ? 'mentor' : 'mentors'}
          </p>
          
          {/* Mentors grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMentors.map((mentor) => (
              <MentorCard key={mentor.id} mentor={mentor} />
            ))}
          </div>
          
          {filteredMentors.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg">No mentors found matching your criteria.</p>
              <p className="text-muted-foreground mt-2">Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiscoverPage;
