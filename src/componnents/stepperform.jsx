import React, { useState } from "react";

function SummaryForm({ formData, resetForm }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
    <div className="px-4 py-5 sm:px-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Summary</h2>
    </div>
    <div className="border-t border-gray-200">
      <dl>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">Country</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{formData.country}</dd>
        </div>
        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">Year</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{formData.year}</dd>
        </div>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">Salary</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{formData.salary}</dd>
        </div>
        {/* Add other fields here */}
      </dl>
    </div>
    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
      <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-2">Submit</button>
      <button type="button" onClick={resetForm} className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Edit</button>
    </div>
  </form>
  );
}

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
  });

  const nextStep = () => {
    // Validation check for step 1
    if (step === 1 && formData.country === "") {
      // If the country is not selected, prevent moving to the next step
      return;
    }
    // Validation check for step 2
    else if (step === 2 && (formData.year === "" || formData.salary === "")) {
      // If year or salary is not filled, prevent moving to the next step
      return;
    }
    // Validation check for step 3
    else if (step === 3 && formData.paternityLeave === "yes" && formData.paternityLeaveWeeks === "") {
      // If paternity leave is selected but weeks are not filled, prevent moving to the next step
      return;
    }
    // Validation check for step 4
    else if (step === 4 && formData.participate401k === "yes" && formData.contributeTo401k === "") {
      // If participating in 401k but contribution is not filled, prevent moving to the next step
      return;
    }
    // Validation check for step 5
    else if (step === 5 && formData.isSalesProfessional === "yes" && formData.targetCompensation === "") {
      // If sales professional but target compensation is not filled, prevent moving to the next step
      return;
    }
    // Validation check for step 6
    else if (step === 6 && formData.equityShares === "") {
      // If equity shares are not filled, prevent moving to the next step
      return;
    }
    // Validation check for step 7
    else if (step === 7 && formData.includeBenefits === "yes" && formData.biweeklyContribution === "") {
      // If benefits are included but biweekly contribution is not filled, prevent moving to the next step
      return;
    }
  
    // If all required fields are filled, move to the next step
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
    });
  };

  const customCountryList = [
    'United States',
    'United Kingdom',
    'Canada',
    'Australia',
    'Germany',
    'France',
    'Italy',
    'Japan',
    'Spain',
    'China',
    'Russia',
    'Mexico',
    'South Korea',
    'Netherlands',
    'Switzerland',
    'Sweden',
    'Norway',
    'Denmark'
  ];

  const stepQuestions = [
    "What is your home country?",
    "What is your annual base salary?",
    "I plan to take paternity leave this year.",
    "I participate in the company’s 401k program.",
    "Are you a sales professional?",
    "Estimate how many equity shares you have.",
    "Health benefits selections",
  ];

  return (
    <div className="flex my-10 relative flex-col">
      {step === 8 ? (
        <SummaryForm formData={formData} resetForm={resetForm} />
      ) : (
        <form
          id="signUpForm"
          className="px-10 py-10 shadow-md rounded-2xl bg-white mx-auto border-solid border-2 border-gray-100 mb-8"
          action="#!"
          style={{ width: "500px" }}
        >
          <h1 className="text-lg font-bold rounded-xl text-white px-4 py-4 bg-green-600 text-center">
            Total Reward Calculator
          </h1>
          <ol className="flex w-auto text-sm px-2 py-4 mt-5 font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm">
            {stepQuestions.map((question, index) => (
              <li key={index} className={`flex items-center ${index < step - 1 ? 'text-blue-600' : ''}`}>
                <span className="flex items-center justify-center w-5 h-5 ms-3 text-xs border border-blue-600 rounded-full shrink-0">
                  {index + 1}
                </span>
                {index !== stepQuestions.length - 1 && <svg className="w-3 h-3 sm:ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
                </svg>}
              </li>
            ))}
          </ol>

          <div className="mt-10 mb-10">
            <p className="text-2xl text-center mb-10" style={{ fontSize: "20px", marginBottom: "20px" }}>
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
                {customCountryList.map((country, index) => (
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
              <div>
                <p className="hidden">I plan to take paternity leave this year.</p>
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
                    className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
                  />
                )}
              </div>
            )}

            {step === 4 && (
              <div>
                <p className="hidden">I participate in the company’s 401k program.</p>
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
                    className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
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
                    className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
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
                <p>Health benefits selections</p>
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
                      <tbody>
                        {/* Benefit details here */}
                      </tbody>
                    </table>

                    <p>Average Employer Spend per Employee:</p>
                    <ul>
                      <li>US Benefits: $1180 / $14,160 annually</li>
                      <li>Canada Benefits: $300 / $3,600 annually</li>
                      <li>Ireland Benefits: €370 / €4,440 annually</li>
                    </ul>

                    <p>
                      Alternatively, you can find the biweekly employer contribution in Workday under "Benefits" and input it here:
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
          <div className="form-footer align-middle justify-center flex gap-3 max-lg:flex-col" style={{ marginTop: "22px" }}>
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
              disabled={step === 8}
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
