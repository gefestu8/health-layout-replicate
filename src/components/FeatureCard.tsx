import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: string;
  variant?: "default" | "highlighted";
}

const FeatureCard = ({ title, description, icon, variant = "default" }: FeatureCardProps) => {
  return (
    <Card className={`h-full ${variant === "highlighted" ? "border-secondary bg-accent" : ""}`}>
      <CardContent className="p-6">
        {icon && (
          <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
            <span className="text-2xl">{icon}</span>
          </div>
        )}
        <h3 className="font-semibold text-lg mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;