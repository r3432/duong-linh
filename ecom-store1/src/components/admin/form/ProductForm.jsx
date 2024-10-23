import React, { useState } from "react";
import ProductLabel from "./ProductLabel";
import { useForm } from "react-hook-form"
import axios from "axios";

const ProductForm = () => {

  const [isLoading,setIsLoading]=useState(false)
//khai bao react hook form

const {
  register,
  handleSubmit,
  watch,
  formState: { errors },
} = useForm()

const onSubmit =async (data) =>{
  console.log("gia tri nguoi dung nhap",data)


  const respose= await axios.post(url)
setIsLoading(false)


} 

//tao moi san pham


  const classInput = `block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-1 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`;
  return (
    <form className="max-w-full mx-auto my-10"  onSubmit={handleSubmit(onSubmit)}>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="title"
          id="floating_email"
          className={classInput}
          placeholder=" "
          {...register("title")}
        />
        <ProductLabel htmlFor="floating_email" name="Title" />
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="category"
          id="floating_password"
          className={classInput}
          placeholder=" "
          {...register("category")}
        />
        <ProductLabel htmlFor="floating_password" name="Category" />
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="image"
          id="floating_repeat_password"
          className={classInput}
          placeholder=" "
          {...register("image")}
        />
        <ProductLabel htmlFor="floating_repeat_password" name="Image" />
      </div>
      <div className="grid md:grid-cols-1 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            name="price"
            id="floating_first_name"
            className={classInput}
            placeholder=" "
            required=""
            {...register("price")}
          />

          <ProductLabel htmlFor="floating_first_name" name="Price" />
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Product Content
          </label>
          <textarea
            id="message"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Content Product..."
          ></textarea>
        </div>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Submit
      </button>
    </form>
  );
};

export default ProductForm;
