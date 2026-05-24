"use client";

import { stats, devices, measurements, chartData } from "@/data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import StatusBadge from "@/components/ui/StatusBadge";
import MeasurementChart from "@/components/ui/Measurementchart";

export default function DashboardPage() {
  const statCards = [
    { label: "Total Devices", value: stats.totalDevices, sub: "+3 this week", subColor: "text-emerald-600" },
    { label: "Online", value: stats.onlineDevices, sub: "79% uptime", subColor: "text-muted-foreground" },
    { label: "Active Alerts", value: stats.activeAlerts, sub: "2 critical", subColor: "text-red-500" },
    { label: "Avg Reading", value: stats.avgReading, sub: "Normal range", subColor: "text-muted-foreground" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">Last updated: just now</p>
        </div>
        <Badge variant="outline" className="text-emerald-600 border-emerald-200 bg-emerald-50">
          System operational
        </Badge>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statCards.map((s) => (
          <Card key={s.label}>
            <CardContent className="pt-4">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">{s.label}</p>
              <p className="text-3xl font-semibold mt-1">{s.value}</p>
              <p className={`text-xs mt-1 ${s.subColor}`}>{s.sub}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Chart + Device Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Measurement readings — last 7 days</CardTitle>
          </CardHeader>
          <CardContent>
            <MeasurementChart data={chartData} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Device status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {devices.slice(0, 5).map((d) => (
              <div key={d.id} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{d.name}</p>
                  <p className="text-xs text-muted-foreground">{d.type}</p>
                </div>
                <StatusBadge status={d.status} />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Recent Measurements Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Recent measurements</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-xs text-muted-foreground uppercase tracking-wide">
                <th className="text-left pb-2 font-medium">Device</th>
                <th className="text-left pb-2 font-medium">Type</th>
                <th className="text-left pb-2 font-medium">When</th>
                <th className="text-left pb-2 font-medium">Value</th>
                <th className="text-left pb-2 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {measurements.map((m) => {
                const device = devices.find((d) => d.id === m.deviceId);
                return (
                  <tr key={m.id} className="border-b last:border-0">
                    <td className="py-2 font-medium">{m.deviceName}</td>
                    <td className="py-2 text-muted-foreground">{device?.type}</td>
                    <td className="py-2 text-muted-foreground">{m.timestamp}</td>
                    <td className="py-2">{m.value} {m.unit}</td>
                    <td className="py-2">
                      <StatusBadge status={m.status === "normal" ? "online" : m.status === "high" ? "warning" : "offline"} label={m.status} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}