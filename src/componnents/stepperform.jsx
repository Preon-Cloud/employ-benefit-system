import React, { useState } from "react";
import EmployChart from "./pieChart";

function StepperForm() {
  const [totalCompensation, setTotalCompensation] = useState(0);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    country: "",
    salary: "",
    SalaryContribution401k: "",
    SalaryContribution401kAmount: "",
    isSalesProfessional: "",
    salesAnnualCompensation: "",
    targetBonusPercentage: "",
    totalOptionsGranted: "",
    greenhouseBenefits: "",
    biweeklyContribution: "",
    carrotBenefits: "",
    carrotBenefitsAmount: "",
    paternityLeave: "",
    paternityLeaveAmount: "",
    sabbaticalLeave: "",
    sabbaticalLeaveAmount: "",
    sabbaticalLeaveWeeks: "",
    thriveStipend: 1440.00,
    EAP: 33.60,
    LifeGuides: 72.00,
    Vetster: 18.00,
    ClassPass: 240.00
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };
  const handleChange = (e) => {
    if (e.target.value === "" || e.target.value === null) return;
    console.log(e.target.value);
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    console.log(formData);

  };

  const resetForm = () => {
    setStep(1);
    setFormData({
      country: "",
      salary: "",
      SalaryContribution401k: "",
      SalaryContribution401kAmount: "",
      isSalesProfessional: "",
      salesAnnualCompensation: "",
      targetBonusPercentage: "",
      totalOptionsGranted: "",
      totalOptionsGrantAmount: "",
      greenhouseBenefits: "",
      greenhouseBenefitsAmount: "",
      carrotBenefits: "",
      carrotBenefitsAmount: "",
      paternityLeave: "",
      paternityLeaveAmount: "",
      sabbaticalLeave: "",
      sabbaticalLeaveWeeks: "",
      thriveStipend: 1440.00,
      EAP: 33.60,
      LifeGuides: 72.00,
      Vetster: 18.00,
      ClassPass: 240.00


    });
  };
  const onSubmit = () => {
    // Destructure formData to make it easier to work with
    const {
      salary,
      SalaryContribution401k,
      SalaryContribution401kAmount,
      isSalesProfessional,
      targetBonusPercentage,
      totalOptionsGranted,
      carrotBenefits,
      paternityLeave,
      paternityLeaveAmount,
      sabbaticalLeave,
      sabbaticalLeaveWeeks,
      greenhouseBenefits,
    } = formData;
console.log("form data before " , formData)
    const parsedSalary = parseInt(salary);

    const totalCompensation =
      parsedSalary +
      (SalaryContribution401k === "yes" ? parseInt(SalaryContribution401kAmount) : 0) +
      (isSalesProfessional === "yes" ? 0 : parsedSalary * (parseInt(targetBonusPercentage) / 100)) +
      parseInt(totalOptionsGranted) +
      (carrotBenefits === "yes" ? 10852.40 : 0) +
      (paternityLeave === "yes" ? parseInt(paternityLeaveAmount) : 0) +
      (sabbaticalLeave === "yes" ? (parsedSalary / 52) * parseInt(sabbaticalLeaveWeeks) : 0) +
      1440.00 + 33.60 + 72.00 + 18.00 + 240.00;

    const contributionAmount =
      parseInt(SalaryContribution401kAmount) > 2
        ? parsedSalary * 0.02
        : parsedSalary * (parseInt(SalaryContribution401kAmount) / 100);
console.log("form data after " , contributionAmount)
    const greenhouseBenefitsAmount = greenhouseBenefits === "yes" ? 0 : 2400;

    setFormData({
      ...formData,
      totalCompensation,
      SalaryContribution401kAmount: contributionAmount,
      targetBonusPercentage: (parseInt(targetBonusPercentage) / parsedSalary) * 100,
      totalOptionsGrantAmount: carrotBenefits === "yes" ? 10852.40 : 0,
      greenhouseBenefitsAmount,
      carrotBenefitsAmount: carrotBenefits === "yes" ? 10852.40 : 0,
      paternityLeaveAmount: paternityLeave === "yes" ? (parsedSalary / 52) * 16 : 0,
      sabbaticalLeaveAmount: sabbaticalLeave === "yes" ? (parsedSalary / 52) * parseInt(sabbaticalLeaveWeeks) : 0,
    });

    console.log("Total Compensation", formData);

    setStep(11);
  };

  const customCountryList = ["United States", "Canada", "Ireland"];

  const stepQuestions = [
    "What is your home country?",
    "What is your annual base salary?",
    "I participate in the company’s 401k program.",
    "Are you a sales professional?",
    "What is your target bonus as a percentage (CVP)?",
    "What are your total options granted? Add all of your equity grants (new hire and, if applicable, Refresh, Arbor leadership)",
    "Do you take advantage of Greenhouse Medical Benefits?",
    "Have you already or do you plan to take advantage of Carrot benefits this year (for family-forming, menopause, low-T)?",
    "Do you plan to take paternity leave this year?",
    "If you plan to take sabbatical this year, enter the number of weeks you're eligible to take. If this doesn't apply to you, skip this field.",
  ];

  return (
    <div className="flex my-10 relative flex-col">
      {step === 11 ? (
        <p>
          <EmployChart data={formData} />
        </p>
      ) : (
        <form
          id="signUpForm"
          className="px-10 py-10 shadow-md rounded-2xl bg-white mx-auto border-solid border-2 border-gray-100 mb-8 "
          style={{ width: "660px" }}
        >
          <h1 className="text-lg font-bold rounded-xl text-white px-4 py-4 bg-green-600 text-center">
            Total Reward Calculator
          </h1>
          <ol className="flex w-auto text-sm px-2 py-4 mt-5 font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm">
            {stepQuestions.map((question, index) => (
              <li
                key={index}
                className={`flex items-center ${index < step - 1 ? "text-blue-600" : ""
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
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="SalaryContribution401k"
                    value={"yes"}
                    checked={formData.SalaryContribution401k === "yes"}
                    onChange={handleChange}
                    className="mr-2 w-6 h-5"
                  />
                  Yes
                </label>
                <label className="flex items-center mt-3 mb-8">
                  <input

                    type="radio"
                    name="SalaryContribution401k"
                    value={"no"}
                    checked={formData.SalaryContribution401k === "no"}
                    onChange={handleChange}
                    className="mr-2 w-6 h-5"
                  />
                  No
                </label>
                {formData.SalaryContribution401k == "yes" && (
                  <input
                    type="number"
                    placeholder="Enter the percentage of your salary you put toward it"
                    name="SalaryContribution401kAmount"
                    value={formData.SalaryContribution401kAmount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 transition-all duration-1000 ease-in-out hover:scale-105 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
                  />
                )}
              </div>
            )}
            {step === 4 && (
              <div>
                <label className="flex items-center ">
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
                <label className="flex items-center mt-3 mb-8">
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
                {formData.isSalesProfessional == "yes" && (
                  <div className="relative">
                    <p>Provide your target annual variable compensation as a dollar</p>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      $
                    </span>
                    <input
                      type="number"
                      min={0}
                      name="salesAnnualCompensation"
                      value={formData.salesAnnualCompensation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 transition-all duration-1000 ease-in-out hover:scale-105 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
                    />
                  </div>
                )}
              </div>
            )}

            {step === 5 && (
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  %
                </span>
                <input
                  type="number"
                  placeholder="Target bonus as a percentage (CVP)"
                  name="targetBonusPercentage"
                  value={formData.targetBonusPercentage}
                  onChange={handleChange}
                  className="w-full pl-10 px-4 py-3 transition-all duration-1000 ease-in-out hover:scale-105 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200 mt-3"
                />
              </div>
            )}

            {step === 6 && (
              <div>
                <input
                  type="number"
                  placeholder="Estimate how many equity shares you have"
                  name="totalOptionsGranted"
                  value={formData.totalOptionsGranted}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
                />
              </div>
            )}

            {step === 7 && (
              <>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="greenhouseBenefits"
                      value="yes"
                      checked={formData.greenhouseBenefits === "yes"}
                      onChange={handleChange}
                      className="mr-2 w-6 h-4"
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="greenhouseBenefits"
                      value="no"
                      checked={formData.greenhouseBenefits === "no"}
                      onChange={handleChange}
                      className="mr-2 w-6 h-4"
                    />
                    No
                  </label>
                </div>


              </>
            )}

            {step === 8 && (
              <div>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="carrotBenefits"
                    value={"yes"}
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
                    value={"no"}
                    checked={formData.carrotBenefits === "no"}
                    onChange={handleChange}
                    className="mr-2 w-6 h-5"
                  />
                  No
                </label>
              </div>
            )}

            {step === 9 && (
              <div>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paternityLeave"
                    value={"yes"}
                    checked={formData.paternityLeave === "yes"}
                    onChange={handleChange}
                    className="mr-2 w-6 h-5"
                  />
                  Yes
                </label>
                <label className="flex items-center mt-3 mb-5">
                  <input
                    type="radio"
                    name="paternityLeave"
                    value={"no"}
                    checked={formData.paternityLeave === "no"}
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
                    name="sabbaticalLeave"
                    value={"yes"}
                    checked={formData.sabbaticalLeave === "yes"}
                    onChange={handleChange}
                    className="mr-2 w-6 h-5"
                  />
                  Yes
                </label>
                <label className="flex items-center mt-3 mb-5">
                  <input
                    type="radio"
                    name="sabbaticalLeave"
                    value={"no"}
                    checked={formData.sabbaticalLeave === "no"}
                    onChange={handleChange}
                    className="mr-2 w-6 h-5"
                  />
                  No
                </label>
                {formData.sabbaticalLeave == "yes" && (
                  <div>
                    <p className="mb-3">Enter the number of weeks you're eligible to take</p>
                    <input
                      type="number"
                      placeholder="Enter the number of weeks you're eligible to take"
                      name="sabbaticalLeaveWeeks"
                      value={formData.sabbaticalLeaveWeeks}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
                    />
                  </div>
                )}
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
            {
              step === 10 ? (
                <button
                  type="button"
                  className="border ml- px-10 border-transparent focus:outline-none p-3 rounded-full text-center text-white bg-green-600 hover:bg-green-700 text-lg"
                  onClick={onSubmit}
                >
                  Submit
                </button>
              ) :
                <button
                  type="button"
                  className="border ml- px-10 border-transparent focus:outline-none p-3 rounded-full text-center text-white bg-green-600 hover:bg-green-700 text-lg"
                  onClick={nextStep}
                  disabled={step === 11}
                >
                  Next
                </button>
            }

          </div>
        </form>
      )}
    </div>
  );
}

export default StepperForm;
