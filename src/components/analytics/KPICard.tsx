import { Card } from "@/components/ui/card";
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface KPICardProps {
  title: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon: LucideIcon;
  trend?: "up" | "down";
}

export const KPICard = ({ title, value, change, changeLabel, icon: Icon, trend }: KPICardProps) => {
  const isPositive = trend === "up";
  const TrendIcon = trend === "up" ? TrendingUp : TrendingDown;

  return (
    <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground mb-2">{title}</p>
          <p className="text-3xl font-bold text-foreground mb-3">{value}</p>
          {change !== undefined && (
            <div className="flex items-center gap-1">
              <TrendIcon className={cn(
                "h-4 w-4",
                isPositive ? "text-success" : "text-destructive"
              )} />
              <span className={cn(
                "text-sm font-semibold",
                isPositive ? "text-success" : "text-destructive"
              )}>
                {Math.abs(change)}%
              </span>
              {changeLabel && (
                <span className="text-sm text-muted-foreground ml-1">{changeLabel}</span>
              )}
            </div>
          )}
        </div>
        <div className="p-3 bg-primary/10 rounded-xl">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
    </Card>
  );
};
