export interface Property {
  id: number | string;
  title: string;
  location: string;
  price: number;
  image: string;
  description?: string;
  bedrooms?: number;
  bathrooms?: number;
  amenities?: string[];
  rating?: number;
  reviews?: Review[];
  url?: string; // ✅ optional Airbnb link
}


export interface Review {
  id: string;
  user: string;
  comment: string;
  rating: number;
}

export interface ApiResponseItem {
  id?: string;
  name?: string;
  city?: string;
  price?: { rate?: number };
  images?: string[];
  description?: string;
  rating?: number;
}