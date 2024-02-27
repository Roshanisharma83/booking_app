"use client";
import React, { useState, useMemo } from "react";
import countryList from "react-select-country-list";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import styles from "./styles.module.css";
import { IoBedOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

//import Select from "react-select";
//import DatePicker from "react-datepicker";
//import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

import "react-datepicker/dist/react-datepicker.css";

const Header = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOption, setOpenOption] = useState(false);
  //const [counter, setCounter] = useState(2);
  const [options, setOptions] = useState({
    adult: 1,
    childern: 0,
    room: 1,
  });
  const handleOption = (name, operation) => {


    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name]++ : options[name]--,
      };
    });
  };

  // room count
  // const handleIncrement = () => {
  //   if (options < 30) {
  //     setOptions(options + 1)
  //   }
  // }
  // const handleDecrement = () => {
  //   if (options > 1) {
  //     setOptions(options - 1)
  //   }
  // }

  return (
    <div>
      <div className={styles.banner}>
        <div className="m-0 align-middle"></div>
      </div>
      <div className="w-9/12 h-20 bg-white -top-8 relative border m-auto flex flex-row rounded-md shadow-lg">
        <div className="flex-row-4 flex gap-7 py-4 px-2">
          {/* search place */}
          <div className="w-72 border rounded-lg p-2 flex">
            <IoBedOutline className="mr-2 mt-1" />
            <input type="text" placeholder="Where are you going" className="" />
          </div>
          <div className="w-72 border rounded-lg p-2 flex z-50">
            <CiCalendar className="mr-2 mt-1" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className=""
            >{`${format(date[0].startDate, "mm/dd/yyyy")} to ${format(
              date[0].endDate,
              "mm/dd/yyyy"
            )}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="absolute top-11 bg-white"
              />
            )}
          </div>
          <div className="w-72 border rounded-lg p-2 flex z-50">
            <CiUser className="mr-2 mt-1" />
            <span onClick={() => setOpenOption(!openOption)}>{`${options.adult} adult. ${options.childern} childern . ${options.room} room`} </span>
            {openOption && (
            <div className={styles.options}>
              <div className={styles.optionsItem}>
                <span className={styles.optionText}>Adult</span>
                <div className={styles.optionCounter}>
                  <button
                    disabled= {options.adult < 1}
                    className={styles.optionCounterbtn}
                    onClick={() => handleOption("adult", "d")}
                  >
                    -
                  </button>
                  <span className={styles.optionCountnum}>{options.adult}</span>
                  <button
                    className={styles.optionCounterbtn}
                    onClick={() => handleOption("adult", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className={styles.optionsItem}>
                <span className={styles.optionText}>Childern</span>
                <div className={styles.optionCounter}>
                  <button
                    disabled= {options.room < 0}
                    className={styles.optionCounterbtn}
                    onClick={() => handleOption("childern", "d")}
                  >
                    -
                  </button>
                  <span className={styles.optionCountnum}>
                    {options.childern}
                  </span>
                  <button
                    className={styles.optionCounterbtn}
                    onClick={() => handleOption("childern", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className={styles.optionsItem}>
                <span className={styles.optionText}>Room</span>
                <div className={styles.optionCounter}>
                  <button
                    disabled= {options.childern <  1}
                    className={styles.optionCounterbtn}
                    onClick={() => handleOption("room", "d")}
                  >
                    -
                  </button>
                  <span className={styles.optionCountnum}>
                    {options.room}
                  </span>
                  <button
                    className={styles.optionCounterbtn}
                    onClick={() => handleOption("room", "i")}
                  >
                    +
                  </button>
                </div>
                
              </div>
            </div>
)}
          </div>
          <Button className="bg-tw-blue rounded-lg text-white px-4">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
