"use client";

import { Alert } from "@/types";
import { cn } from "@/lib/utils";
import { AlertTriangle, Info, XCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AlertCardProps {
  alert: Alert;
  onAcknowledge?: (id: string) => void;
}

const severityConfig = {
  info: { icon: Info, color: "text-blue-600", bg: "bg-blue-50 border-blue-200" },
  warning: { icon: AlertTriangle, color: "text-amber-600", bg: "bg-amber-50 border-amber-200" },
  critical: { icon: XCircle, color: "text-red-600", bg: "bg-red-50 border-red-200" },
};

export default function AlertCard({ alert, onAcknowledge }: AlertCardProps) {
  const { icon: Icon, color, bg } = severityConfig[alert.severity];

  return (
    <div className={cn("rounded-lg border p-4 flex items-start gap-3", alert.acknowledged ? "opacity-50" : bg)}>
      <Icon size={18} className={cn(color, "mt-0.5 shrink-0")} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium">{alert.deviceName}</p>
          <span className={cn("text-xs capitalize px-2 py-0.5 rounded-full border font-medium", bg, color)}>
            {alert.severity}
          </span>
          {alert.acknowledged && (
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <CheckCircle size={12} /> acknowledged
            </span>
          )}
        </div>
        <p className="text-sm text-muted-foreground mt-0.5">{alert.message}</p>
        <p className="text-xs text-muted-foreground mt-1">{alert.timestamp}</p>
      </div>
      {!alert.acknowledged && onAcknowledge && (
        <Button variant="outline" size="sm" onClick={() => onAcknowledge(alert.id)}>
          Acknowledge
        </Button>
      )}
    </div>
  );
}