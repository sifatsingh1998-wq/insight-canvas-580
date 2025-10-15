import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

interface FunnelStage {
  name: string;
  value: number;
  percentage: number;
}

const stages: FunnelStage[] = [
  { name: "Landing Page Visits", value: 12500, percentage: 100 },
  { name: "Booking Page Views", value: 9500, percentage: 76 },
  { name: "Started Booking", value: 7200, percentage: 58 },
  { name: "Completed Booking", value: 5300, percentage: 42 },
  { name: "Successful Payment", value: 4750, percentage: 38 },
];

export const ConversionFunnel = () => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-6">Conversion Funnel</h3>
      <div className="space-y-1">
        {stages.map((stage, index) => {
          const nextStage = stages[index + 1];
          const conversionRate = nextStage ? ((nextStage.value / stage.value) * 100).toFixed(1) : null;
          const widthPercent = (stage.percentage / stages[0].percentage) * 100;
          
          return (
            <div key={stage.name} className="relative">
              {/* Funnel Stage */}
              <div 
                className="mx-auto transition-all duration-300 hover:scale-[1.02]"
                style={{ width: `${widthPercent}%` }}
              >
                <div className="bg-gradient-to-br from-primary/80 to-primary rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-primary-foreground text-sm">
                      {stage.name}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="text-xl font-bold text-primary-foreground">
                        {stage.value.toLocaleString()}
                      </span>
                      <span className="text-xs text-primary-foreground/80 bg-primary-foreground/20 px-2 py-1 rounded">
                        {stage.percentage}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Drop-off Indicator */}
              {conversionRate && (
                <div className="flex items-center justify-center gap-2 py-2">
                  <div className="flex-1 h-px bg-border" />
                  <div className="flex items-center gap-2 px-3 py-1 bg-muted rounded-full">
                    <ChevronRight className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs font-medium text-success">
                      {conversionRate}% convert
                    </span>
                  </div>
                  <div className="flex-1 h-px bg-border" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
};
