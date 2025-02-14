import React, { useState } from "react";
import DashboardSidebar from "./DashboardSidebar";
import DashboardHead from "./DashboardHead";
import { FaFile } from "react-icons/fa6";
import { RxCrossCircled } from "react-icons/rx";

const UploadFiles = ({ onFilesUpload }) => {

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const allowedExtensions = ["pdf", "doc", "docx"];

    const validFiles = files.filter((file) => {
      const extension = file.name.split(".").pop().toLowerCase();
      return allowedExtensions.includes(extension);
    });

    const totalSize = validFiles.reduce((acc, file) => acc + file.size, 0);

    if (totalSize > 25 * 1024 * 1024) {
      setErrorMessage("Total file size must not exceed 25MB.");
      return setUploadedFiles([]);
    }

    const updatedFiles = [...uploadedFiles, ...validFiles];
    setUploadedFiles(updatedFiles);
    onFilesUpload(updatedFiles);
    setErrorMessage("");
  };

  return (
    <div className="p-2">
      <div className="text-justify mb-6">
        <h1 className="text-[#181D27] text-2xl lg:text-xl font-bold py-2">
          Upload Products
        </h1>
        <p className="text-[#6C606C] text-base lg:text-sm">
          Please upload files in pdf, docx, or doc format and make sure the file
          size is under 25 MB.
        </p>
      </div>

      <div
        className="border border-dashed bg-[#FDF6FE] border-[#90119B] p-4 rounded-lg text-center cursor-pointer hover:border-double hover:bg-[#fdf6fec7]"
        onClick={() => document.getElementById("file-upload").click()}
      >
        <p className="text-black">
          Drop file or <span className="text-[#90119B] cursor-pointer">Browse</span>
        </p>
        <p className="text-sm text-[#6C606C]">Format: pdf, docx, doc & Max file size: 25 MB</p>
        <input
          id="file-upload"
          type="file"
          multiple
          className="hidden"
          accept=".pdf,.doc,.docx"
          onChange={handleFileUpload}
          required
        />
      </div>

      {errorMessage && <p className="text-red-600 mt-2">{errorMessage}</p>}

      <div className="flex flex-row lg:flex-row gap-3 w-full mt-8">
        <button
          className="bg-white text-black border shadow-sm border-[#E6E7EA] p-3 rounded-lg w-full font-semibold hover:border-[#595a5c]"
          onClick={() => {
            setUploadedFiles([]);
            onFilesUpload([]);
          }}
        >
          Cancel
        </button>
        <button className="bg-[#90119B] text-white p-3 rounded-lg w-full font-semibold">
          Done
        </button>
      </div>
    </div>
  );
};

const ShowFiles = ({ files, setFiles }) => {
  const size = files.length > 0 ? files.reduce((acc, file) => acc + file.size, 0) / (1024 * 1024) : 0;
  

  const removeFile = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    console.log(updatedFiles);
  };

  return (
    <div className="p-2 h-full">
      <div className="text-justify mb-4">
        <h1 className="text-[#181D27] text-2xl lg:text-xl font-bold py-2">
          Uploaded Files
        </h1>
        <p className="text-[#6C606C] text-base lg:text-sm">
          Uploaded product files can be seen below
        </p>
        <p className="text-[#6C606C] text-xs ">Files Size: <span className="text-[#90119B]">{size.toFixed(3)}MB</span> &nbsp;&nbsp;&nbsp;&nbsp;  Files Slected: <span className="text-[#90119B]">{files.length}</span> </p>
         
      </div>

      <div className="border border-[#EBEBEB] p-3 rounded-lg shadow-md h-full">
        {files.length === 0 ? (
          <p className="text-gray-500 h-[140px] flex items-center justify-center">No files uploaded.</p>
        ) : (
          <div className="overflow-x-auto scrollbar-thin">
            <div className="flex gap-3 m-2">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="relative bg-slate-100 px-1 py-2 rounded-lg shadow-md flex flex-col items-center justify-center   h-[130px]"
                >
                  <FaFile className="text-[#90119B] text-6xl mb-2" />
                  <p className="text-sm text-center truncate w-24">{file.name}</p>
                  <button
                    className="absolute top-0 right-0 bg-white rounded-full shadow-md "
                    onClick={() => removeFile(index)}
                  >
                    <RxCrossCircled className="bg-[#44084A] text-white rounded-full text-2xl hover:bg-red-500" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const AddProduct = () => {
  
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

 
  const getRandomResponse = () => {
    const responses = [
      "The product costs $199.",
      "This item is currently out of stock.",
      "Yes, we offer a discount on bulk purchases!",
      "The watch has a 2-year warranty.",
      "Shipping time is approximately 3-5 business days.",
      "We only have limited stock left!",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  
  const handleQuerySubmit = () => {

    if (query.length === 0) { 
      setResponse("Please enter a valid query.");
      return;
    }
    setResponse(getRandomResponse()); 
  };

  console.log(uploadedFiles);



  return (
    <div className="flex font-inter min-h-screen">
      <div className="bg-white h-screen hidden lg:block fixed z-20 w-72">
        <DashboardSidebar />
      </div>

      <main className="flex-1 lg:ml-80" style={{ backgroundColor: "#F5F6FA" }}>
        <DashboardHead />

        <div className="bg-gray-100 p-4 md:p-8 mt-4 rounded-lg">

          <h1 className="text-3xl font-bold">
            Product Knowledge <span className="text-[#90119B]">Base</span>
          </h1>
          <p className="text-base text-gray-700 font-semibold">
            Add product knowledge for the model to recommend products
          </p>

          <div className="grid gap-4 mt-6 md:gap-6 items-center grid-cols-1 md:grid-cols-2 3xl:grid-cols-3">
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md">
              <UploadFiles onFilesUpload={setUploadedFiles} />
            </div>
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md">
              <ShowFiles files={uploadedFiles} setFiles={setUploadedFiles} />
            </div>



              {/* Product Query Input */}
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md flex flex-col h-full min-h-[280px]">
              <h2 className="text-lg font-semibold">Product Query</h2>
              <p className="text-gray-500 text-sm mb-3">Ask questions related to the products</p>
              <textarea
                className="w-full border border-gray-300 rounded-lg p-3 flex-grow"
                placeholder="What is the cost of the watch?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                className="w-full bg-[#90119B] text-white py-2 mt-3 rounded-lg hover:bg-[#90119bb5]"
                onClick={handleQuerySubmit}
              >
                Ask Query
              </button>
            </div>

            {/* Response Query Output  */}
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md flex flex-col h-full min-h-[280px]">
              <h2 className="text-lg font-semibold">Answer Related to Query</h2>
              <p className="text-gray-500 text-sm mb-3">Response for the query asked can be seen below</p>
              <textarea
                className="w-full border border-[#90119B] rounded-lg p-3 flex-grow"
                placeholder="Response will appear here..."
                value={response}
                readOnly
              />
            </div>  


          </div>
        </div>
      </main>
    </div>
  );
};

export default AddProduct;
