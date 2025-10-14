import { Card } from "@/components/ui/card";
import { CheckCircle2, RefreshCw, Layout, XCircle, Calendar, UserX, TrendingUp, Users } from "lucide-react";

const metrics = [
  {
    label: "Cancellation Rate",
    value: "8.5%",
    icon: XCircle,
    color: "text-destructive",
    bgColor: "bg-destructive/10",
    trend: "Low cancellations",
  },
  {
    label: "Confirmed Bookings",
    value: "87%",
    icon: CheckCircle2,
    color: "text-success",
    bgColor: "bg-success/10",
    trend: "Strong conversion",
  },
  {
    label: "Repeat Customers",
    value: "34%",
    icon: RefreshCw,
    color: "text-accent",
    bgColor: "bg-accent/10",
    trend: "Growing loyalty",
  },
  {
    label: "Top Template",
    value: "Professional",
    icon: Layout,
    color: "text-chart-4",
    bgColor: "bg-warning/10",
    trend: "Most popular",
  },
  {
    label: "No-Show Rate",
    value: "4.2%",
    icon: UserX,
    color: "text-muted-foreground",
    bgColor: "bg-muted",
    trend: "Below average",
  },
  {
    label: "Reschedule Rate",
    value: "12%",
    icon: TrendingUp,
    color: "text-chart-2",
    bgColor: "bg-accent/10",
    trend: "Moderate changes",
  },
  {
    label: "New Customers",
    value: "3,135",
    icon: Users,
    color: "text-success",
    bgColor: "bg-success/10",
    trend: "Strong growth",
  },
];

export const EngagementMetrics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric) => (
        <Card key={metric.label} className="p-5 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
              <p className="text-2xl font-bold text-foreground">{metric.value}</p>
            </div>
            <div className={`p-2.5 rounded-lg ${metric.bgColor}`}>
              <metric.icon className={`h-5 w-5 ${metric.color}`} />
            </div>
          </div>
          <p className="text-xs text-muted-foreground">{metric.trend}</p>
        </Card>
      ))}
    </div>
  );
};

