import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  rating?: number;
}

const Testimonial = ({ content, author, role, rating = 5 }: TestimonialProps) => {
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
        <div className="border-l-4 border-primary pl-4">
          <cite className="font-semibold text-foreground not-italic">{author}</cite>
          <p className="text-muted-foreground text-sm">{role}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Testimonial;