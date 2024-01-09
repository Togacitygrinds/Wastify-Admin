"use client";

import SearchBar from "../components/SearchBar";

const ViewUsersPage = () => {
  return (
    <div className="my-8 rounded-lg min-w-[1200px]  flex gap-4 flex-col overflow-x-hidden overflow-y-auto bg-white h-[85%] p-8 ">
      <h1 className="text-4xl font-bold">Users</h1>

      <div className="flex">
        <h1 className="text-xl font text-gray-500">
          Search for any registered Wastify user.
        </h1>
        <div>
          <SearchBar placeholderText={'Enter name to search user'}/>
        </div>
      </div>
    </div>
  );
};

export default ViewUsersPage;
