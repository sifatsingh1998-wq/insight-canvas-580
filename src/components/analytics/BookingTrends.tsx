import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { date: "Mon", bookings: 45 },
  { date: "Tue", bookings: 52 },
  { date: "Wed", bookings: 61 },
  { date: "Thu", bookings: 58 },
  { date: "Fri", bookings: 48 },
  { date: "Sat", bookings: 35 },
  { date: "Sun", bookings: 28 },
];

export const BookingTrends = () => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-6">Booking Trends</h3>
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
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "var(--radius)",
            }}
            formatter={(value: number) => [value, "Bookings"]}
          />
          <Line 
            type="monotone" 
            dataKey="bookings" 
            stroke="hsl(var(--primary))" 
            strokeWidth={3}
            dot={{ fill: "hsl(var(--primary))", r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};
