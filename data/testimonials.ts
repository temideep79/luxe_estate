export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Luxe Realty transformed the way I think about property investment. Their market insight and white-glove service helped me secure the perfect penthouse in under two weeks. Truly exceptional.",
    name: "Alexandra Monroe",
    role: "CEO, Monroe Capital Group",
    avatar: "https://picsum.photos/seed/avatar1/100/100",
  },
  {
    id: 2,
    quote:
      "From the first consultation to the closing day, every interaction felt tailored precisely to my needs. The team's depth of knowledge in luxury real estate is unmatched in the industry.",
    name: "Jonathan Reeves",
    role: "International Entrepreneur",
    avatar: "https://picsum.photos/seed/avatar2/100/100",
  },
  {
    id: 3,
    quote:
      "We sold our Malibu estate for 18% above asking price within 10 days of listing. Luxe Realty's network and negotiation expertise made all the difference. We couldn't be happier.",
    name: "Sophia & Daniel Laurent",
    role: "Private Clients",
    avatar: "https://picsum.photos/seed/avatar3/100/100",
  },
];
