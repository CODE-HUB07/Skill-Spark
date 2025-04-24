
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface MentorCardProps {
  mentor: {
    id: string;
    name: string;
    avatar?: string;
    title: string;
    rating: number;
    sessionCount: number;
    hourlyRate?: number;
    skills: string[];
    availableNow?: boolean;
  };
}

const MentorCard = ({ mentor }: MentorCardProps) => {
  const initials = mentor.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={mentor.avatar || "/placeholder.svg"} alt={mentor.name} />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg font-semibold">{mentor.name}</CardTitle>
              <CardDescription>{mentor.title}</CardDescription>
            </div>
          </div>
          {mentor.availableNow && (
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              Available now
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="flex items-center space-x-1 mb-4">
          <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
          <span className="font-medium">{mentor.rating.toFixed(1)}</span>
          <span className="text-muted-foreground">({mentor.sessionCount} sessions)</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {mentor.skills.map((skill) => (
            <Badge variant="secondary" key={skill}>
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-3 border-t">
        {mentor.hourlyRate ? (
          <span className="text-sm font-medium">${mentor.hourlyRate}/hour</span>
        ) : (
          <span className="text-sm font-medium">Free sessions</span>
        )}
        <Button size="sm" className="bg-teal-600 hover:bg-teal-700">Book Session</Button>
      </CardFooter>
    </Card>
  );
};

export default MentorCard;
