"use client";

import { fetchUserData } from "../../utils";
import { useState, useEffect } from "react";
import { useStateValue } from "../../context/stateProvider";
import {
  getSanitaryWorkerById,
  getSanitaryWorkers,
  deleteSanitaryWorkerById,
  updateSanitaryWorkerById,
} from "../../utils/Estafette";
import { FiSettings, FiX } from "react-icons/fi";
import { MdDelete, MdDeleteOutline } from "react-icons/md";
import { BsPlusCircle } from "react-icons/bs";
import { BiTrashAlt } from "react-icons/bi";
import Image from "next/image";
import SearchBar from "../components/SearchBar";

const EstafetteItem = ({ estafette }) => {
  const handleDeleteSanitaryWorker = () => {
    deleteSanitaryWorkerById(estafette._id, (data) => {
      getSanitaryWorkers("estafette", (data) => {
        dispatch({
          type: "SET_ESTAFETTES",
          data: data,
        });
      });
    });
  };

  // Displays the Estafette in a window
  return (
    <div className=" relative rounded-lg w-full px-4 py-4 gap-2 border flex flex-col ">
      <button
        onClick={handlePolicyDelete}
        className="bg-red-500 absolute bottom-2 right-2 p-2 rounded-lg"
      >
        <BiTrashAlt className=" text-white text-lg" />
      </button>

      <div className="flex gap-2 items-center">
        <div>
          <Image
            width={90}
            height={90}
            alt=""
            src={estafette.company.image}
            className="object-cover w-[60px] h-[60px] rounded-lg"
          />
        </div>
        <div>
          <p className="truncate text-sm"> {estafette.name}</p>
          <p className="font-medium text-lg">{estafette.employeeID}</p>
          <p className="truncate"> {estafette.company?.name}</p>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className="flex items-center gap-1">
          <p className="truncate flex ">
            {" "}
            {/* Shield Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
              />
            </svg>{" "}
          </p>
          <p className="truncate text-sm"> {estafette?.company?.length} in 1</p>
        </div>
        <div className="flex items-center col-span-2 gap-1">
          <p className="truncate text-sm"> {estafette.ratings} </p>
        </div>
      </div>
    </div>
  );
};

const ViewEstafettesPage = () => {
  const [{ estafettes }, dispatch] = useStateValue();
  const [loading, setLoading] = useState(false);
  const [viewSettings, setViewSettings] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchUserData("estafette", (data) => {
      dispatch({
        type: "SET_ESTAFETTES",
        data,
      });
      setLoading(false);
    });
  }, [dispatch]);

  return (
    <div className="my-8 rounded-lg min-w-[1200px]  flex gap-4 flex-col overflow-x-hidden overflow-y-auto bg-white h-[85%] p-8 ">
      <h1 className="text-4xl font-bold">Estafettes</h1>

      <div className="flex">
        <h1 className="text-xl font text-gray-500">
          View & edit available estafettes
        </h1>
        <div>
          <SearchBar placeholderText={"Find estafette by name..."} />
          <div className="items-center w-full gap-4 grid grid-cols-3 scrollbar-hidden justify-center">
            {estafettes.map((estafette, index) => (
              <EstafetteItem estafette={estafette} key={estafette._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEstafettesPage;
