export const site = {
  name: "S.K. Wairimu",
  tagline: "Insurance & Financial Solutions",
  email: "hi@shantelgathiiagency.co.ke",
  phoneDisplay: "0117 167 390",
  phoneHref: "tel:0117167390",
  whatsapp: "https://wa.me/254117167390",
  location: "Nairobi, Kenya",
};

export const serviceOptions = [
  "Personal insurance",
  "Medical insurance",
  "Life insurance",
  "Motor insurance",
  "Education savings",
  "Corporate solutions",
  "Financial planning",
  "Financial education",
  "Other / not sure yet",
] as const;

/**
 * Photos are stored in R2. By default they are served through this app's
 * /images/* route. If the bucket gets its own public domain, set
 * VITE_IMAGES_BASE_URL (e.g. https://images.example.co.ke) at build time.
 */
const imagesBase = (import.meta.env.VITE_IMAGES_BASE_URL || "/images").replace(
  /\/$/,
  "",
);

export const img = (name: string) => `${imagesBase}/${name}`;
