export const pricingTitle = "Two plans. Pick the one that fits your property.";
export const pricingDescription = "Owners pay per listing. Hotels pay a platform fee plus a rate per room.";
export const plans = [
  {
    name: "Owners",
    description: "Villas, homestays, flats and Airbnb listings",
    rates: [
      { label: "1 to 10 listings", amount: "₹799", unit: "per listing / month" },
      { label: "11 or more listings", amount: "₹499", unit: "per listing / month" },
    ],
    features: ["One listing is one bookable unit", "Unlimited channels per listing", "Cross-channel calendar sync", "Unified booking management", "Partner accounts & split payouts"],
  },
  {
    name: "Hotels",
    description: "One property with many rooms",
    rates: [
      { label: "Platform fee", amount: "₹3,000", unit: "per month" },
      { label: "For every room", amount: "+ ₹100", unit: "per room / month" },
    ],
    features: ["Every room type in one dashboard", "Unlimited channels", "Rate and availability sync per room type", "Housekeeping & task routing", "Reports & insights"],
  },
];
export const pricingNotes = ["All prices include 18% GST", "First 2 months free", "Pay monthly, or yearly and save 15%"];
export const pricingFaqs = [
  { question: "How much does Simplified Management cost?", answer: "Owners pay ₹799 per listing per month for 1 to 10 listings, and ₹499 per listing per month from 11 listings up. Hotels pay a ₹3,000 monthly platform fee plus ₹100 per room per month. All prices include 18% GST, the first 2 months are free, and yearly billing saves 15%." },
  { question: "What counts as a listing?", answer: "One bookable unit. A whole villa booked as one unit is one listing. A guesthouse that sells 12 rooms separately is 12 listings. Channels are unlimited, and there are no per-booking fees." },
  { question: "Which plan is right for me?", answer: "If you own or manage villas, homestays, flats or Airbnb units, you're on the Owners plan and pay per listing. If you run one property with many rooms, you're on the Hotels plan and pay a platform fee plus a per-room rate." },
];
