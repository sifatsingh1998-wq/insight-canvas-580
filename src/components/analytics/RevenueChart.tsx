import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { date: "Jan 1", revenue: 2400 },
  { date: "Jan 5", revenue: 3200 },
  { date: "Jan 10", revenue: 2800 },
  { date: "Jan 15", revenue: 3900 },
  { date: "Jan 20", revenue: 4200 },
  { date: "Jan 25", revenue: 3800 },
  { date: "Jan 30", revenue: 4800 },
];

export const RevenueChart = () => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-6">Revenue Over Time</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="date" 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "var(--radius)",
            }}
            formatter={(value: number) => [`$${value}`, "Revenue"]}
          />
          <Line 
            type="monotone" 
            dataKey="revenue" 
            stroke="hsl(var(--success))" 
            strokeWidth={3}
            dot={{ fill: "hsl(var(--success))", r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};
