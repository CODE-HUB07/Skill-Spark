
import TopicCard from "@/components/TopicCard";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search } from "lucide-react";

// Mock topics data
const allTopics = [
  {
    id: "1",
    title: "Programming",
    icon: "💻",
    description: "Learn coding languages, software development, and system architecture.",
    mentorCount: 156,
    slug: "programming"
  },
  {
    id: "2",
    title: "UI/UX Design",
    icon: "🎨",
    description: "Master user interface design, user experience principles, and prototyping.",
    mentorCount: 89,
    slug: "ui-ux-design"
  },
  {
    id: "3",
    title: "Digital Marketing",
    icon: "📊",
    description: "Explore SEO, social media marketing, content creation, and analytics.",
    mentorCount: 72,
    slug: "digital-marketing"
  },
  {
    id: "4",
    title: "Business Strategy",
    icon: "💼",
    description: "Learn business planning, market analysis, and entrepreneurship.",
    mentorCount: 103,
    slug: "business-strategy"
  },
  {
    id: "5",
    title: "Personal Development",
    icon: "🚀",
    description: "Grow your soft skills, communication abilities, and leadership qualities.",
    mentorCount: 67,
    slug: "personal-development"
  },
  {
    id: "6",
    title: "Language Learning",
    icon: "🗣️",
    description: "Master new languages with conversation practice and cultural insights.",
    mentorCount: 45,
    slug: "language-learning"
  },
  {
    id: "7",
    title: "Data Science",
    icon: "📈",
    description: "Learn data analysis, machine learning, and statistical modeling.",
    mentorCount: 112,
    slug: "data-science"
  },
  {
    id: "8",
    title: "Product Management",
    icon: "🛠️",
    description: "Master product development, roadmapping, and feature prioritization.",
    mentorCount: 78,
    slug: "product-management"
  },
  {
    id: "9",
    title: "Graphic Design",
    icon: "✏️",
    description: "Learn visual design principles, branding, and digital illustration.",
    mentorCount: 84,
    slug: "graphic-design"
  },
  {
    id: "10",
    title: "Finance",
    icon: "💰",
    description: "Understand personal finance, investing, and financial planning.",
    mentorCount: 65,
    slug: "finance"
  },
  {
    id: "11",
    title: "Career Development",
    icon: "🧠",
    description: "Get guidance on resume building, interview prep, and career transitions.",
    mentorCount: 94,
    slug: "career-development"
  },
  {
    id: "12",
    title: "Music",
    icon: "🎵",
    description: "Learn instruments, music theory, production, and composition.",
    mentorCount: 41,
    slug: "music"
  }
];

// Topic categories for filtering
const categories = [
  { id: "all", name: "All Topics" },
  { id: "tech", name: "Technology" },
  { id: "creative", name: "Creative" },
  { id: "business", name: "Business" },
  { id: "personal", name: "Personal Growth" }
];

// Map topics to categories
const topicCategories = {
  tech: ["1", "7", "8"],
  creative: ["2", "9", "12"],
  business: ["3", "4", "10"],
  personal: ["5", "6", "11"]
};

const TopicsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter topics based on search query and active category
  const filteredTopics = allTopics.filter((topic) => {
    const matchesSearch = topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         topic.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === "all" || 
                           (topicCategories[activeCategory as keyof typeof topicCategories]?.includes(topic.id));
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">Explore Topics</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Browse our collection of topics to find mentors who can help you master new skills and advance your career.
        </p>
      </div>
      
      <div className="flex flex-col items-center mb-8">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search topics..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeCategory === category.id
                ? "bg-teal-600 text-white"
                : "bg-muted hover:bg-muted/80"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTopics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </div>
      
      {filteredTopics.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg">No topics found matching "{searchQuery}"</p>
          <p className="text-muted-foreground mt-2">Try a different search term or category.</p>
        </div>
      )}
    </div>
  );
};

export default TopicsPage;
