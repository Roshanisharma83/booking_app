import React from "react";
import { Input, Button } from "@nextui-org/react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ListYourHotel = () => {
  return (
    <div className="w-full ">
      <div className="justify-self-center m-auto w-80">
        <h1>LIST YOUR HOTEL</h1>
        <p>Want to grow your Business. we are here for you</p>
        <br />
        <p>
          To register your hotel with Travel World.com fill the form below. Our
          team will be in touch with you shortly to take it forward.
        </p>
      </div>

      <form className="className='mt-6 w-80 border-solid m-auto my-8 bg-white">
        <h2 className="my-8 border-b-1">Contact Form</h2>
        <label>
          Full_Name
          <Input
            className="my-4 pl-4 block w-full rounded-md border text-blueGray-600 text-md"
            type="text"
            id="Full_Name"
            label="Full Name"
            name="Full Name"
            // onChange={formik.handleChange}
            // value={formik.values.password}
            // label="Full Name"
          />
        </label>
        <label>
          Email Address *
          <Input
            className="my-4 pl-4 block w-full rounded-md border text-blueGray-600 text-md"
            id="Email Address *"
            label="Email Address *"
            name="Email Address *"
            type="text"
            // onChange={formik.handleChange}
            // value={formik.values.email}
          />
        </label>
        {/* {formik?.errors.email} */}
        <label>
          Mobile/Phone"
          <Input
            className="my-4 pl-4 block w-full rounded-md border text-blueGray-600 text-md bg-none"
            id="Mobile/Phone"
            label="Mobile/Phone"
            type="text"
          />
        </label>
        <label>
          Message
          <textarea
            className="h-40 border w-80 my-6 pl-4"
            id="subject"
            name="subject"
            placeholder="Write something.."
          ></textarea>
        </label>
        <Button
          type="submit"
          className="bg-tw-blue text-white rounded-md px-4 py-2 border-solid w-80 mt-4"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ListYourHotel;
