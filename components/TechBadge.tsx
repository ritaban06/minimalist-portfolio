interface TechBadgeProps {
  label: string
  icon?: React.ComponentType<{ className?: string }>
}

export function TechBadge({ label, icon: Icon }: TechBadgeProps) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 h-6 bg-layout-secondary-contrast rounded-full text-xs text-primary font-medium">
      {Icon && <Icon className="shrink-0 size-3.5" />}
      {label}
    </span>
  )
}
