import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const ReviewForm = () => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const { id: productId } = useParams();
  const userId = localStorage.getItem("id");

  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevents the page from reloading

    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8080/api/reviews/create", {
        userId,
        productId,
        rating,
        comment,
      });
      console.log(response);
      toast.success("Review successfully submitted!");
      window.location.reload();
      
      setComment("");
      setRating(5);

    
    } catch (error) {
      console.error("Error submitting review:", error);
      toast.error("Failed to submit review.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg mt-6">
      <h2 className="text-xl font-semibold mb-3">Write a Review</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 font-semibold">Rating (1-5):</label>
        <select
          className="w-full p-2 border rounded-md"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num} ⭐
            </option>
          ))}
        </select>

        <label className="block mt-4 font-semibold">Comment:</label>
        <textarea
          className="w-full p-2 border rounded-md"
          rows="3"
          placeholder="Write your review..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        ></textarea>

        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Review"}
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;



