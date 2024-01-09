"use client";

import { storage } from "../../../firebase.config";
import { ref, getDownloadURL, uploadBytesResumable } from "@firebase/storage";
import { useState } from "react";
import { generateRandomID } from "../../utils/Functions";
import { createCompany } from "../../utils/Company";
import { toast } from "react-toastify";

const AddNewCompany = () => {
  // State variables for company
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [active, setActive] = useState(false);
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);


  // Create a new company
  const RegisterNewCompany = (ev) => {
    ev.preventDefault();
    setLoading(true);

    // Store Image in Firebase Bucket
    if (!selectedFile) {
      toast.error("Please select a file!");
      return;
    }

    // Generate a unique name for each company image
    const fileName = generateRandomID();

    const file = selectedFile;
    const storageRef = ref(storage, `companies/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      `state_changed`,
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        toast.error("There was an error uploading image");
        return;
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImage(downloadURL);

          const companyData = {
            name,
            image: downloadURL,
            active,
            address,
            telephone,
            email,
            category,
            description,
          };

          console.log(companyData);

          createCompany(companyData, setLoading, (data) => {
            setLoading(false);
            console.log(data);
            toast.success("Successfully added your company", {
              position: "top-center",
            });
          });
        });
      }
    );
  };

  const updateImage = (ev) => {
    setSelectedFile(ev.target.files[0]);
    setImage(ev.target.files[0].name);
  };

  return (
    <div className="my-8 rounded-lg min-w-[1200px]  flex gap-4 flex-col overflow-x-hidden overflow-y-auto bg-white h-[85%] p-8 ">
      <h1 className="text-4xl font-bold">Create a new company</h1>

      <div className="flex flex-col">
        <h1 className="text-xl font text-gray-500">
          Complete the form to create a new company profile.
        </h1>
        <div className="w-full">
          <form className=" py-8" onSubmit={RegisterNewCompany}>
            {/* Company Name & Email */}
            <div className="flex gap-2 ">
              <div className="w-[60%]">
                <label htmlFor="companyName" className="px-1 py-4 text-lg">
                  Company Name
                </label>
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  autoComplete="false"
                  required
                  className="appearance-none w-full relative block px-4 py-4 border  bg-gray-50 border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none mb-3 focus:ring-black-500 focus:border-black-500 focus:z-10 sm:text-md"
                  placeholder="Enter Company Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="w-[40%]">
                <label htmlFor="companyName" className="px-1 py-4 text-lg">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="true"
                  required
                  className="appearance-none w-full relative block px-4 py-4 border  bg-gray-50 border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none mb-3 focus:ring-black-500 focus:border-black-500 focus:z-10 sm:text-md"
                  placeholder="company@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Telephone  & Address*/}
            <div className="flex gap-2 ">
              <div className="w-[40%]">
                <label htmlFor="reviews" className="px-1 py-4 text-lg">
                  Telephone
                </label>
                <input
                  id="reviews"
                  name="reviews"
                  type="text"
                  autoComplete="false"
                  required
                  className="appearance-none  w-full relative block px-4 py-4 border  bg-gray-50 border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none mb-3 focus:ring-black-500 focus:border-black-500 focus:z-10 sm:text-md"
                  placeholder="Enter Company Telephone"
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                />
              </div>
              <div className="w-[60%]">
                <label htmlFor="reviews" className="px-1 py-4 text-lg">
                  Address
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  autoComplete="true"
                  required
                  className="appearance-none  w-full relative block px-4 py-4 border  bg-gray-50 border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none mb-3 focus:ring-black-500 focus:border-black-500 focus:z-10 sm:text-md"
                  placeholder="Company Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>

            {/* Image */}
            <div>
              <label htmlFor="image" className="px-1 py-4 text-lg">
                Upload Company&apos;s Image
              </label>
              <input
                id="image"
                name="image"
                type="file"
                autoComplete="true"
                required
                className="appearance-none  w-full relative block px-4 py-4 border  bg-gray-50 border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none mb-3 focus:ring-black-500 focus:border-black-500 focus:z-10 sm:text-md"
                accept=".jpg, .jpeg, .png .gif"
                onChange={updateImage}
              />
            </div>

            {/* Status  & Category*/}
            <div className="flex gap-2 ">

            <div className=" w-full px-2 flex justify-between appearance-none  relative border  bg-gray-50 border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none mb-2 focus:ring-black-500 focus:border-black-500 focus:z-10 sm:text-md">
              <label htmlFor="status" className="px-1 py-4 text-lg ">
                Status of the Company
              </label>
              <select
                value={active}
                onChange={(e) => setActive(e.target.value)}
                className="appearance-none w-[40%] bg-gray-50 cursor-pointer placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-black-500 focus:border-black-500 focus:z-10 sm:text-md"
                style={{ outline: "none", border: "" }}
              >
                <option value="Available" selected>
                  Available
                </option>
                <option value="Unavailable">Unavailable</option>
              </select>
            </div>

            <div className=" w-full px-2 flex justify-between appearance-none  relative border  bg-gray-50 border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none mb-2 focus:ring-black-500 focus:border-black-500 focus:z-10 sm:text-md">
              <label htmlFor="status" className="px-1 py-4 text-lg ">
                Choose Category
              </label>
              <select
                value={active}
                onChange={(e) => setActive(e.target.value)}
                className="appearance-none w-[40%] bg-gray-50 cursor-pointer placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-black-500 focus:border-black-500 focus:z-10 sm:text-md"
                style={{ outline: "none", border: "" }}
              >
                <option value="" selected>
                  Select Category
                </option>
                <option value="Home_Service" selected>
                  Home Service
                </option>
                <option value="Pick_Up">Pick Up</option>
              </select>
            </div>
            </div>

            {/* Company Description */}
            <div>
              <label htmlFor="description" className="px-1 py-4 text-lg">
                Description
              </label>
              <input
                id="description"
                name="description"
                type="textarea"
                autoComplete="true"
                required
                className="appearance-none  w-full relative block px-4 py-4 border h-auto bg-gray-50 border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none mb-3 focus:ring-black-500 focus:border-black-500 focus:z-10 sm:text-md"
                placeholder="Breif overview of the company"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            {/* Create Company Button */}
            <button
              to={"#"}
              type="submit"
              disabled={loading}
              className="bg-[#63B76C] hover:bg-[#358046] text-white py-3 flex items-center gap-1 px-4  p-2 h-12 group after:bg-[#1D1D1D] rounded-lg justify-center w-full"
            >
              {loading ? `Creating Company...` : `Create Company`}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewCompany;
