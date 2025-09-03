"use client";

type Review = {
  id: string;
  user: string;
  comment: string;
  rating: number;
};

type ReviewSectionProps = {
  reviews: Review[];
};

export default function ReviewSection({ reviews }: ReviewSectionProps) {
  return (
    <section className="p-6 mt-6 bg-gray-50 rounded-lg shadow-inner">
      <h2 className="text-lg font-bold mb-4">Reviews</h2>
      {reviews.length === 0 ? (
        <p className="text-gray-500">No reviews yet.</p>
      ) : (
        reviews.map(r => (
          <div key={r.id} className="mb-4 border-b pb-2">
            <p className="font-semibold">{r.user}</p>
            <p className="text-gray-600">{r.comment}</p>
            <p className="text-yellow-500">⭐ {r.rating}</p>
          </div>
        ))
      )}
    </section>
  );
}
