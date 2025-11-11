export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

export interface SocialLinks {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
}

export interface NavLink {
  href: string;
  label: string;
  hasDropdown?: boolean;
}
