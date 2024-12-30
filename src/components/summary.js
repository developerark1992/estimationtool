import React from "react";
import { useNavigate } from "react-router-dom";
import Images from "../assets/image"; // Ensure the path is correct

const Summary = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col lg:flex-row">
      {/* Left Section */}
      <div className="w-full lg:w-1/3 bg-white flex flex-col items-center lg:items-start p-5 lg:pl-24">
        <img
          className="h-auto max-w-full pb-10 cursor-pointer"
          src={Images.backIcon}
          alt="Back Icon"
          onClick={() => navigate("/choose-content")}
        />
        <h6 className="text-neutral-500 font-light mb-2 text-xs">
          <span className="text-amber-300 font-bold">Step 7 </span>of 7
        </h6>
        <div className="flex items-center space-x-2 pb-7">
          {[...Array(7)].map((_, idx) => (
            <div
              key={idx}
              className="w-6 h-2 lg:w-9 lg:h-2 bg-amber-300 rounded-xl"
            ></div>
          ))}
        </div>
        <h2 className="text-3xl font-bold mb-4">Review and Choose</h2>
        <h1 className="text-3xl font-medium mb-4">Your Payment Plan</h1>
        <p className="mb-4 text-neutral-500 text-base font-normal">
          Check your selections and choose your preferred payment plan.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-2/3 bg-[#FFFAF2] p-5">
        <div className="bg-white border-2 border-gray-100 rounded-lg p-3">
          <h1 className="text-black font-semibold text-lg">
            Select the plan that fits your budget
          </h1>
          <div className="flex justify-between pt-5 border-b-2 border-gray-200 pb-5">
            <div>
              <h1 className="text-sky-500 font-semibold text-3xl">
                $2148
                <sub className="font-medium text-gray-400 text-base">/yearly</sub>
              </h1>
            </div>
            <div>
              <p className="text-black font-semibold text-sm">
                Select Billing Plan
              </p>
              <div className="flex">
                <button
                  className="text-xs px-4 py-2 font-semibold rounded-l bg-sky-500 text-white border-b-2 border-sky-500"
                >
                  Monthly
                </button>
                <button
                  className="text-xs px-4 py-2 font-semibold bg-white text-gray-500 border-2 border-gray-300 hover:text-sky-500 hover:border-sky-500"
                >
                  Annually
                </button>
              </div>
            </div>
          </div>

          {/* Voucher Section */}
          <div className="pt-4">
            <p className="text-black font-medium text-sm">Add a Voucher</p>
            <div className="flex items-center mt-2">
              <input
                type="text"
                name="voucher"
                placeholder="Enter voucher code"
                className="border-2 border-gray-300 p-2 rounded-lg w-2/3"
              />
              <button className="ml-3 bg-sky-500 hover:bg-opacity-50 text-xs text-white font-semibold py-2 px-5 rounded-lg">
                Apply
              </button>
            </div>
          </div>

          {/* Summary Details */}
          <div className="pt-5 border-b-2 border-gray-200">
            {[
              { label: "Website Type", value: "$1788" },
              { label: "Number of Pages (3)", value: "$360" },
              { label: "Premium Features (5)", value: "$1550" },
              { label: "Design Preferences", value: "$0" },
              { label: "Content Preferences", value: "$0" },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`flex justify-between ${
                  idx === 4 ? "border-b-2 pb-3" : "pb-2"
                }`}
              >
                <div>
                  <h1 className="text-gray-500 font-medium text-sm">
                    {item.label}
                  </h1>
                </div>
                <div>
                  <h1 className="text-black font-medium text-sm">
                    {item.value}
                  </h1>
                </div>
              </div>
            ))}
          </div>

          {/* Total Amount */}
          <div className="flex justify-between pt-3">
            <div>
              <h1 className="text-gray-500 font-medium text-sm">
                Total Amount
              </h1>
            </div>
            <div>
              <h1 className="text-black font-medium text-sm">$2948</h1>
            </div>
          </div>
          <div className="flex justify-between items-center pt-3 border-b-2 border-gray-200 pb-3">
            <div>
              <h1 className="text-gray-500 font-medium text-sm">
                Amount after discount
              </h1>
            </div>
            <div>
              <h1 className="text-sky-500 font-bold text-lg">$1503.6</h1>
            </div>
          </div>

          {/* Timeline */}
          <div className="flex justify-between items-center pt-3">
            <div>
              <h1 className="text-black font-medium text-sm">Timeline</h1>
              <p className="text-gray-500 font-medium text-xs pt-1">
                This is an estimated time to design, develop, and deploy your
                website.
              </p>
            </div>
            <div className="p-4 bg-sky-500 rounded-full w-[120px] text-center">
              <h1 className="text-white font-semibold text-sm">49 Days</h1>
            </div>
          </div>

          {/* Info */}
          <div className="flex items-center mt-5 p-4 border-2 border-gray-200 rounded-lg">
            <img src={Images.infoIcon} alt="Info Icon" />
            <p className="pl-3 text-black font-medium text-sm">
              You need to pay for features only one time.
            </p>
          </div>

          {/* Call-to-action */}
          <div className="mt-4">
            <button
              className="bg-sky-500 hover:bg-opacity-50 text-white font-semibold py-3 px-5 w-full rounded-lg"
              onClick={() => navigate("/request-call")}
            >
              Request a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
