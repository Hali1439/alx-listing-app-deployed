import axios from "axios";
import { Property, ApiResponseItem } from "@/types/property";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "X-RapidAPI-Key": process.env.RAPIDAPI_KEY ?? "",
    "X-RapidAPI-Host": process.env.RAPIDAPI_HOST ?? "",
  },
});

export const fetchProperties = async (): Promise<Property[]> => {
  try {
    const response = await api.get<{ results: ApiResponseItem[] }>(
      "/api/v2/searchPropertyByPlaceId",
      {
        params: {
          placeId: "ChIJ7cv00DwsDogRAMDACa2m4K8", // Example Chicago
          adults: 1,
        },
      }
    );

    const results: ApiResponseItem[] = Array.isArray(response.data?.results)
      ? response.data.results
      : [];

    return results.map((item) => ({
      id: item.id ?? crypto.randomUUID(),
      title: item.name ?? "No title",
      location: item.city ?? "Unknown",
      price: item.price?.rate ?? 0,
      image: item.images?.[0] ?? "/fallback.jpg",
      description: item.description ?? "No description available",
      rating: item.rating ?? 0,
    }));
  } catch (err) {
    console.error("Error fetching properties:", err);
    return [];
  }
};
