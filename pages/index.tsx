import { useEffect, useState } from "react";
import { Property } from "@/types/property";
import PropertyCard from "@/components/property/PropertyCard";

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProperties = async () => {
      try {
        const res = await fetch("/api/properties");
        if (!res.ok) {
          const body = (await res.json().catch(() => ({}))) as {
            message?: string;
          };
          throw new Error(body?.message || "Failed to fetch properties");
        }

        const data: Property[] = await res.json();
        setProperties(data);
      } catch (err) {
        if (err instanceof Error) {
          console.error("Error fetching properties:", err.message);
          setError(err.message);
        } else {
          console.error("Unknown error:", err);
          setError("Failed to load properties");
        }
      } finally {
        setLoading(false);
      }
    };

    loadProperties();
  }, []);

  if (loading) return <div className="p-8">Loading properties...</div>;
  if (error) return <div className="p-8 text-red-600">{error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
