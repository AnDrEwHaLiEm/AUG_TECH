import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function getIconComponent(iconName: string) {
  // Helper function to dynamically import Lucide icons
  return iconName;
}
