import { Device, Measurement, Alert, User, ChartDataPoint } from "@/types";

export const currentUser: User = {
  id: "u1",
  name: "Arjun Mehta",
  email: "arjun.mehta@APEX.de",
  role: "Platform Admin",
  avatarInitials: "AM",
};

export const devices: Device[] = [
  { id: "d1", name: "APEX-A100", type: "Electrical Safety", status: "online", location: "Hall A - Bay 3", lastSeen: "2 min ago", firmwareVersion: "v2.4.1", serialNumber: "SN-84920-A", ipAddress: "192.168.1.101", installedAt: "2024-03-15" },
  { id: "d2", name: "APEX-B240", type: "e-Mobility", status: "online", location: "Charging Station 2", lastSeen: "5 min ago", firmwareVersion: "v2.3.7", serialNumber: "SN-72011-B", ipAddress: "192.168.1.102", installedAt: "2024-04-02" },
  { id: "d3", name: "APEX-M301", type: "Medical", status: "warning", location: "Lab Room 4", lastSeen: "12 min ago", firmwareVersion: "v2.2.0", serialNumber: "SN-60534-M", ipAddress: "192.168.1.103", installedAt: "2024-01-20" },
  { id: "d4", name: "APEX-C112", type: "Industrial", status: "offline", location: "Workshop B", lastSeen: "3 hrs ago", firmwareVersion: "v2.1.5", serialNumber: "SN-55801-C", ipAddress: "192.168.1.104", installedAt: "2023-11-10" },
  { id: "d5", name: "APEX-A205", type: "Electrical Safety", status: "online", location: "Hall B - Bay 1", lastSeen: "1 min ago", firmwareVersion: "v2.4.1", serialNumber: "SN-91022-A", ipAddress: "192.168.1.105", installedAt: "2024-05-01" },
  { id: "d6", name: "APEX-E400", type: "e-Mobility", status: "online", location: "EV Zone 3", lastSeen: "just now", firmwareVersion: "v2.4.0", serialNumber: "SN-43820-E", ipAddress: "192.168.1.106", installedAt: "2024-06-18" },
];

export const measurements: Measurement[] = [
  { id: "m1", deviceId: "d1", deviceName: "APEX-A100", value: 4.9, unit: "kV", timestamp: "2 min ago", status: "normal" },
  { id: "m2", deviceId: "d2", deviceName: "APEX-B240", value: 3.2, unit: "kV", timestamp: "5 min ago", status: "normal" },
  { id: "m3", deviceId: "d3", deviceName: "APEX-M301", value: 7.1, unit: "kV", timestamp: "12 min ago", status: "high" },
  { id: "m4", deviceId: "d5", deviceName: "APEX-A205", value: 4.5, unit: "kV", timestamp: "1 min ago", status: "normal" },
  { id: "m5", deviceId: "d6", deviceName: "APEX-E400", value: 2.8, unit: "kV", timestamp: "just now", status: "normal" },
  { id: "m6", deviceId: "d1", deviceName: "APEX-A100", value: 5.3, unit: "kV", timestamp: "22 min ago", status: "normal" },
];

export const alerts: Alert[] = [
  { id: "a1", deviceId: "d3", deviceName: "APEX-M301", severity: "warning", message: "Reading exceeded safe threshold: 7.1 kV (limit: 6.5 kV)", timestamp: "12 min ago", acknowledged: false },
  { id: "a2", deviceId: "d4", deviceName: "APEX-C112", severity: "critical", message: "Device went offline unexpectedly. Last ping: 3 hrs ago", timestamp: "3 hrs ago", acknowledged: false },
  { id: "a3", deviceId: "d2", deviceName: "APEX-B240", severity: "info", message: "Firmware update available: v2.4.0 → v2.4.1", timestamp: "1 day ago", acknowledged: true },
];

export const chartData: ChartDataPoint[] = [
  { day: "Mon", readings: 38 },
  { day: "Tue", readings: 52 },
  { day: "Wed", readings: 31 },
  { day: "Thu", readings: 67 },
  { day: "Fri", readings: 48 },
  { day: "Sat", readings: 35 },
  { day: "Sun", readings: 58 },
];

export const stats = {
  totalDevices: 24,
  onlineDevices: 19,
  activeAlerts: 3,
  avgReading: "4.7 kV",
};