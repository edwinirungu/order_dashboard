"use client";
import { ThemeProvider as ThemeProvider_ } from "next-theme";
import * as React from "react";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof ThemeProvider_>) {
  return <ThemeProvider_ {...props}>{children}</ThemeProvider_>;
}
