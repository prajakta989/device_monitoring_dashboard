import { cn } from "@/lib/utils";

type Status = "online" | "offline" | "warning";

interface Props {
  status: Status;
  label?: string;
}

const config: Record<Status, { text: string; className: string }> = {
  online: { text: "Online", className: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  offline: { text: "Offline", className: "bg-red-50 text-red-700 border-red-200" },
  warning: { text: "Warning", className: "bg-amber-50 text-amber-700 border-amber-200" },
};

export default function StatusBadge({ status, label }: Props) {
  const { text, className } = config[status];
  return (
    <span className={cn("text-xs px-2 py-0.5 rounded-full border font-medium capitalize", className)}>
      {label ?? text}
    </span>
  );
}