import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const Reviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/reviews/product/${productId}`);
        console.log(response);
        setReviews(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews.");
        toast.error("Error fetching reviews!");
        setLoading(false);
      }
    };

    fetchReviews();
  }, [productId]);

  return (
    <div className="reviews-container bg-gray-50 p-6 rounded-lg">
      {loading && <p>Loading reviews...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && reviews.length === 0 && <p>No reviews yet.</p>}

      {reviews.map((review) => (
        <div key={review.id} className="review-card bg-white p-4 rounded-lg shadow-md mt-4">
          <h4 className="font-semibold">{review.userId.name}</h4>
          <p className="text-yellow-500">⭐ {review.rating}/5</p>
          <p>{review.comment}</p>
          <p className="text-sm text-gray-500">{new Date(review.createdAt).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
