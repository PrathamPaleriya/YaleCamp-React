import React, { useState } from "react";
import { storage } from "../appwrite/config";
import { ID } from "appwrite";

function DragNDrop({onfileUploaded, on}) {
  const [files, setFiles] = useState([]);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const droppedFiles = Array.from(e.dataTransfer.files).filter(file => file.type.startsWith('image/'));

    setFiles((previous) => [...previous, ...droppedFiles]);
    await uploadFile(droppedFiles);
  }

  const handleFilesUpload =async (e) => {

    const seletectedFiles = Array.from(e.dataTransfer.files).filter(file => file.type.startsWith("image."));

    setFiles((previous) => [...previous, ...seletectedFiles]);
    await uploadFile(seletectedFiles);

  }

  const uploadFile = async (files) => {
    const fileIds = [];
    for (const file of files) {
        try{
            const response = await storage.createFile(
                import.meta.env.VITE_BUCKET_CAMPIMAGE_ID,
                ID.unique(),
                file
            );
            fileIds.push(response.$id)
        } catch (error) {
            console.log(error)
        }
    }

    onfileUploaded(fileIds)
  }
  


  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="border-2 border-dashed border-gray-400 p-8 text-center cursor-pointer"
    >
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleFilesUpload}
        className="hidden"
        id="fileInput"
      />
      <label htmlFor="fileInput" className="block">
        Drag 'n' drop some image files here, or click to select files
      </label>
      <div className="mt-4">
        {files.map((file, index) => (
          <p key={index}>{file.name}</p>
        ))}
      </div>
    </div>
  );
}

export default DragNDrop;
