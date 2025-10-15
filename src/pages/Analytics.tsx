import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Download, TrendingUp, DollarSign, Users, Target } from "lucide-react";
import { KPICard } from "@/components/analytics/KPICard";
import { RevenueChart } from "@/components/analytics/RevenueChart";
import { BookingTrends } from "@/components/analytics/BookingTrends";
import { EngagementMetrics } from "@/components/analytics/EngagementMetrics";
import { PerformanceTable } from "@/components/analytics/PerformanceTable";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Analytics = () => {
  const [dateRange, setDateRange] = useState("30");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Analytics Overview</h1>
              <p className="text-sm text-muted-foreground mt-1">
                Track your booking page performance and engagement metrics
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Select value={dateRange} onValueChange={setDateRange}>
                <SelectTrigger className="w-[180px]">
                  <Calendar className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7">Last 7 days</SelectItem>
                  <SelectItem value="30">Last 30 days</SelectItem>
                  <SelectItem value="90">Last 90 days</SelectItem>
                  <SelectItem value="custom">Custom range</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Export Report
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* KPI Cards */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <KPICard
              title="Total Bookings"
              value="4,750"
              change={12.5}
              changeLabel="vs last period"
              icon={TrendingUp}
              trend="up"
            />
            <KPICard
              title="Total Revenue"
              value="$170,920"
              change={8.3}
              changeLabel="vs last period"
              icon={DollarSign}
              trend="up"
            />
            <KPICard
              title="Conversion Rate"
              value="38%"
              change={2.1}
              changeLabel="vs last period"
              icon={Users}
              trend="up"
            />
            <KPICard
              title="Completion Rate"
              value="95%"
              change={2.3}
              changeLabel="vs last period"
              icon={Target}
              trend="up"
            />
          </div>
        </section>

        {/* Revenue Analytics */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Revenue Analytics</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RevenueChart />
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-card rounded-lg border">
                  <p className="text-sm text-muted-foreground mb-2">Avg Booking Value</p>
                  <p className="text-3xl font-bold text-foreground">$36</p>
                  <p className="text-sm text-success mt-2">+5.2% increase</p>
                </div>
                <div className="p-6 bg-card rounded-lg border">
                  <p className="text-sm text-muted-foreground mb-2">Payment Success</p>
                  <p className="text-3xl font-bold text-foreground">95%</p>
                  <p className="text-sm text-success mt-2">+1.1% increase</p>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-success/10 to-success/5 rounded-lg border border-success/20">
                <h4 className="font-semibold mb-3 text-success">Top Performing Page</h4>
                <p className="text-2xl font-bold text-foreground mb-2">Professional Consultation</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-muted-foreground">Revenue: <span className="font-semibold text-success">$62,700</span></span>
                  <span className="text-muted-foreground">Conv: <span className="font-semibold text-success">36.7%</span></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Trends */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Booking Trends</h2>
          <BookingTrends />
        </section>

        {/* Engagement Metrics */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Engagement & Behavior Metrics</h2>
          <EngagementMetrics />
        </section>

        {/* Performance Table */}
        <section>
          <PerformanceTable />
        </section>
      </main>
    </div>
  );
};

export default Analytics;
