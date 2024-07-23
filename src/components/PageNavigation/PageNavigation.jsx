import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const PageNavigation = ({ page, setPage, totalPages }) => {
  const handlePagination = (direction) => {
    const nextPage = direction === "forward" ? page + 1 : page - 1;
    if (nextPage < 1) return;
    if (nextPage > totalPages) return;
    setPage(() => nextPage);
  };

  return (
    <div className="flex w-full items-center justify-center text-3xl">
      <div className="flex w-fit items-center gap-4 rounded-full bg-sky-50">
        <IoIosArrowForward
          value="forward"
          className="cursor-pointer"
          onClick={() => handlePagination("forward")}
        />
        <span className="text-3xl">{page}</span>
        <IoIosArrowBack
          value="back"
          className="cursor-pointer"
          onClick={() => handlePagination("back")}
        />
      </div>
    </div>
  );
};

export default PageNavigation;
