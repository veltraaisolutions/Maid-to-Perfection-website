import {
  Home,
  Building2,
  Sparkles,
  DoorOpen,
  Hammer,
  Clock,
  Calendar,
  CheckCircle2,
  Utensils,
  Brush,
  Settings,
  HelpCircle,
  Search,
  LucideIcon,
  Bath,
  Info,
  Repeat,
} from "lucide-react";

export interface FormOption {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface FormField {
  id: string;
  placeholder: string;
  type?: string;
}

export interface FormStep {
  id: string;
  question: string;
  type: "choice" | "multiple-choice" | "text" | "phone";
  options?: FormOption[];
  fields?: FormField[];
}

export const FORM_CONFIG = {
  webhookUrl: process.env.NEXT_PUBLIC_N8N_WEBHOOK || "",
  initialStepId: "serviceType",

  // Logic paths
  flows: {
    Commercial: ["officeLocation", "timeline", "contactDetails"],
    "end of tenancy": [
      "locationDetails",
      "propertyDetails",
      "eotAddons",
      "propertyStatus",
      "extraRooms",
      "completionDate",
      "contactDetails",
    ],
    "deep clean": [
      "locationDetails",
      "propertyDetails",
      "eotAddons",
      "deepCleanScope",
      "completionDate",
      "contactDetails",
    ],
    other: [
      "otherServiceType",
      "locationDetails",
      "propertyType",
      "contactDetails",
    ],
    Domestic: [
      "frequency",
      "propertyDetails",
      "history",
      "requirements",
      "timeline",
      "locationDetails",
      "contactDetails",
    ],
  } as Record<string, string[]>,

  allSteps: {
    serviceType: {
      id: "serviceType",
      question: "What type of cleaning do you need?",
      type: "choice",
      options: [
        { label: "Domestic Clean", value: "Domestic", icon: Home },
        { label: "Commercial", value: "Commercial", icon: Building2 },
        { label: "Deep Clean", value: "deep clean", icon: Sparkles },
        { label: "End of Tenancy", value: "end of tenancy", icon: DoorOpen },
        { label: "Other Cleaning Services", value: "other", icon: HelpCircle },
      ],
    },
    officeLocation: {
      id: "officeLocation",
      question: "What's your office location?",
      type: "text",
      fields: [{ id: "fullAddress", placeholder: "Office Address & Postcode" }],
    },
    locationDetails: {
      id: "locationDetails",
      question: "Where is the property located?",
      type: "text",
      fields: [
        { id: "fullAddress", placeholder: "Full Address" },
        { id: "postcode", placeholder: "Postcode" },
      ],
    },
    propertyDetails: {
      id: "propertyDetails",
      question: "How many bed/bath do you have?",
      type: "text",
      fields: [
        { id: "bedrooms", placeholder: "Number of Bedrooms" },
        { id: "bathrooms", placeholder: "Number of Bathrooms" },
      ],
    },
    eotAddons: {
      id: "eotAddons",
      question: "Do you need extra services?",
      type: "multiple-choice",
      options: [
        { label: "Oven Cleaning", value: "oven", icon: Utensils },
        { label: "Carpet Cleaning", value: "carpet", icon: Brush },
      ],
    },
    propertyStatus: {
      id: "propertyStatus",
      question: "Is your property being...",
      type: "choice",
      options: [
        { label: "Sold", value: "sold", icon: CheckCircle2 },
        { label: "Rented Privately", value: "rented_private", icon: Home },
        {
          label: "Rented Through Agent",
          value: "rented_agent",
          icon: Building2,
        },
      ],
    },
    extraRooms: {
      id: "extraRooms",
      question: "Do you have any extra rooms?",
      type: "multiple-choice",
      options: [
        { label: "Conservatory", value: "conservatory", icon: Home },
        { label: "Utility Room", value: "utility", icon: Settings },
        { label: "Annex", value: "annex", icon: DoorOpen },
        { label: "Extra Dining", value: "dining", icon: Utensils },
        { label: "3+ Toilets", value: "toilets", icon: Bath },
      ],
    },
    deepCleanScope: {
      id: "deepCleanScope",
      question: "Does the whole property need deep cleaning?",
      type: "text",
      fields: [
        {
          id: "scope",
          placeholder: "Please specify (e.g., Kitchen only, full house)",
        },
      ],
    },
    completionDate: {
      id: "completionDate",
      question: "What date do you need this completed by?",
      type: "text",
      fields: [{ id: "targetDate", placeholder: "DD/MM/YYYY" }],
    },
    otherServiceType: {
      id: "otherServiceType",
      question: "What service do you need?",
      type: "text",
      fields: [
        {
          id: "serviceName",
          placeholder: "e.g. After Builders, Hoarder Clean",
        },
      ],
    },
    propertyType: {
      id: "propertyType",
      question: "Property type?",
      type: "choice",
      options: [
        { label: "House", value: "house", icon: Home },
        { label: "Flat", value: "flat", icon: Building2 },
        { label: "Studio", value: "studio", icon: DoorOpen },
        { label: "Commercial Building", value: "commercial_bld", icon: Hammer },
      ],
    },
    contactDetails: {
      id: "contactDetails",
      question: "Who should we send the quote to?",
      type: "text",
      fields: [
        { id: "fullName", placeholder: "Full Name" },
        { id: "email", placeholder: "Email Address" },
        { id: "phone", placeholder: "Phone (e.g. 07xxx)" },
      ],
    },
    frequency: {
      id: "frequency",
      question: "How often?",
      type: "choice",
      options: [
        { label: "One-off", value: "One-off", icon: CheckCircle2 },
        { label: "Weekly", value: "Weekly", icon: Repeat },
        { label: "Fortnightly", value: "Fortnightly", icon: Calendar },
      ],
    },
    history: {
      id: "history",
      question: "Last professional clean?",
      type: "text",
      fields: [{ id: "lastClean", placeholder: "Approx. date or 'Never'" }],
    },
    requirements: {
      id: "requirements",
      question: "Specific Requirements",
      type: "multiple-choice",
      options: [
        { label: "I have Pets", value: "pets", icon: Info },
        { label: "Allergies", value: "allergies", icon: Info },
      ],
    },
    timeline: {
      id: "timeline",
      question: "How soon do you need us?",
      type: "choice",
      options: [
        { label: "ASAP", value: "asap", icon: Clock },
        { label: "Within Week", value: "week", icon: Calendar },
        { label: "Just a Quote", value: "quote", icon: Search },
      ],
    },
  } as Record<string, FormStep>,
};
