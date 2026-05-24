"use client";

// import { useAlerts } from "@/hooks/useAlerts";
import { useAlerts } from "@/app/hooks/useAlerts";
import AlertCard from "@/components/ui/AlertCard";
import PageHeader from "@/components/shared/PageHeader";
import EmptyState from "@/components/shared/EmptyState";
import { Bell } from "lucide-react";

export default function AlertsPage() {
  const { unacknowledged, acknowledged, acknowledge } = useAlerts();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Alerts"
        subtitle={`${unacknowledged.length} unacknowledged alert${unacknowledged.length !== 1 ? "s" : ""}`}
      />

      <section className="space-y-3">
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Active</h2>
        {unacknowledged.length === 0 ? (
          <EmptyState
            icon={Bell}
            title="No active alerts"
            description="All devices are operating normally."
          />
        ) : (
          unacknowledged.map((alert) => (
            <AlertCard key={alert.id} alert={alert} onAcknowledge={acknowledge} />
          ))
        )}
      </section>

      {acknowledged.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Acknowledged</h2>
          {acknowledged.map((alert) => (
            <AlertCard key={alert.id} alert={alert} />
          ))}
        </section>
      )}
    </div>
  );
}