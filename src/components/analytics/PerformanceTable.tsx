import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, Download } from "lucide-react";
import { useState } from "react";

interface PageData {
  id: number;
  name: string;
  views: number;
  bookings: number;
  conversionRate: number;
  revenue: number;
}

const initialData: PageData[] = [
  { id: 1, name: "Professional Consultation", views: 3420, bookings: 1254, conversionRate: 36.7, revenue: 62700 },
  { id: 2, name: "Quick 30min Session", views: 2890, bookings: 986, conversionRate: 34.1, revenue: 29580 },
  { id: 3, name: "Executive Strategy Call", views: 1560, bookings: 421, conversionRate: 27.0, revenue: 42100 },
  { id: 4, name: "Team Workshop", views: 980, bookings: 187, conversionRate: 19.1, revenue: 18700 },
  { id: 5, name: "Discovery Call", views: 2340, bookings: 892, conversionRate: 38.1, revenue: 17840 },
];

type SortKey = keyof PageData;
type SortDirection = "asc" | "desc";

export const PerformanceTable = () => {
  const [data, setData] = useState<PageData[]>(initialData);
  const [sortKey, setSortKey] = useState<SortKey>("revenue");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  const handleSort = (key: SortKey) => {
    const newDirection = sortKey === key && sortDirection === "desc" ? "asc" : "desc";
    setSortDirection(newDirection);
    setSortKey(key);

    const sorted = [...data].sort((a, b) => {
      if (newDirection === "asc") {
        return a[key] > b[key] ? 1 : -1;
      }
      return a[key] < b[key] ? 1 : -1;
    });
    setData(sorted);
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Page Performance</h3>
        <Button variant="outline" size="sm" className="gap-2">
          <Download className="h-4 w-4" />
          Export
        </Button>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="font-semibold">
                <Button variant="ghost" size="sm" onClick={() => handleSort("name")} className="gap-1 px-0 hover:bg-transparent">
                  Page Name
                  <ArrowUpDown className="h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead className="font-semibold text-right">
                <Button variant="ghost" size="sm" onClick={() => handleSort("views")} className="gap-1 px-0 hover:bg-transparent ml-auto">
                  Views
                  <ArrowUpDown className="h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead className="font-semibold text-right">
                <Button variant="ghost" size="sm" onClick={() => handleSort("bookings")} className="gap-1 px-0 hover:bg-transparent ml-auto">
                  Bookings
                  <ArrowUpDown className="h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead className="font-semibold text-right">
                <Button variant="ghost" size="sm" onClick={() => handleSort("conversionRate")} className="gap-1 px-0 hover:bg-transparent ml-auto">
                  Conversion
                  <ArrowUpDown className="h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead className="font-semibold text-right">
                <Button variant="ghost" size="sm" onClick={() => handleSort("revenue")} className="gap-1 px-0 hover:bg-transparent ml-auto">
                  Revenue
                  <ArrowUpDown className="h-4 w-4" />
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((page) => (
              <TableRow key={page.id} className="hover:bg-muted/30">
                <TableCell className="font-medium">{page.name}</TableCell>
                <TableCell className="text-right">{page.views.toLocaleString()}</TableCell>
                <TableCell className="text-right font-medium">{page.bookings.toLocaleString()}</TableCell>
                <TableCell className="text-right">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-success/10 text-success">
                    {page.conversionRate}%
                  </span>
                </TableCell>
                <TableCell className="text-right font-semibold text-success">
                  ${page.revenue.toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};
