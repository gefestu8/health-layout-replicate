import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  rating?: number;
  avatar?: string;
}

const Testimonial = ({ content, author, role, rating = 5, avatar }: TestimonialProps) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        {rating && (
          <div className="flex mb-4">
            {[...Array(rating)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-lg">★</span>
            ))}
          </div>
        )}
        <blockquote className="text-foreground mb-4 italic leading-relaxed">
          "{content}"
        </blockquote>
        <div className="flex items-center gap-3 border-l-4 border-primary pl-4">
          {avatar && (
            <Avatar className="w-12 h-12">
              <AvatarImage src={avatar} alt={author} />
              <AvatarFallback>{author.charAt(0)}</AvatarFallback>
            </Avatar>
          )}
          <div>
            <cite className="font-semibold text-foreground not-italic">{author}</cite>
            <p className="text-muted-foreground text-sm">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Testimonial;