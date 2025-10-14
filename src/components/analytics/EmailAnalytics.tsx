import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const emailData = [
  { name: "Confirmation", value: 450, color: "hsl(var(--chart-1))" },
  { name: "Reminder", value: 320, color: "hsl(var(--chart-2))" },
  { name: "Cancellation", value: 180, color: "hsl(var(--chart-4))" },
  { name: "Rescheduled", value: 120, color: "hsl(var(--chart-3))" },
];

const stats = [
  { label: "Total Sent", value: "1,070" },
  { label: "Opened", value: "856" },
  { label: "Clicked", value: "428" },
];

export const EmailAnalytics = () => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-6">Email Analytics</h3>
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center p-4 bg-muted rounded-lg">
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <p className="text-sm font-medium text-muted-foreground mb-4">Breakdown by Type</p>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={emailData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {emailData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
