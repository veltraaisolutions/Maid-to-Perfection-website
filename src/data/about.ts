export interface AboutData {
  ownerName: string;
  role: string;
  bio: string;
  stats: { label: string; value: string }[];
  points: string[];
  imageUrl: string;
}

export const ABOUT_DATA: AboutData = {
  ownerName: "Maid to Perfection",
  role: "Professional Cleaning Services",
  bio: "With over 15 years of hands-on industry experience and 5 successful years in business, we are proud to deliver reliable, high-quality cleaning services across the Surrey area. Our dedicated team is committed to providing exceptional results with attention to detail, professionalism, and care. We understand that every space is different, which is why we tailor our services to meet your specific needs.",
  stats: [
    { label: "Years Exp.", value: "15+" },
    { label: "In Business", value: "5" },
    { label: "Staff Members", value: "16" },
  ],
  points: [
    "After-build & EOT Cleans",
    "Commercial & Domestic",
    "Hoarder & Organisation",
    "Fully Trained Staff",
    "Surrey Based & Expanding",
    "Satisfaction Guaranteed",
  ],
  imageUrl: "/Img/Kayleigh-Anne.jpeg",
};
