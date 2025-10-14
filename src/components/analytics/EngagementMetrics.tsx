import { Card } from "@/components/ui/card";
import { Clock, CheckCircle2, RefreshCw, Layout } from "lucide-react";

const metrics = [
  {
    label: "Avg Response Time",
    value: "2.5 hours",
    icon: Clock,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    label: "Confirmed Bookings",
    value: "87%",
    icon: CheckCircle2,
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    label: "Repeat Customers",
    value: "34%",
    icon: RefreshCw,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    label: "Top Template",
    value: "Professional",
    icon: Layout,
    color: "text-chart-4",
    bgColor: "bg-warning/10",
  },
];

export const EngagementMetrics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric) => (
        <Card key={metric.label} className="p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-2">{metric.label}</p>
              <p className="text-2xl font-bold text-foreground">{metric.value}</p>
            </div>
            <div className={`p-2.5 rounded-lg ${metric.bgColor}`}>
              <metric.icon className={`h-5 w-5 ${metric.color}`} />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
