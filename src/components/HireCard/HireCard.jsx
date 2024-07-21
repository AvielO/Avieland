import React from "react";

const HireCard = ({
  workerPictureURL,
  title,
  resourcePictureURL,
  price,
  resourceRef,
}) => {
  return (
    <div className="flex flex-col items-center gap-2 rounded-3xl bg-sky-100 p-4 drop-shadow-md">
      <img
        className="h-64 w-56 rounded-3xl"
        src={workerPictureURL}
        alt={title}
      />
      <span className="text-2xl font-semibold">{title}</span>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-semibold">עלות</span>
        <div className="flex items-center">
          <img className="h-8 w-8" src={resourcePictureURL} alt={`${title}`} />
          <span className="text-2xl">{price}</span>
        </div>
      </div>
      <div className="flex items-center gap-1 text-xl">
        <label>כמות: </label>
        <input
          ref={resourceRef}
          className="h-6 w-12 rounded-full text-center"
        />
      </div>
    </div>
  );
};

export default HireCard;
