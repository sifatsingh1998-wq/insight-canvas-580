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
      <div className="space-y-4">
        {stages.map((stage, index) => {
          const nextStage = stages[index + 1];
          const dropOff = nextStage ? ((stage.value - nextStage.value) / stage.value * 100).toFixed(1) : null;
          
          return (
            <div key={stage.name}>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm">{stage.name}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-bold">{stage.value.toLocaleString()}</span>
                      <span className="text-sm text-muted-foreground">({stage.percentage}%)</span>
                    </div>
                  </div>
                  <div className="h-12 bg-gradient-to-r from-primary to-accent rounded-lg relative overflow-hidden"
                       style={{ width: `${stage.percentage}%` }}>
                    <div className="absolute inset-0 bg-white/10" />
                  </div>
                </div>
              </div>
              {dropOff && (
                <div className="flex items-center justify-end gap-2 mt-2 text-sm">
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  <span className="text-destructive font-medium">{dropOff}% drop-off</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
};
