"use client";

import { measurements, devices } from "@/data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StatusBadge from "@/components/ui/StatusBadge";

export default function MeasurementsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Measurements</h1>
        <p className="text-sm text-muted-foreground mt-1">All recent measurement readings</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Measurement log</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-xs text-muted-foreground uppercase tracking-wide">
                <th className="text-left pb-2 font-medium">Device</th>
                <th className="text-left pb-2 font-medium">Type</th>
                <th className="text-left pb-2 font-medium">Value</th>
                <th className="text-left pb-2 font-medium">Unit</th>
                <th className="text-left pb-2 font-medium">When</th>
                <th className="text-left pb-2 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {measurements.map((m) => {
                const device = devices.find((d) => d.id === m.deviceId);
                const status = m.status === "normal" ? "online" : m.status === "high" ? "warning" : "offline";
                return (
                  <tr key={m.id} className="border-b last:border-0">
                    <td className="py-3 font-medium">{m.deviceName}</td>
                    <td className="py-3 text-muted-foreground">{device?.type}</td>
                    <td className="py-3 font-mono">{m.value}</td>
                    <td className="py-3 text-muted-foreground">{m.unit}</td>
                    <td className="py-3 text-muted-foreground">{m.timestamp}</td>
                    <td className="py-3">
                      <StatusBadge status={status} label={m.status} />
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