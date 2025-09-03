"use client";

import { Property } from "@/types/property";

type PropertyDetailProps = {
  property: Property;
};

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <section className="p-6 bg-white rounded-lg shadow-md max-w-3xl mx-auto my-8">
      <h1 className="text-2xl font-bold mb-2">{property.title}</h1>
      <p className="text-gray-600 mb-4">{property.description || "No description provided."}</p>

      {property.amenities && property.amenities.length > 0 && (
        <>
          <h2 className="text-lg font-semibold mb-2">Amenities</h2>
          <ul className="list-disc list-inside">
            {property.amenities.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
