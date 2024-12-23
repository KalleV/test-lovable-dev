import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, ShieldCheck } from "lucide-react";

export default function Dashboard() {
  const stats = [
    { title: "Total Tenants", value: "12", icon: Building2 },
    { title: "Total Users", value: "48", icon: Users },
    { title: "Active Roles", value: "5", icon: ShieldCheck },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}