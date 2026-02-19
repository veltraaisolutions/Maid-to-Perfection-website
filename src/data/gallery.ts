export interface GalleryProject {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  children?: string[];
}

export const GALLERY_DATA: GalleryProject[] = [
  {
    id: 1,
    title: "Before & After Results",
    category: "Transformations",
    imageUrl: "/Img/Before_and_After/BAF1.jpeg",
    children: [
      "/Img/Before_and_After/BAF2.jpeg",
      "/Img/Before_and_After/BAF3.jpeg",
      "/Img/Before_and_After/BAF4.jpeg",
      "/Img/Before_and_After/BAF5.jpeg",
      "/Img/Before_and_After/BAF6.jpeg",
      "/Img/Before_and_After/BAF7.jpeg",
      "/Img/Before_and_After/BAF8.jpeg",
      "/Img/Before_and_After/BAF9.jpeg",
      "/Img/Before_and_After/BAF10.jpeg",
      "/Img/Before_and_After/BAF11.jpeg",
      "/Img/Before_and_After/BAF12.jpeg",
    ],
  },
  {
    id: 2,
    title: "Commercial Excellence",
    category: "Commercial",
    imageUrl: "/Img/Commercial/C1.jpeg",
    children: [
      "/Img/Commercial/C2.jpeg",
      "/Img/Commercial/C3.jpeg",
      "/Img/Commercial/C4.jpeg",
      "/Img/Commercial/C5.jpeg",
      "/Img/Commercial/C6.jpeg",
      "/Img/Commercial/C7.jpeg",
    ],
  },
  {
    id: 3,
    title: "Deep Cleaning Specialists",
    category: "Deep Clean",
    imageUrl: "/Img/Deep_cleaning/DC1.jpeg",
    children: [
      "/Img/Deep_cleaning/DC2.jpeg",
      "/Img/Deep_cleaning/DC3.jpeg",
      "/Img/Deep_cleaning/DC4.jpeg",
      "/Img/Deep_cleaning/DC5.jpeg",
      "/Img/Deep_cleaning/DC6.jpeg",
      "/Img/Deep_cleaning/DC7.jpeg",
      "/Img/Deep_cleaning/DC8.jpeg",
      "/Img/Deep_cleaning/DC9.jpeg",
      "/Img/Deep_cleaning/DC10.jpeg",
      "/Img/Deep_cleaning/DC11.jpeg",
      "/Img/Deep_cleaning/DC12.jpeg",
      "/Img/Deep_cleaning/DC13.jpeg",
      "/Img/Deep_cleaning/DC14.jpeg",
    ],
  },
  {
    id: 4,
    title: "Domestic Maintenance",
    category: "Domestic",
    imageUrl: "/Img/Domestic/D1.jpeg",
    children: [
      "/Img/Domestic/D2.jpeg",
      "/Img/Domestic/D3.jpeg",
      "/Img/Domestic/D4.jpeg",
      "/Img/Domestic/D5.jpeg",
      "/Img/Domestic/D6.jpeg",
      "/Img/Domestic/D7.jpeg",
      "/Img/Domestic/D8.jpeg",
    ],
  },
  {
    id: 5,
    title: "End of Tenancy",
    category: "EOT Cleaning",
    imageUrl: "/Img/End_Of_Tenancy_Cleaning/EOTC1.jpeg",
    children: [
      "/Img/End_Of_Tenancy_Cleaning/EOTC2.jpeg",
      "/Img/End_Of_Tenancy_Cleaning/EOTC3.jpeg",
      "/Img/End_Of_Tenancy_Cleaning/EOTC4.jpeg",
      "/Img/End_Of_Tenancy_Cleaning/EOTC5.jpeg",
      "/Img/End_Of_Tenancy_Cleaning/EOTC6.jpeg",
      "/Img/End_Of_Tenancy_Cleaning/EOTC7.jpeg",
      "/Img/End_Of_Tenancy_Cleaning/EOTC8.jpeg",
      "/Img/End_Of_Tenancy_Cleaning/EOTC9.jpeg",
      "/Img/End_Of_Tenancy_Cleaning/EOTC10.jpeg",
      "/Img/End_Of_Tenancy_Cleaning/EOTC11.jpeg",
      "/Img/End_Of_Tenancy_Cleaning/EOTC12.jpeg",
      "/Img/End_Of_Tenancy_Cleaning/EOTC13.jpeg",
    ],
  },
];

export const GALLERY_STATS = {
  projectCount: "2,000+",
  rating: "5.0",
  reviewCount: "450+",
};
