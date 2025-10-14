import { Button } from "@/components/ui/button";
import { BarChart3, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-primary/5 to-accent/5">
      <div className="text-center max-w-2xl px-6">
        <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-6">
          <BarChart3 className="h-16 w-16 text-primary" />
        </div>
        <h1 className="mb-6 text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Analytics Dashboard
        </h1>
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          Track your scheduling platform performance with comprehensive analytics,
          conversion metrics, and revenue insights.
        </p>
        <Link to="/analytics">
          <Button size="lg" className="gap-2 text-base px-8 py-6">
            View Dashboard
            <ArrowRight className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
