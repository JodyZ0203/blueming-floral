import { FcLike, FcApproval, FcInTransit } from "react-icons/fc";

export const NAV_ITEMS = [
  {
    label: 'Flowers',
    href: '/flowers'
  },
  {
    label: 'Subscription',
    href: '/subscriptions'
  }, 
]

export const CAROUSEL_ITEMS = [
  {
    img: "carousel1.jpg",
    label: "Deluxe Bouquets",
    description: "Flowers are a gift to this earth. Every flower is a soul blossoming in nature.",
  },
  {
    img: "carousel2.png",
    label: "Fresh Seasonal Flowers",
    description: "Impress anyone with the newly designed bouquets",
  },
  {
    img: "carousel3.jpg",
    label: "More choices More happiness",
    description:
      "More you and your special ones.",
  },
  {
    img: "carousel4.jpg",
    label: "Best Price In the Area",
    description: "",
  },
];

export const FEATURE_ITEMS = [
  {
    label: "With Heart",
    icon: FcLike,
    description: "Designed and packaged with love and passion."
  },
  {
    label: "Quality Guaranteed",
    icon: FcApproval,
    description: "Highest quality and the best customer service."
  },
  {
    label: "Instant Delivery",
    icon: FcInTransit,
    description: "Same day delivery upon request. Normally 2-3 days."
  }]