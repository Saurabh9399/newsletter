import React from "react";
import ReactLogo from "../images/illustration-sign-up-desktop.svg";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate()
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      navigate("success");
    },
  });

  return (
    <div className="w-[55%] mx-auto bg-white rounded-2xl flex px-10 py-6 justify-center items-center">
      <div className="w-1/2">
        <div className="text-4xl font-bold opacity-80">Stay Updated!</div>
        <p className="text-gray-700 mt-4 mb-4">
          Join 60,000+ product managers receiving monthly <br /> updates on:
        </p>

        <div className="flex flex-col items-start">
          <div className="flex my-2 justify-center items-center">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              className="w-5 mr-3"
            >
              <g fill="none">
                <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                <path
                  stroke="#FFF"
                  strokeWidth="2"
                  d="M6 11.381 8.735 14 15 8"
                />
              </g>
            </svg>
            <span className="text-gray-600 text-xs">
              Product discovery and building what matters{" "}
            </span>
          </div>
          <div className="flex my-2 justify-center items-center">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              className="w-5 mr-3"
            >
              <g fill="none">
                <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                <path
                  stroke="#FFF"
                  strokeWidth="2"
                  d="M6 11.381 8.735 14 15 8"
                />
              </g>
            </svg>
            <span className="text-gray-600 text-xs">
              Measuring to ensure updates are a success
            </span>
          </div>
          <div className="flex my-2 items-center">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              className="w-5 mr-3"
            >
              <g fill="none">
                <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                <path
                  stroke="#FFF"
                  strokeWidth="2"
                  d="M6 11.381 8.735 14 15 8"
                />
              </g>
            </svg>
            <span className="text-gray-600 text-xs">And much more!</span>
          </div>
        </div>
        <form className="flex flex-col" onSubmit={formik.handleSubmit}>
          <label className="text-xs my-2 text-gray-700 font-bold">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            placeholder="Enter email..."
            className="m-4 p-3 border border-gray-500 rounded ml-0 mt-0 w-[93%]"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <button
            type="submit"
            className="bg-red-500 w-[93%] mx-auto text-white rounded-lg p-2 ml-0 opacity-90 hover:opacity-80 font-bold text-sm"
          >
            Subscribe to monthly newsletter
          </button>
        </form>
        {formik.errors.email ? (
          <div className="text-red-600 m-4">{formik.errors.email}</div>
        ) : null}
      </div>
      <div className="">
        <img src={ReactLogo} className="w-[100%] mx-auto" alt="background" />
      </div>
    </div>
  );
};

export default Signup;
