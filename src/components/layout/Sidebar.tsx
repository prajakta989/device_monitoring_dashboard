"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  MonitorSmartphone,
  LineChart,
  Bell,
  User,
  Settings,
} from "lucide-react";

const nav = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Devices", href: "/devices", icon: MonitorSmartphone },
  { label: "Measurements", href: "/measurements", icon: LineChart },
  { label: "Alerts", href: "/alerts", icon: Bell },
  { label: "Profile", href: "/profile", icon: User },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-52 bg-background border-r flex flex-col py-4 shrink-0">
      <div className="px-4 pb-4 border-b mb-3">
        <p className="font-semibold text-sm">GNXT Platform</p>
        <p className="text-xs text-muted-foreground mt-0.5">Measurement Systems</p>
      </div>

      <nav className="flex-1 space-y-0.5 px-2">
        {nav.map(({ label, href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-colors",
              pathname === href
                ? "bg-muted font-medium text-foreground"
                : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
            )}
          >
            <Icon size={16} />
            {label}
          </Link>
        ))}
      </nav>

      <div className="px-2 pt-3 border-t mt-2">
        <Link
          href="/settings"
          className="flex items-center gap-2.5 px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-muted/60 hover:text-foreground transition-colors"
        >
          <Settings size={16} />
          Settings
        </Link>
      </div>
    </aside>
  );
}