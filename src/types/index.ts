export type DeviceStatus = "online" | "offline" | "warning";
export type DeviceType = "Electrical Safety" | "e-Mobility" | "Medical" | "Industrial";
export type MeasurementStatus = "normal" | "high" | "critical";
export type AlertSeverity = "info" | "warning" | "critical";

export interface Device {
  id: string;
  name: string;
  type: DeviceType;
  status: DeviceStatus;
  location: string;
  lastSeen: string;
  firmwareVersion: string;
  serialNumber: string;
  ipAddress: string;
  installedAt: string;
}

export interface Measurement {
  id: string;
  deviceId: string;
  deviceName: string;
  value: number;
  unit: string;
  timestamp: string;
  status: MeasurementStatus;
}

export interface Alert {
  id: string;
  deviceId: string;
  deviceName: string;
  severity: AlertSeverity;
  message: string;
  timestamp: string;
  acknowledged: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarInitials: string;
}

export interface ChartDataPoint {
  day: string;
  readings: number;
}

export interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
}