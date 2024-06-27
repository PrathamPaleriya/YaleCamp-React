import React, { useState, useEffect, useCallback } from "react";
import CampCard from "./CampCard";
import useFetchData from "../Hooks/useFetchData";
import { BeatLoader } from "react-spinners";

function HeroCampDisplay() {
  // const [campgrounds, setCampgrounds] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // const fetchCampground = useCallback(async () => {
  //   try {
  //     const response = await databases.listDocuments(
  //       import.meta.env.VITE_DATABASE_ID,
  //       import.meta.env.VITE_COLLECTION_CAMPS_ID
  //     );
  //     setCampgrounds(response.documents);
  //   } catch (err) {
  //     setError("Failed to fetch campgrounds");
  //   } finally {
  //     setLoading(false);
  //   }
  // },[]);

  // useEffect(() => {
  //   fetchCampground();
  // }, [fetchCampground]);

  const { data, loading, error } = useFetchData(
    import.meta.env.VITE_DATABASE_ID,
    import.meta.env.VITE_COLLECTION_CAMPS_ID,
  );

  if (loading)
    return (
      <div className="flex justify-center items-center my-4">
        <BeatLoader color={"#000"} loading={loading} size={30} speedMultiplier={2} />
      </div>
    );
  if (error) {
    console.error(error)
    return (
      <div className="flex text-xl font-semibold text-red-500 justify-center my-10">
        <h1 className="text-black">An Error Occured: &nbsp;</h1>
        <p>{error.message}</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6 min-w-72">
      {data.map((item) => (
        <CampCard
          key={item.$id}
          id={item.$id}
          title={item.Title}
          caption={item.caption}
          imageID={item.images[0]}
        />
      ))}
    </div>
  );
}

export default HeroCampDisplay;
