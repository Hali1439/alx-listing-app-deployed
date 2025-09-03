// pages/api/properties/[id].ts
import { NextApiRequest, NextApiResponse } from "next";
import { Property } from "@/types/property";
import { MOCK_PROPERTIES } from "../properties"; // or similar

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Property | { message: string }>
) {
  const { id } = req.query;

  // id can be string | string[] | undefined
  if (!id || Array.isArray(id)) {
    return res.status(400).json({ message: "Invalid id" });
  }

  const property: Property | undefined = MOCK_PROPERTIES.find(
    (p) => p.id === id
  );

  if (!property) {
    return res.status(404).json({ message: "Property not found" });
  }

  return res.status(200).json(property);
}
