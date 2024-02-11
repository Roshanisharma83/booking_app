"use client";
import React, { useState, useMemo } from "react";
import countryList from "react-select-country-list";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import styles from './styles.module.css'
//import Select from "react-select";
//import DatePicker from "react-datepicker";
//import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';



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
      <div className={styles.banner}>
        <div className="m-0 align-middle"><input width={100} /></div>
      
        {/* <Image
          src="/nature.jpg"
          width={1600}
          height={100}
          alt="image"
        />
         */}
        
      </div>
      <div className="w-3/5 h-20 bg-white -top-4 relative border m-auto flex flex-row gap-3 rounded-md shadow-lg">
        <div className="flex-row-4 flex gap-7 p-4">
          <div className="w-52 border rounded-lg">
            <span>
              <select
                options={options}
                value={value}
                onChange={changeHandler}
                className="border-none"
                
              />
            </span>
          </div>
          <div className="w-52 border rounded-lg">
            {/* <div>
            <DateRangePicker localeText={{ start: 'Check-in', end: 'Check-out' }} />
            </div> */}
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

    
  );
};

export default Header;
