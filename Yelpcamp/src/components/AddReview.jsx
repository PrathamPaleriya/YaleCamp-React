import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";
import { databases } from "../appwrite/config";
import { CampgroundContext } from "../contect/CampgroundContext";
import { ID } from "appwrite";


function AddReview() {
  const { id } = useParams();
  const { user } = useContext(CampgroundContext);
  const [review, setReview] = useState();
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setReview(e.target.value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await databases.createDocument(
        import.meta.env.VITE_DATABASE_ID,
        import.meta.env.VITE_COLLECTION_REVIEWS_ID,
        ID.unique(),
        {
          author: user.name,
          review: review,
          camps: id,
        }
      );

      setLoading(false);
      navigate(`/home/camp/${id}`)
    } catch (err) {
      console.error(err);
      setAlert(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center my-5 p-5">
      <div className="w-[65%]">
        <h1 className="font-bold text-3xl mb-5">Add New Comment</h1>
        <form onSubmit={handleOnSubmit}>
          <h3 className="text-cream-dark mb-2">Review</h3>
          <textarea
            type="text"
            rows={7}
            value={review}
            onChange={handleOnChange}
            maxLength={150}
            placeholder="Add your review"
            className="w-full bg-cream-box px-5 py-3"
            required
          />

          {alert && (
            <div className="text-red-500 my-3">
            <p>{alert}</p>
          </div>
          )}

          <button
            type="submit"
            className={`text-white py-4 px-4 w-full my-4 ${
              alert ? "bg-red-400" : "bg-black"
            }`}
            disabled={loading}
          >
            {loading ? (
              <div className="flex justify-center items-center h-full py-2">
                <BarLoader
                  color={"#fff"}
                  loading={loading}
                  width={100}
                  speedMultiplier={3}
                />
              </div>
            ) : alert ? (
              "Try again"
            ) : (
              "Post Comment"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddReview;
