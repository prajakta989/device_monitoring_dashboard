"use client";

import { useState } from "react";
import { alerts as initialAlerts } from "@/data/mockData";

export function useAlerts() {
  const [alerts, setAlerts] = useState(initialAlerts);

  const acknowledge = (id: string) => {
    setAlerts((prev) =>
      prev.map((a) => (a.id === id ? { ...a, acknowledged: true } : a))
    );
  };

  const unacknowledged = alerts.filter((a) => !a.acknowledged);
  const acknowledged = alerts.filter((a) => a.acknowledged);

  return { alerts, unacknowledged, acknowledged, acknowledge };
}