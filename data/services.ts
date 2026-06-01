export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: "01",
    number: "01",
    title: "Curated Property Search",
    description:
      "We hand-select properties that align with your lifestyle, investment goals, and aesthetic preferences — eliminating the noise and surfacing only what truly matters.",
  },
  {
    id: "02",
    number: "02",
    title: "Elite Market Intelligence",
    description:
      "Backed by decades of proprietary data and a global network of insiders, our market analysis gives you the edge in any real estate negotiation.",
  },
  {
    id: "03",
    number: "03",
    title: "Concierge Transactions",
    description:
      "From offer to close, our dedicated transaction team manages every detail — legal, financial, and logistical — so you can focus on what matters most.",
  },
];

export const stats = [
  { value: 1240, suffix: "+", label: "Homes Sold" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 15, suffix: "yrs", label: "Years Experience" },
  { value: 2400, suffix: "+", label: "Properties Listed" },
];
