"use client";
import React, { useState } from "react";

type Props = {};

const WritePage = (props: Props) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  return (
    <div>
      <div>
        <input type="text" placeholder="Заголовок"></input>
      </div>
      <div>
        {isClicked ? (
          <>
            <button>add Image</button>
            <button>add Video</button>
            <button>Upload</button>
            <button
              type="button"
              onClick={() => setIsClicked(false)}
              className="rounded-full bg-teal-200 pr-px w-6 h-6 text-center cursor-pointer "
            >
              -
            </button>
          </>
        ) : (
          <div className="rounded-full bg-teal-200 pr-px w-6 h-6 text-center cursor-pointer ">
            <button type="button" onClick={() => setIsClicked(true)}>
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WritePage;
