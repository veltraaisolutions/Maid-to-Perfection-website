export interface AboutData {
  ownerName: string;
  role: string;
  bio: string;
  footerBio: string;
  stats: { label: string; value: string }[];
  points: string[];
  imageUrl: string;
}

export const ABOUT_DATA: AboutData = {
  ownerName: "Maid to Perfection",
  role: "Professional Cleaning Services",
  bio: `With over 15 years of hands-on industry experience and 5 successful years in business, we are proud to deliver reliable, high-quality cleaning services across the Surrey area and we’re expanding every day.

Our dedicated team of fully trained staff members are committed to providing exceptional results with attention to detail, professionalism, and care. We understand that every space is different, which is why we tailor our services to meet your specific needs.`,

  footerBio: `Whether you require a one-off clean or would prefer a regular scheduled service, we offer flexible slots to suit your lifestyle or business operations.

We take pride in creating spotless, fresh, and welcoming environments for our clients. Your satisfaction is our priority, and no job is too big or too small.

Professional. Reliable. Thorough.

Let us take care of the cleaning, so you can focus on what matters most.`,

  stats: [
    { label: "Years Exp.", value: "15+" },
    { label: "In Business", value: "5" },
    { label: "Staff Members", value: "16" },
  ],
  points: [
    "After-build cleans",
    "End of Tenancy (EOT) cleaning",
    "Move-in cleaning",
    "Commercial cleaning",
    "Domestic cleaning",
    "Hoarder & organisation cleans",
    "Deep cleaning services",
    "Catering to all your home and business cleaning needs",
  ],
  imageUrl: "/Img/Kayleigh-Anne.jpeg",
};
