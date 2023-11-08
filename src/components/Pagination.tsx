import React from "react";

type Props = {};

const Pagination = (props: Props) => {
  return (
    <div className="flex justify-between items-center">
      <div className="bg-red-500 rounded-md p-3 w-28 text-center text-white cursor-pointer">
        <button type="button">Попередня</button>
      </div>
      <div className="bg-red-500 rounded-md p-3 w-28 text-center text-white cursor-pointer">
        <button type="button">Наступна</button>
      </div>
    </div>
  );
};

export default Pagination;
