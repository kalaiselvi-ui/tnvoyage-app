import { assets } from "../assets/assets";

export const blogs = [
  {
    id: "ooty-guide",
    slug: "ooty-travel-guide",
    title: "Complete Ooty Travel Guide",
    image: assets.ooty,
    excerpt: "Discover attractions, tips, budget and best seasons for Ooty.",
    category: "Travel Guide",
    readTime: "5 min read",
    travelInfo: [
      {
        type: "season",
        label: "Best Season",
        value: "Nov - Jun",
      },
      {
        type: "budget",
        label: "Budget",
        value: "₹5000 - ₹8000",
      },
      {
        type: "duration",
        label: "Duration",
        value: "2 Days",
      },
      {
        type: "location",
        label: "Location",
        value: "Tamil Nadu",
      },
    ],
  },
  {
    id: "budget-trip",
    slug: "budget-trip-under-5000",
    title: "Budget Trip Under ₹5000",
    image: assets.kodaikanal,
    excerpt: "Smart tips to travel on a low budget easily.",
    category: "Budget Tips",
    readTime: "4 min read",
    travelInfo: [
      {
        type: "season",
        label: "Best Season",
        value: "Nov - Jun",
      },
      {
        type: "budget",
        label: "Budget",
        value: "₹5000 - ₹8000",
      },
      {
        type: "duration",
        label: "Duration",
        value: "2 Days",
      },
      {
        type: "location",
        label: "Location",
        value: "Tamil Nadu",
      },
    ],
  },
  {
    id: "hidden-gems",
    slug: "hidden-gems-tamil-nadu",
    title: "Hidden Gems in Tamil Nadu",
    image: assets.waterfall,
    excerpt: "Lesser-known beautiful destinations to explore.",
    category: "Hidden Gems",
    readTime: "6 min read",
    travelInfo: [
      {
        type: "season",
        label: "Best Season",
        value: "Aug - Apr",
      },
      {
        type: "budget",
        label: "Budget",
        value: "₹3000 - ₹6000",
      },
      {
        type: "duration",
        label: "Duration",
        value: "2 Days",
      },
      {
        type: "location",
        label: "Location",
        value: "Tamil Nadu",
      },
    ],
  },
];
