import React, { useState } from "react";
import SummaryForm from "./Sumarrayform";

function StepperForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    country: "",
    year: "",
    salary: "",
    paternityLeave: "",
    paternityLeaveWeeks: "",
    participate401k: "",
    contributeTo401k: "",
    targetCompensation: "",
    equityShares: "",
    healthBenefits: "",
    includeBenefits: "",
    biweeklyContribution: "",
    targetBonusPercentage: "",
    greenhouseBenefits: false,
    carrotBenefits: "",
  });

  const nextStep = () => {
    if (step === 1 && formData.country === "") {
      return;
    } else if (step === 2 && formData.salary === "") {
      return;
    } else if (
      step === 3 &&
      formData.paternityLeave === "yes" &&
      formData.paternityLeaveWeeks === ""
    ) {
      return;
    } else if (
      step === 4 &&
      formData.participate401k === "yes" &&
      formData.contributeTo401k === ""
    ) {
      return;
    } else if (
      step === 5 &&
      formData.isSalesProfessional === "yes" &&
      formData.targetCompensation === ""
    ) {
      return;
    } else if (step === 6 && formData.equityShares === "") {
      return;
    } else if (
      step === 7 &&
      formData.includeBenefits === "yes" &&
      formData.biweeklyContribution === ""
    ) {
      return;
    }

    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const resetForm = () => {
    setStep(1);
    setFormData({
      country: "",
      year: "",
      salary: "",
      paternityLeave: "",
      paternityLeaveWeeks: "",
      participate401k: "",
      contributeTo401k: "",
      targetCompensation: "",
      equityShares: "",
      healthBenefits: "",
      includeBenefits: "",
      biweeklyContribution: "",
      targetBonusPercentage: "",
      greenhouseBenefits: false,
      carrotBenefits: "",
    });
  };

  const customCountryList = [
    "United States",
    "United Kingdom",
    "Canada",
    "Ireland",
  ];

  const stepQuestions = [
    "What is your home country?",
    "What is your annual base salary?",
    "I plan to take paternity leave this year.",
    "I participate in the company’s 401k program.",
    "Are you a sales professional?",
    "Estimate how many equity shares you have.",
    "Health benefits selections",
    "What is your target bonus as a percentage (CVP)?",
    "Do you take advantage of Greenhouse Medical Benefits?",
    "Have you already or do you plan to take advantage of Carrot benefits this year (for family-forming, menopause, low-T)?",
  ];

  return (
    <div className="flex my-10 relative flex-col">
      {step === 11 ? (
        <SummaryForm formData={formData} resetForm={resetForm} />
      ) : (
        <form
          id="signUpForm"
          className="px-10 py-10 shadow-md rounded-2xl bg-white mx-auto border-solid border-2 border-gray-100 mb-8 "
          action="#!"
          style={{ width: "660px" }}
        >
          <h1 className="text-lg font-bold rounded-xl text-white px-4 py-4 bg-green-600 text-center">
            Total Reward Calculator
          </h1>
          <ol className="flex w-auto text-sm px-2 py-4 mt-5 font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm">
            {stepQuestions.map((question, index) => (
              <li
                key={index}
                className={`flex items-center ${
                  index < step - 1 ? "text-blue-600" : ""
                }`}
              >
                <span className="flex items-center justify-center w-5 h-5 ms-3 text-xs border border-blue-600 rounded-full shrink-0">
                  {index + 1}
                </span>
                {index !== stepQuestions.length - 1 && (
                  <svg
                    className="w-3 h-3 sm:ms-3 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 12 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m7 9 4-4-4-4M1 9l4-4-4-4"
                    />
                  </svg>
                )}
              </li>
            ))}
          </ol>

          <div className="mt-10 mb-10 ">
            <p
              className="text-2xl text-center mb-10"
              style={{ fontSize: "20px", marginBottom: "20px" }}
            >
              {stepQuestions[step - 1]}
            </p>

            {step === 1 && (
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-4 py-3 transition-all duration-1000 ease-in-out hover:scale-105 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
              >
                <option value="">Select your country</option>
                {customCountryList.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            )}

{step === 2 && (
  <div className="relative">
    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
      $
    </span>
    <input
      type="number"
      placeholder="Annual Base Salary"
      name="salary"
      value={formData.salary}
      onChange={handleChange}
      className="w-full pl-10 px-4 py-3 transition-all duration-1000 ease-in-out hover:scale-105 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200 mt-3"
    />
  </div>
)}


            {step === 3 && (
              <div>
                <p className="hidden">
                  I plan to take paternity leave this year.
                </p>
                <label className="flex items-center ">
                  <input
                    type="radio"
                    name="paternityLeave"
                    value="yes"
                    checked={formData.paternityLeave === "yes"}
                    onChange={handleChange}
                    className="mr-2 w-6 h-5"
                  />
                  Yes
                </label>
                <label className="flex items-center mt-3 mb-8">
                  <input
                    type="radio"
                    name="paternityLeave"
                    value="no"
                    checked={formData.paternityLeave === "no"}
                    onChange={handleChange}
                    className="mr-2 w-6 h-5"
                  />
                  No
                </label>
                {formData.paternityLeave === "yes" && (
                  <input
                    type="number"
                    placeholder="How many weeks in the calendar year?"
                    name="paternityLeaveWeeks"
                    value={formData.paternityLeaveWeeks}
                    onChange={handleChange}
                    className="w-full px-4 py-3 transition-all duration-1000 ease-in-out hover:scale-105 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
                  />
                )}
              </div>
            )}

            {step === 4 && (
              <div>
                <p className="hidden">
                  I participate in the company’s 401k program.
                </p>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="participate401k"
                    value="yes"
                    checked={formData.participate401k === "yes"}
                    onChange={handleChange}
                    className="mr-2 w-6 h-5"
                  />
                  Yes
                </label>
                <label className="flex items-center mt-3 mb-5">
                  <input
                    type="radio"
                    name="participate401k"
                    value="no"
                    checked={formData.participate401k === "no"}
                    onChange={handleChange}
                    className="mr-2 w-6 h-5"
                  />
                  No
                </label>
                {formData.participate401k === "yes" && (
                  <input
                    type="number"
                    placeholder="What percentage of your salary do you contribute?"
                    name="contributeTo401k"
                    value={formData.contributeTo401k}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md transition-all duration-1000 ease-in-out hover:scale-105 text-gray-700 font-medium border-solid border-2 border-gray-200"
                  />
                )}
              </div>
            )}

            {step === 5 && (
              <div>
                <p className="hidden">Are you a sales professional?</p>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="isSalesProfessional"
                    value="yes"
                    checked={formData.isSalesProfessional === "yes"}
                    onChange={handleChange}
                    className="mr-2 w-6 h-5"
                  />
                  Yes
                </label>
                <label className="flex items-center mt-3 mb-5">
                  <input
                    type="radio"
                    name="isSalesProfessional"
                    value="no"
                    checked={formData.isSalesProfessional === "no"}
                    onChange={handleChange}
                    className="mr-2 w-6 h-5"
                  />
                  No
                </label>
                {formData.isSalesProfessional === "yes" && (
                  <input
                    type="text"
                    placeholder="Input your target compensation for the year as a dollar amount"
                    name="targetCompensation"
                    value={formData.targetCompensation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 transition-all duration-1000 ease-in-out hover:scale-105 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
                    maxLength={500}
                  />
                )}
              </div>
            )}

            {step === 6 && (
              <div>
                <p hidden>Estimate how many equity shares you have.</p>
                <input
                  type="number"
                  placeholder="Estimate how many equity shares you have"
                  name="equityShares"
                  value={formData.equityShares}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
                />
              </div>
            )}

            {step === 7 && (
              <div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="includeBenefits"
                      value="yes"
                      checked={formData.includeBenefits === "yes"}
                      onChange={handleChange}
                      className="mr-2 w-6 h-4"
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="includeBenefits"
                      value="no"
                      checked={formData.includeBenefits === "no"}
                      onChange={handleChange}
                      className="mr-2 w-6 h-4"
                    />
                    No
                  </label>
                </div>

                {formData.includeBenefits === "yes" && (
                  <div>
                    <p>Benefit Details:</p>
                    <table className="w-full mb-4">
                      <thead>
                        <tr>
                          <th>Benefit</th>
                          <th>US</th>
                          <th>Ireland</th>
                          <th>Canada</th>
                          <th>UK</th>
                        </tr>
                      </thead>
                      <tbody>{/* Benefit details here */}</tbody>
                    </table>

                    <p>Average Employer Spend per Employee:</p>
                    <ul>
                      <li>US Benefits: $1180 / $14,160 annually</li>
                      <li>Canada Benefits: $300 / $3,600 annually</li>
                      <li>Ireland Benefits: €370 / €4,440 annually</li>
                    </ul>

                    <p>
                      Alternatively, you can find the biweekly employer
                      contribution in Workday under "Benefits" and input it
                      here:
                    </p>
                    <input
                      type="text"
                      placeholder="Biweekly employer contribution"
                      name="biweeklyContribution"
                      value={formData.biweeklyContribution}
                      onChange={handleChange}
                      className="w-full px-4 transition-all duration-1000 ease-in-out hover:scale-105 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
                    />
                  </div>
                )}
              </div>
            )}

            {step === 8 && (
              <div>
                <input
                  type="number"
                  placeholder="Enter your target bonus percentage"
                  name="targetBonusPercentage"
                  value={formData.targetBonusPercentage}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
                />
              </div>
            )}

{step === 9 && (
  <div>
    <label className="flex items-center">
      <input
        type="radio"
        name="greenhouseBenefits"
        value="yes"
        checked={formData.greenhouseBenefits === "yes"}
        onChange={handleChange}
        className="mr-2 w-6 h-5"
      />
      Yes
    </label>
    <label className="flex items-center mt-3 mb-5">
      <input
        type="radio"
        name="greenhouseBenefits"
        value="no"
        checked={formData.greenhouseBenefits === "no"}
        onChange={handleChange}
        className="mr-2 w-6 h-5"
      />
      No
    </label>
  </div>
)}


            {step === 10 && (
              <div>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="carrotBenefits"
                    value="yes"
                    checked={formData.carrotBenefits === "yes"}
                    onChange={handleChange}
                    className="mr-2 w-6 h-5"
                  />
                  Yes
                </label>
                <label className="flex items-center mt-3 mb-5">
                  <input
                    type="radio"
                    name="carrotBenefits"
                    value="no"
                    checked={formData.carrotBenefits === "no"}
                    onChange={handleChange}
                    className="mr-2 w-6 h-5"
                  />
                  No
                </label>
              </div>
            )}
          </div>
          <div
            className="form-footer align-middle justify-center flex gap-3 max-lg:flex-col"
            style={{ marginTop: "22px" }}
          >
            <button
              type="button"
              className="focus:outline-none border-2 border-green-600 py-2 px-5 rounded-full shadow-sm text-center text-gray-700 bg-white hover:bg-gray-100 text-lg"
              onClick={prevStep}
              disabled={step === 1}
            >
              Previous
            </button>
            <button
              type="button"
              className="border ml- px-10 border-transparent focus:outline-none p-3 rounded-full text-center text-white bg-green-600 hover:bg-green-700 text-lg"
              onClick={nextStep}
              disabled={step === 11}
            >
              Next
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default StepperForm;
