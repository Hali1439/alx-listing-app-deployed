"use client";

import Link from "next/link";
import { Property } from "@/types/property";

export interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Link href={`/property/${property.id}`}>
      <div className="p-4">
  <h3 className="font-bold text-lg">
    {property.url ? (
      <Link href={property.url} target="_blank" rel="noopener noreferrer">
        {property.title}
      </Link>
    ) : (
      property.title
    )}
  </h3>
  <p className="text-gray-500">{property.location}</p>
  <p className="mt-2 font-semibold">
    ${property.price} <span className="text-sm text-gray-600">/ night</span>
  </p>
</div>

    </Link>
  );
};

export default PropertyCard;
