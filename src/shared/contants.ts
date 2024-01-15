interface NavLinks {
  label: string;
  href: string;
}

export const mainNavLinks: NavLinks[] = [
  { href: "#home", label: "Home" },
  { href: "#start", label: "Get Started" },
  { href: "#products", label: "Resources" },
  { href: "#events", label: "Events" },
];

interface Stats {
  label: string;
  value: string;
}

export const statistics: Stats[] = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];