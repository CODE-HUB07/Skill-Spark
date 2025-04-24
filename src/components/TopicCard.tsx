
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TopicCardProps {
  topic: {
    id: string;
    title: string;
    icon: string;
    description: string;
    mentorCount: number;
    slug: string;
  };
}

const TopicCard = ({ topic }: TopicCardProps) => {
  return (
    <Link to={`/topics/${topic.slug}`}>
      <Card className="h-full overflow-hidden transition-all hover:shadow-md">
        <CardContent className="p-6">
          <div className="flex items-center space-x-3 mb-3">
            <div className="bg-teal-100 rounded-lg p-2 text-teal-700">
              {topic.icon}
            </div>
            <h3 className="font-semibold text-lg">{topic.title}</h3>
          </div>
          <p className="text-muted-foreground text-sm mb-4">{topic.description}</p>
        </CardContent>
        <CardFooter className="bg-muted/50 px-6 py-3">
          <Badge variant="outline" className="bg-white">
            {topic.mentorCount} mentors
          </Badge>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default TopicCard;
