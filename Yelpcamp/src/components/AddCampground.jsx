import React, { useContext, useState } from "react";
import DragNDrop from "./DragNDrop";
import { CampgroundContext } from "../contect/CampgroundContext";

function AddCampground() {
  const { user } = useContext(CampgroundContext);
  const userId = user.$id;
  const [title, setTitle] = useState();
  const [price, setPrice] = useState(0);
  const [caption, setCaption] = useState();
  const [description, setDescription] = useState();

  const handleChange = (e) => {
    switch (e.target.name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "price":
        setPrice(parseFloat(e.target.value));
        break;
      case "caption":
        setCaption(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
    }
  };

  return (
    <div className="flex justify-center my-5 p-5">
      <div className="w-[65%]">
        <h1 className="text-3xl font-bold mb-8">Add New Campground</h1>
        <form onSubmit={""}>
          <div>
            <div className="my-3">
              <h4 className="text-cream-dark mb-2">Campground Name</h4>
              <input
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
                placeholder="Add Name"
                className="w-full bg-cream-box px-5 py-3"
              />
            </div>

            <div className="my-3">
              <h4 className="text-cream-dark mb-2">Price</h4>
              <input
                type="number"
                name="price"
                value={price}
                min={0}
                max={999.9}
                onChange={handleChange}
                placeholder="Price in INR per night"
                className="w-full bg-cream-box px-5 py-3"
              />
            </div>

            <div className="my-3">
              <h4 className="text-cream-dark mb-2">Caption</h4>
              <input
                type="text"
                name="caption"
                value={caption}
                onChange={handleChange}
                placeholder="Caption"
                className="w-full bg-cream-box px-5 py-3"
                maxLength={80}
              />
            </div>

            <div
              className="bg-cream-box border-2 border-dashed border-gray-400 p-8 text-center cursor-pointer text-cream-dark"
            >
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={''}
                className="hidden"
                id="fileInput"
              />
              <label htmlFor="fileInput" className="block">
                Drag 'n' drop some image files here, or click to select files
              </label>
              <div className="mt-4">
                {/* {files.map((file, index) => (
                  <p key={index}>{file.name}</p>
                ))} */}
              </div>
            </div>

            <div className="my-3">
              <h4 className="text-cream-dark mb-2">Description</h4>
              <textarea
                type="text"
                rows={7}
                name="description"
                value={description}
                onChange={handleChange}
                placeholder="Add Description"
                className="w-full bg-cream-box px-5 py-3"
                maxLength={400}
              />
            </div>
          </div>

          <button
            type="submit"
            className="text-white bg-black py-4 px-4 w-full my-3"
          >
            Add Campground
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCampground;
