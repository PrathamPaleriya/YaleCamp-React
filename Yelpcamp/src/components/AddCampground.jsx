import React, { useContext, useState } from "react";
import DragNDrop from "./DragNDrop";
import { CampgroundContext } from "../contect/CampgroundContext";
import { storage, databases } from "../appwrite/config";
import { ID, Permission, Role } from "appwrite";
import { BarLoader } from "react-spinners";

function AddCampground() {
  const { user } = useContext(CampgroundContext);
  const username = user.name;
  const [title, setTitle] = useState();
  const [price, setPrice] = useState(0);
  const [caption, setCaption] = useState();
  const [description, setDescription] = useState();
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [location, setLocation] = useState([]);
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0);
  const [toreset, setToReset] = useState(true)

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
      case "lat":
        setLat(parseFloat(e.target.value));
        break;
      case "lng":
        setLng(parseFloat(e.target.value));
        break;
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const droppedFiles = Array.from(e.dataTransfer.files).filter((file) =>
      file.type.startsWith("image/")
    );

    setFiles((previous) => [...previous, ...droppedFiles]);
  };

  const handleClickUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files).filter((file) =>
      file.type.startsWith("image/")
    );
    setFiles((previous) => [...previous, ...uploadedFiles]);
  };

  const handleRemoveFiles = () => {
    setFiles([]);
    document.getElementById("fileInput").value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fileIds = [];
    setLocation([parseFloat(lng), parseFloat(lat)]);
    setLoading(true);

      try {
        const respone = await storage.createFile(
          import.meta.env.VITE_BUCKET_CAMPIMAGE_ID,
          ID.unique(),
          files[0],
          [Permission.read(Role.any())]
        );
        fileIds.push(respone.$id);
        try {
          await databases.createDocument(
            import.meta.env.VITE_DATABASE_ID,
            import.meta.env.VITE_COLLECTION_CAMPS_ID,
            ID.unique(),
            {
              Title: title,
              caption: caption,
              description: description,
              images: fileIds,
              rate: price,
              location: location,
              author: username,
            },
            [Permission.read(Role.any()), Permission.delete(Role.any())]
          );

          setAlert(null);
          setLoading(false);
          setToReset(true)
        } catch (err) {
          console.error(err);
          setAlert(err.message);
          setLoading(false);
        }
      } catch (err) {
        console.error(err);
        setAlert(err.message);
        setLoading(false);
      }
  };

  const handleReset = () => {
    setTitle("");
    setPrice(0);
    setCaption("");
    setDescription("");
    setFiles([]);
    setLoading(false);
    setAlert(null);
    setLocation([]);
    setLng(0);
    setLat(0);
    setToReset(false)
  }

  return (
    <div className="flex justify-center my-5 p-5">
      <div className="w-[65%]">
        <h1 className="text-3xl font-bold mb-8">Add New Campground</h1>

        <form onSubmit={handleSubmit}>
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
                required
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
                className="w-full bg-cream-box px-5 py-3"
                required
              />
            </div>

            <div className="my-3 flex gap-5 w-full">
              <div className="w-full">
                <h4 className="text-cream-dark mb-2">Longitude</h4>
                <input
                  type="number"
                  name="lng"
                  value={lng}
                  min={-180}
                  max={180}
                  onChange={handleChange}
                  className="w-full bg-cream-box px-5 py-3"
                  required
                />
              </div>

              <div className="w-full">
                <h4 className="text-cream-dark mb-2">Latitude</h4>
                <input
                  type="number"
                  name="lat"
                  value={lat}
                  min={-90}
                  max={90}
                  onChange={handleChange}
                  className="w-full bg-cream-box px-5 py-3"
                  required
                />
              </div>
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
                maxLength={100}
                required
              />
            </div>

            <h4 className="text-cream-dark mb-2">Camp Images</h4>
            <div
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              className="bg-cream-box border-2 border-dashed border-gray-400 p-8 text-center cursor-pointer text-cream-dark"
            >
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleClickUpload}
                className="hidden"
                id="fileInput"
              />
              <label htmlFor="fileInput" className="block">
                Drag 'n' drop some image files here, or click to select files
              </label>
            </div>

            <div className="mt-4">
              {files.map((file, index) => (
                <p key={index}>{file.name}</p>
              ))}
              <p
                onClick={handleRemoveFiles}
                className="text-red-600 hover:text-red-400 cursor-pointer"
              >
                Remove Images
              </p>
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
                required
              />
            </div>
          </div>

          {alert && (
            <div className="text-red-500 my-3 text-lg font-semibold">
              <p>{alert}</p>
            </div>
          )}

          {/* <button
            type="submit"
            className={`text-white py-4 px-4 w-full my-3 ${
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
              "Add Campground"
            )}
          </button>

          {
            toreset && (
              <button type="button" onClick={handleReset} className="text-white py-4 px-4 w-full my-3 bg-blue-500">
                Add another Campground
              </button>
            )
          } */}

          {
            toreset ? (
              <button type="button" onClick={handleReset} className="text-white py-4 px-4 w-full my-3 bg-blue-500">
                Add another Campground
              </button>
            ) : (
<button
            type="submit"
            className={`text-white py-4 px-4 w-full my-3 ${
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
              "Add Campground"
            )}
          </button>

            )

          }
        </form>
      </div>
    </div>
  );
}

export default AddCampground;
