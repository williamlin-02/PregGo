"use client"; // Mark this file as a client component

import Link from "next/link";
import Image from "next/image"; // Import Image for optimized image loading
import { usePathname } from "next/navigation"; // Import usePathname
import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname(); // Get the current path

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/search" ? "font-medium text-primary" : "text-muted-foreground"
        )}
      >
        <Image
          src="/preggoLogo.png" // Path to your logo in the public folder
          alt="Home Icon"
          width={80}
          height={80}
          className="mr-2" // Add spacing between the icon and text
        />
      </Link>
      <Link
        href="/search"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/search" ? "font-medium text-primary" : "text-muted-foreground"
        )}
      >
        Find a Healthcare Provider
      </Link>
      <Link
        href="/patient_signin"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/patient_signin" ? "font-medium text-primary" : "text-muted-foreground"
        )}
      >
        Patient Login
      </Link>
      <Link
        href="/provider_signin"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/provider_signin" ? "font-medium text-primary" : "text-muted-foreground"
        )}
      >
        Provider Login
      </Link>
      <Link
        href="/my_appointments"
        className={cn(
          "text-sm transition-colors hover:text-primary",
          pathname === "/my_appointments" ? "font-medium text-primary" : "text-muted-foreground"
        )}
      >
        My Appointments
      </Link>
      <Link
        href="/learn_more"
        className={cn(
          "text-sm transition-colors hover:text-primary",
          pathname === "/learn_more" ? "font-medium text-primary" : "text-muted-foreground"
        )}
      >
        Learn More
      </Link>
    </nav>
  );
}