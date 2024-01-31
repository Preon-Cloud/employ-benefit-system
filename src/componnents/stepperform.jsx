import React, { useState } from "react";
import { countries } from "countries-list";

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
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const countryNames = Object.values(countries).map((country) => country.name);
  const stepQuestions = [
    "What is your home country?",
    "What year do you plan to take paternity leave? What is your annual base salary?",
    "Do you plan to take paternity leave this year?",
    "Select the number of weeks you plan to take for paternity leave:",
    "I participate in the company’s 401k program.",
    "What percentage of your salary do you contribute?",
    "Input your target compensation for the year as a dollar amount (if applicable):",
    "Estimate how many equity shares you have:",
    "Enter your health benefits selections:",
  ];

  return (
    <div
      className=" flex my-10 relative flex-col"
      style={{ marginTop: "60px" }}
    >
      <form
        id="signUpForm"
        className="p-12 shadow-md rounded-2xl bg-white mx-auto border-solid border-2 border-gray-100 mb-8"
        action="#!"
        style={{ width: "500px" }}
      >
        <h1 className="text-lg font-bold  rounded-xl text-white px-4 py-4 bg-green-600  text-center  ">
          Total Reward Calculator
        </h1>

        <div className=" mt-10 mb-10">
          <p
            className="text-2xl  text-center mb-10"
            style={{ fontSize: "20px", marginBottom: "20px" }}
          >
            {stepQuestions[step - 1]}
          </p>
          {step === 1 && (
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
            >
              <option value="">Select your country</option>
              {countryNames.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          )}

          {step === 2 && (
            <div>
              <input
                type="date"
                placeholder="Year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="w-full px-4 py-3 mb-10 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
                style={{ marginBottom: "10px" }}
              />

              <input
                type="text"
                placeholder="Annual Base Salary"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200 mt-3"
              />
            </div>
          )}
          {step === 3 && (
            <select
              name="paternityLeave"
              value={formData.paternityLeave}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          )}
          {step === 4 && formData.paternityLeave === "yes" && (
            <input
              type="number"
              placeholder="Paternity Leave Weeks"
              name="paternityLeaveWeeks"
              value={formData.paternityLeaveWeeks}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
            />
          )}
          {step === 5 && (
            <select
              name="isSalesProfessional"
              value={formData.isSalesProfessional}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          )}
          {step === 6 && formData.isSalesProfessional === "yes" && (
            <div style={{ position: "relative", display: "inline-block" }}>
              <span
                style={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  left: "10px",
                }}
              >
                $
              </span>
              <input
                type="text"
                placeholder="Input your target compensation for the year as a dollar amount"
                name="targetCompensation"
                value={formData.targetCompensation}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
                style={{ paddingLeft: "40px" }}
              />
            </div>
          )}

          {step === 7 && (
            <div style={{ position: "relative", display: "inline-block" }}>
              <span
                style={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  left: "10px",
                }}
              >
                $
              </span>
              <input
                type="text"
                placeholder="Input your target compensation for the year as a dollar amount"
                name="targetCompensation"
                value={formData.targetCompensation}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
                style={{ paddingLeft: "40px" }}
              />
            </div>
          )}
          {step === 8 && (
            <input
              type="number"
              placeholder="Estimate Equity Shares"
              name="equityShares"
              value={formData.equityShares}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
            />
          )}
          {step === 9 && (
            <div>
              <p className="text-lg mb-4">
                Would you like to include all benefit elections into our
                calculator?
              </p>
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
                  <p className="text-lg mb-4">Benefit Details:</p>
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
                    <tbody></tbody>
                  </table>

                  <p className="text-lg">
                    Average Employer Spend per Employee:
                  </p>
                  <ul>
                    <li>US Benefits: $1180 / $14,160 annually</li>
                    <li>Canada Benefits: $300 / $3,600 annually</li>
                    <li>Ireland Benefits: €370 / €4,440 annually</li>
                  </ul>

                  <p>
                    Alternatively, you can find the biweekly employer
                    contribution in Workday under "Benefits" and input it here:
                  </p>
                  <input
                    type="text"
                    placeholder="Biweekly employer contribution"
                    name="biweeklyContribution"
                    value={formData.biweeklyContribution}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
                  />
                </div>
              )}
            </div>
          )}
        </div>
        <div
          className="form-footer align-middle justify-center flex gap-3 max-lg:flex-col "
          style={{ marginTop: "22px" }}
        >
          <button
            type="button"
            className="  focus:outline-none border-2 border-green-600 py-2 px-5 rounded-full shadow-sm text-center text-gray-700 bg-white hover:bg-gray-100 text-lg"
            onClick={prevStep}
            disabled={step === 1}
          >
            Previous
          </button>
          <button
            type="button"
            className=" border ml-  px-10 border-transparent focus:outline-none p-3 rounded-full text-center text-white bg-green-600 hover:bg-green-700 text-lg"
            onClick={nextStep}
            disabled={step === 9}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default StepperForm;
