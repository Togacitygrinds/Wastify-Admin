"use client";

import { useState, useEffect } from "react";
import { useStateValue } from "../../context/stateProvider";
import {
  deleteCompany,
  fetchCompanies,
  updateCompany,
} from "../../utils/Company";
import SearchBar from "../components/SearchBar";
import { fetchUserData } from "../../utils";
import { FiSettings, FiX } from "react-icons/fi";
import { toast } from "react-toastify";
import { MdDelete, MdDeleteOutline } from "react-icons/md";
import { BsPlusCircle } from "react-icons/bs";
import { BiTrashAlt } from "react-icons/bi";
import Image from "next/image";

// Company Item
const CompanyItem = ({ _company_data }) => {
  const {
    name,
    address,
    telephone,
    email,
    active,
    image,
    description,
    category,
  } = _company_data;
  const [loading, setLoading] = useState(false);
  const [viewSettings, setViewSettings] = useState(false);

  // Handle Delete Company Function
  const handleDeleteCompany = () => {
    deleteCompany(_company_data._id, setLoading, (data) => {
      fetchCompanies((data) => {
        dispatch({
          type: "SET_COMPANIES",
          data: data,
        });
      });
    });
  };
  return (
    <>
      <article className="relative grid grid-cols-2 h-full min-h-[200px] gap-4 px-4 border py-4 rounded-lg">
        <div className="absolute bottom-2  right-2 flex items-center gap-2">
          {/* Preview Company Details */}

          <button
            disabled={loading}
            onClick={() => setViewSettings(true)}
            className="bg-gray-200 p-2 rounded-lg"
          >
            <FiSettings className=" text-gray-800 text-lg" />
          </button>
          <button
            disabled={loading}
            onClick={handleDeleteCompany}
            className="bg-red-500  p-2 rounded-lg"
          >
            <BiTrashAlt className=" text-white text-lg" />
          </button>
        </div>
        <Image
          width={250}
          height={160}
          alt=""
          src={image}
          className="rounded-lg min-h-[160px] max-h-[150px] object-cover w-full h-full"
        />
        <div className="flex flex-col justify gap-">
          <p className="text-lg">{name}</p>
          <p className="text-sm">{active}</p>
          <p className="text-sm">{email}</p>
        </div>
      </article>
    </>
  );
};

const ViewCompaniesPage = () => {
  const [{ companies }, dispatch] = useStateValue();
  const [loading, setLoading] = useState(false);

  return (
    <div className="my-8 rounded-lg min-w-[1200px]  flex gap-4 flex-col overflow-x-hidden overflow-y-auto bg-white h-[85%] p-8 ">
      <h1 className="text-4xl font-bold">Companies</h1>

      <div className="flex">
        <h1 className="text-xl font text-gray-500">
          View & edit company details
        </h1>
        <div>
          <SearchBar placeholderText={"Search by email or name..."} />
          {/* Map the Companies */}
          <div className="items-center w-full gap-4 grid grid-cols-2 scrollbar-hidden justify-center">
            {companies.map((company, index) => (
              <CompanyItem companyData={company} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCompaniesPage;
