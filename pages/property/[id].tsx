// pages/property/[id].tsx
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Property } from "@/types/property";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    (async () => {
      try {
        const res = await fetch(`/api/properties/${id}`);
        if (!res.ok) throw new Error("Failed to load property detail");
        const data: Property = await res.json();
        setProperty(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) return <div className="p-8">Loading...</div>;
  if (!property) return <div className="p-8">Property not found</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{property.title}</h1>
      <p className="text-gray-600">{property.location}</p>
      <p className="mt-2 font-semibold">
        ${property.price} <span className="text-sm text-gray-600">/ night</span>
      </p>
      {property.image && (
        <img
          src={property.image}
          alt={property.title}
          className="mt-4 rounded-lg shadow-md"
        />
      )}
      <p className="mt-4">{property.description}</p>
    </div>
  );
}
