"use client";

import { useState } from "react";
import { devices } from "@/data/mockData";
import { Device } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import StatusBadge from "@/components/ui/StatusBadge";

export default function DevicesPage() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Device | null>(null);
  const [filter, setFilter] = useState<"all" | "online" | "offline" | "warning">("all");

  const filtered = devices.filter((d) => {
    const matchSearch = d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.type.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || d.status === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Devices</h1>
        <p className="text-sm text-muted-foreground mt-1">{devices.length} registered devices</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <Input
          placeholder="Search by name or type..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-xs"
        />
        {(["all", "online", "warning", "offline"] as const).map((f) => (
          <Button
            key={f}
            variant={filter === f ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(f)}
            className="capitalize"
          >
            {f}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Device List */}
        <div className="lg:col-span-2 space-y-3">
          {filtered.map((device) => (
            <Card
              key={device.id}
              className={`cursor-pointer transition-all hover:shadow-sm ${selected?.id === device.id ? "ring-2 ring-primary" : ""}`}
              onClick={() => setSelected(device)}
            >
              <CardContent className="py-4 flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="font-medium">{device.name}</p>
                    <StatusBadge status={device.status} />
                  </div>
                  <p className="text-sm text-muted-foreground">{device.type} · {device.location}</p>
                  <p className="text-xs text-muted-foreground">Last seen: {device.lastSeen}</p>
                </div>
                <span className="text-xs text-muted-foreground">{device.firmwareVersion}</span>
              </CardContent>
            </Card>
          ))}
          {filtered.length === 0 && (
            <p className="text-muted-foreground text-sm text-center py-8">No devices match your filters.</p>
          )}
        </div>

        {/* Detail Panel */}
        {selected ? (
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Device details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-xl font-semibold">{selected.name}</p>
                <StatusBadge status={selected.status} />
              </div>
              <div className="space-y-2 text-sm">
                {[
                  ["Type", selected.type],
                  ["Location", selected.location],
                  ["Serial number", selected.serialNumber],
                  ["Firmware", selected.firmwareVersion],
                  ["Last seen", selected.lastSeen],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between">
                    <span className="text-muted-foreground">{label}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
              <Button className="w-full" size="sm">View measurements</Button>
            </CardContent>
          </Card>
        ) : (
          <Card className="flex items-center justify-center min-h-40">
            <p className="text-sm text-muted-foreground">Select a device to see details</p>
          </Card>
        )}
      </div>
    </div>
  );
}