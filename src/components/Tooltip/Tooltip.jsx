import React, { useState } from "react";

const Tooltip = ({ children, text }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      {hovered && (
        <div className="absolute bottom-full left-1/2 z-10 mb-2 w-max -translate-x-1/2 transform rounded bg-black px-2 py-1 text-xs text-white opacity-90">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
