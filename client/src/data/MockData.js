import { assets } from "../assets/assets";

export const destinations = [
  {
    id: 1,
    name: "Ooty",
    image: assets.ooty,
    category: "Hill Stations",
    location: "Tamil Nadu",
    rating: 4.8,
    shortDescription:
      "Beautiful hill station famous for tea plantations and cool weather.",
  },
  {
    id: 2,
    name: "Kanyakumari",
    image: assets.kanyakumari,
    category: "Beaches",
    location: "Tamil Nadu",
    rating: 4.7,
    shortDescription: "Spectacular sunrise and sunset views by the sea.",
  },
  {
    id: 3,
    name: "Chennai",
    image: assets.chennai_maha,
    category: "Temples",
    location: "Tamil Nadu",
    rating: 4.7,
    shortDescription: "Ancient temple city rich in culture and history.",
  },

  {
    id: 4,
    name: "Coutralam",
    image: assets.coutralam,
    category: "Water Falls",
    location: "Tamil Nadu",
    rating: 4.7,
    shortDescription: "Refreshing waterfalls surrounded by lush greenery.",
  },
  {
    id: 5,
    name: "Tanjavur",
    image: assets.tanjavur,
    category: "Temples",
    location: "Tamil Nadu",
    rating: 4.7,
    shortDescription: "Home to the iconic Brihadeeswarar Temple masterpiece.",
  },
  {
    id: 6,
    name: "Kodaikanal",
    image: assets.kodaikanal,
    category: "Hill Stations",
    location: "Tamil Nadu",
    rating: 4.7,
    shortDescription: "Spectacular sunrise and sunset views by the sea.",
  },
  {
    id: 7,
    name: "Madurai",
    image: assets.madurai,
    category: "Temples",
    location: "Tamil Nadu",
    rating: 4.7,
    shortDescription: "Ancient temple city rich in culture and history.",
  },
  {
    id: 8,
    name: "Chennai",
    image: assets.chennai,
    category: "Beaches",
    location: "Tamil Nadu",
    rating: 4.7,
    shortDescription:
      "Marina Beach is the most famous beach in Chennai. Stretching approximately 6 km along the Bay of Bengal.",
  },
];

export const categories = [
  {
    id: "hill-stations",
    name: "Hill Stations",
    emoji: "🏔️",
    description: "Cool escapes & mountain views",
    color: "#38BDF8",
    slug: "hill-stations",
    image: assets.hills,
    placeCount: 12,
    featured: true,
  },
  {
    id: "waterfalls",
    name: "Waterfalls",
    emoji: "🌊",
    description: "Hidden cascades & scenic drops",
    color: "#22C55E",
    slug: "waterfalls",
    image: assets.waterfall,
    placeCount: 8,
    featured: false,
  },
  {
    id: "temples",
    name: "Temples",
    emoji: "🏛️",
    description: "Spiritual & heritage sites",
    color: "#F97316",
    slug: "temples",
    image: assets.temple,
    placeCount: 15,
    featured: false,
  },
  {
    id: "beaches",
    name: "Beaches",
    emoji: "🏖️",
    description: "Sun, sand & coastal vibes",
    color: "#0EA5E9",
    slug: "beaches",
    image: assets.beach,
    placeCount: 10,
    featured: true,
  },
  {
    id: "nature",
    name: "Nature",
    emoji: "🌲",
    description: "Forests, wildlife & green escapes",
    color: "#16A34A",
    slug: "nature",
    image: assets.nature,
    placeCount: 18,
    featured: false,
  },
  {
    id: "food-trails",
    name: "Food Trails",
    emoji: "🍜",
    description: "Local food & street bites",
    color: "#EF4444",
    slug: "food-trails",
    image: assets.food,
    placeCount: 14,
    featured: true,
  },
];

export const trending = [
  {
    id: "coutralam-falls",
    name: "Coutralam Falls",
    image: assets.coutralam,
    reason: "Water flow is strongest now 🌊",
    trend: "🔥 Viral",
    views: "30k+ views",
    rating: 4.9,
    slug: "coutralam-falls",
  },
  {
    id: "ooty-hills",
    name: "Ooty Hills",
    image: assets.ooty,
    reason: "Best monsoon views right now 🌧️",
    trend: "🔥 Hot",
    views: "18k+ this week",
    rating: 4.6,
    slug: "ooty-hills",
  },
  {
    id: "varkala-beach",
    name: "Varkala Beach",
    image: assets.varkala,
    reason: "Sunset season is peaking 🌅",
    trend: "📈 Rising",
    views: "12k+ this week",
    rating: 4.5,
    slug: "varkala-beach",
  },
  {
    id: "hogenakkal",
    name: "Hogenakkal Falls",
    image: assets.hogenakkal,
    reason: "Water flow is strongest now 🌊",
    trend: "🔥 Viral",
    views: "22k+ views",
    rating: 4.7,
    slug: "hogenakkal-falls",
  },
];

export const categoryPills = [
  "All",
  "Guides",
  "Budget",
  "Hidden Gems",
  "Travel Tips",
];

export const blogData = [
  {
    id: "ooty-guide",
    slug: "ooty-travel-guide",
    image: assets.ooty,
    title: "Complete Ooty Travel Guide for First-Time Visitors",
    excerpt:
      "Discover the best attractions, travel tips, budget estimates, and ideal seasons for exploring Ooty.",
    category: "Travel Guide",
    readTime: "5 min read",
    travelInfo: [
      {
        label: "Best Season",
        content: "Oct - Feb",
      },
      {
        label: "Budget",
        content: "₹8000 - ₹10000",
      },
      {
        label: "Duration",
        content: "2 Days",
      },
      {
        label: "Location",
        content: "Tamil Nadu",
      },
    ],
  },
  {
    id: "budget-trip",
    slug: "budget-trip-under-5000",
    image: assets.kodaikanal,
    title: "How to Plan a Budget Trip Under ₹5000",
    excerpt:
      "Smart travel planning tips, affordable stays, and transport options to help you travel on a budget.",
    category: "Budget Tips",
    readTime: "4 min read",
    travelInfo: [
      {
        label: "Best Season",
        content: "Dec - Mar",
      },
      {
        label: "Budget",
        content: "₹5000 - ₹10000",
      },
      {
        label: "Duration",
        content: "2 Days",
      },
      {
        label: "Location",
        content: "Tamil Nadu",
      },
    ],
  },
  {
    id: "hidden-gems",
    slug: "hidden-gems-tamil-nadu",
    image: assets.waterfall,
    title: "5 Hidden Gems in Tamil Nadu You Should Visit",
    excerpt:
      "Escape the crowds and discover lesser-known destinations packed with natural beauty and charm.",
    category: "Hidden Gems",
    readTime: "6 min read",
    travelInfo: [
      {
        label: "Best Season",
        content: "Jan - Apr",
      },
      {
        label: "Budget",
        content: "₹2000 - ₹6000",
      },
      {
        label: "Duration",
        content: "2 Days",
      },
      {
        label: "Location",
        content: "Tamil Nadu",
      },
    ],
  },
];
