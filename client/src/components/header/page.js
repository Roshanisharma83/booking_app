"use client";
import React, { useState, useMemo } from "react";
import countryList from "react-select-country-list";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import Select from "react-select";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Header = () => {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const [startDate, setStartDate] = useState(new Date());

  const changeHandler = (value) => {
    setValue(value);
  };
  return (
    <div>
      <div className="w-full">
        <Image
          src="/background.webp"
          width={1600}
          height={0}
          style={"background:cover"}
          alt="image"
        />
      </div>
      <div className="w-3/5 h-20 bg-white -top-4 relative border m-auto flex flex-row gap-3 rounded-md shadow-lg">
        <div className="flex-row-4 flex gap-7 p-4">
          <div className="w-52 border rounded-lg">
            <span>
              <Select
                options={options}
                value={value}
                onChange={changeHandler}
                className="border-none"
                styles={"border:none"}
              />
            </span>
          </div>
          <div className="w-52 border rounded-lg">
            <div>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                calendarClassName=""
              />
            </div>
          </div>
          <div className="w-52 border rounded-lg">
            <div className="flex h-8 px-4">
              <p>Adult</p>
              <span>
                -
              </span>
              <p>children</p>

            </div>
          </div>
          <Button className="bg-tw-blue rounded-lg text-white px-4">
            Search
          </Button>
        </div>
      </div>
    </div>

    // <video width="920" height="240" controls autoplay>
    //   <source src="./video.mp4" type="video/mp4" />
    //   <track
    //     src="./video.mp4"
    //     srclang="en"
    //     label="English"
    //   />

    // </video>
  );
};

export default Header;
