export interface Property {
  id: number;
  name: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  image: string;
  tag: string;
}

export const properties: Property[] = [
  {
    id: 1,
    name: "The Meridian Penthouse",
    location: "Manhattan, New York",
    price: "$12,500,000",
    beds: 5,
    baths: 6,
    sqft: "8,200",
    image: "https://picsum.photos/seed/prop1/800/600",
    tag: "Featured",
  },
  {
    id: 2,
    name: "Casa Serena Villa",
    location: "Beverly Hills, California",
    price: "$8,900,000",
    beds: 6,
    baths: 7,
    sqft: "10,400",
    image: "https://picsum.photos/seed/prop2/800/600",
    tag: "New",
  },
  {
    id: 3,
    name: "Harbor View Estate",
    location: "Miami Beach, Florida",
    price: "$5,200,000",
    beds: 4,
    baths: 4,
    sqft: "5,800",
    image: "https://picsum.photos/seed/prop3/800/600",
    tag: "Exclusive",
  },
  {
    id: 4,
    name: "The Highland Retreat",
    location: "Aspen, Colorado",
    price: "$7,100,000",
    beds: 5,
    baths: 5,
    sqft: "7,300",
    image: "https://picsum.photos/seed/prop4/800/600",
    tag: "Luxury",
  },
  {
    id: 5,
    name: "Oceanfront Sanctuary",
    location: "Malibu, California",
    price: "$15,800,000",
    beds: 7,
    baths: 8,
    sqft: "12,100",
    image: "https://picsum.photos/seed/prop5/800/600",
    tag: "Prime",
  },
  {
    id: 6,
    name: "The Urban Loft Collection",
    location: "Chicago, Illinois",
    price: "$3,400,000",
    beds: 3,
    baths: 3,
    sqft: "4,100",
    image: "https://picsum.photos/seed/prop6/800/600",
    tag: "Trending",
  },
];
