import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Map from "./Map/Map";
import { storage } from "../appwrite/config";
import useFetchCamp from "../Hooks/useFetchCamp";
import { BeatLoader } from "react-spinners";

function camp() {
  const { id } = useParams();
  const [imageURL, setImageURL] = useState();

  const { data, loading, error } = useFetchCamp(
    import.meta.env.VITE_DATABASE_ID,
    import.meta.env.VITE_COLLECTION_CAMPS_ID,
    id
  );

  const fetchImage = async (e) => {
    const respone = await storage.getFileView(
      import.meta.env.VITE_BUCKET_CAMPIMAGE_ID,
      e
    );

    setImageURL(respone.href);
    console.log("fetch");
  };

  if (loading)
    return (
      <div className="flex justify-center items-center my-4">
        <BeatLoader
          color={"#000"}
          loading={loading}
          size={30}
          speedMultiplier={2}
        />
      </div>
    );
  if (error) return <div>{error}</div>;

  fetchImage(data.images[0]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 px-8 lg:px-20 my-10 gap-10">
      <div className="border-2 border-cream-outline rounded-md w-full p-10 lg:h-[650px] hover:border-cream-dark hover:border-2 order-2 h-96">
        <Map location={data.location} id={camp.$id} title={camp.title} />
      </div>

      <div className="border-2 border-cream-outline rounded-md w-full p-10 lg:col-span-2 lg:order-2">
        <div>
          <img
            src={imageURL}
            alt=""
            className="object-cover object-center w-full lg:h-[550px]"
          />
          <div className="flex justify-between items-center">
            <h1 className="my-5 text-md md:text-xl lg:text:2xl font-bold">
              {data.Title}
            </h1>
            <p className="text-sm md:text-lg lg:text-xl">{`INR: ${data.rate}/night`}</p>
          </div>
          <p className="md:text-lg lg:text-xl text-cream-dark">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default camp;
