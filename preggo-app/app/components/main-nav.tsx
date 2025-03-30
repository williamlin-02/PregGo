import Link from "next/link";

import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/search"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Find a Healthcare Provider
      </Link>
      <Link
        href="/patient_signin"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Patient Login
      </Link>
      <Link
        href="/provider_signin"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Provider Login
      </Link>
      <Link
        href="/my_appointments"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        My Appointments
      </Link>
      <Link
        href="/learn_more"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Learn More
      </Link>
    </nav>
  );
}
