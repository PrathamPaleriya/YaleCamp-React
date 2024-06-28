import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Map from "./Map/Map";
import { storage } from "../appwrite/config";
import useFetchCamp from "../Hooks/useFetchCamp";
import { BeatLoader } from "react-spinners";
import ReviewCard from "./ReviewCard";
import { Helmet } from "react-helmet";

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

      <Helmet>
        <title>{`${data.Title} - Yelpcamp`}</title>
      </Helmet>

      <div className="border-2 border-cream-outline rounded-md w-full p-10 lg:h-[650px] hover:border-cream-dark hover:border-2 order-2 h-96">
        <Map location={data.location} id={data.$id} title={data.Title} />
      </div>

      <div className="w-full lg:col-span-2 lg:order-2">
        <div className="border-2 border-cream-outline rounded-md p-10  mb-10">
          <img
            src={imageURL}
            alt=""
            className="object-cover object-center w-full lg:h-[550px]"
          />
          <div className="md:flex justify-between items-center">
            <h1 className="mt-5 md:my-5 text-md md:text-xl lg:text:2xl font-bold">
              {data.Title}
            </h1>
            <p className="my-3 md:my-0  text-sm md:text-lg lg:text-xl">{`INR: ${data.rate}/night`}</p>
          </div>
          <p className="md:text-lg lg:text-xl text-cream-dark">
            {data.description}
          </p>
          <p className="md:text-lg lg:text-xl mt-8 italic text-cream-dark">
            Submitted by {data.author}
          </p>
        </div>

        <div className="border-2 border-cream-outline rounded-md p-10 my-10">
          <ReviewCard campID={id} reviews={data.reviews}/>
        </div>
      </div>
    </div>
  );
}

export default camp;
