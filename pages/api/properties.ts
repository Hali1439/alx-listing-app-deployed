import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { Property, ApiResponseItem } from "@/types/property";

export const MOCK_PROPERTIES: Property[] = [

  {
    id: "1",
    title: "Mock Cozy Apartment",
    location: "Chicago",
    price: 120,
    image: "/fallback1.jpg",
    description: "A comfy mock apartment for testing",
    rating: 4.5,
  },
  {
    id: "2",
    title: "Mock Luxury Condo",
    location: "New York City",
    price: 200,
    image: "/fallback2.jpg",
    description: "A luxurious mock condo",
    rating: 4.7,
  },
  {
    id: "3",
    title: "Mock Beach House",
    location: "Miami",
    price: 350,
    image: "/fallback3.jpg",
    description: "Sunny mock beach house",
    rating: 4.9,
  },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Property[] | { message: string }>
) {
  try {
    const response = await axios.get<{ data: ApiResponseItem[] }>(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/search-results`,
      {
        headers: {
          "X-RapidAPI-Key": process.env.RAPIDAPI_KEY ?? "",
          "X-RapidAPI-Host": process.env.RAPIDAPI_HOST ?? "",
        },
        params: { location: "New York", guests: 2, page: 1 },
        timeout: 5000,
      }
    );

    const rawResults: ApiResponseItem[] = Array.isArray(response.data?.data)
      ? response.data.data
      : [];

    if (!rawResults.length) throw new Error("No results from API");

    const properties: Property[] = rawResults.map((item) => ({
      id: item.id ?? crypto.randomUUID(),
      title: item.name ?? "No title",
      location: item.city ?? "Unknown",
      price: item.price?.rate ?? 0,
      image: item.images?.[0] ?? "/fallback.jpg",
      description: item.description ?? "No description available",
      rating: item.rating ?? 0,
    }));

    return res.status(200).json(properties);
  } catch (err) {
    console.error("API error, falling back to mock data:", err);
    return res.status(200).json(MOCK_PROPERTIES);
  }
}
