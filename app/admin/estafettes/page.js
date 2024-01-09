"use client"

import SearchBar from '../components/SearchBar'

const ViewEstafettesPage = () => {
  return (
    <div className="my-8 rounded-lg min-w-[1200px]  flex gap-4 flex-col overflow-x-hidden overflow-y-auto bg-white h-[85%] p-8 ">
      <h1 className="text-4xl font-bold">Estafettes</h1>

      <div className="flex">
        <h1 className="text-xl font text-gray-500">
          View available estafettes
        </h1>
        <div>
          <SearchBar placeholderText={'Find estafette by name...'}/>
        </div>
      </div>
    </div>
  );
};

export default ViewEstafettesPage;
