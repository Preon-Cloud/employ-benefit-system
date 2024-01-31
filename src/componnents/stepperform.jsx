import React, { useState } from 'react';
import { countries } from 'countries-list';

function StepperForm() {
  const [step, setStep] = useState(1); // Track current step
  const [formData, setFormData] = useState({
    country: '',
    year: '',
    salary: '',
    paternityLeaveWeeks: '',
    contributeTo401k: '',
    targetCompensation: '',
    equityShares: '',
    healthBenefits: '',
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
  const countryNames = Object.values(countries).map(country => country.name);
  // Array of step questions
  const stepQuestions = [
    'What is your home country?',
    'What year do you plan to take paternity leave? What is your annual base salary?',
    'Select the number of weeks you plan to take for paternity leave:',
    'What percentage of your salary do you contribute to the 401k program?',
    'Input your target compensation for the year as a dollar amount (if applicable):',
    'Estimate how many equity shares you have:',
    'Enter your health benefits selections:',
  ];

  return (
    <div className=' flex my-10 relative flex-col' style={{marginTop:'60px',}}>
      <form
        id="signUpForm"
        className="p-12 shadow-md rounded-2xl bg-white mx-auto border-solid border-2 border-gray-100 mb-8"
        action="#!"
        style={{ width:'500px'}}
      >
      <h1 className="text-lg font-bold text-gray-700  text-center mt-12 mb-5 " >Total Reward Calculator</h1>
        {/* Render input fields based on step */}
        <div className=" mt-10 mb-10">
          <p className="text-2xl  text-center mb-10" style={{fontSize:'20px', marginBottom:'20px'}}>{stepQuestions[step - 1]}</p>
          {step === 1 && (
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
            >
              <option value="">Select your country</option>
              {countryNames.map((country, index) => (
                <option key={index} value={country}>{country}</option>
              ))}
            </select>
          )}
          
          {step === 2 && (
            <div>
              <input
                type="text"
                placeholder="Year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="w-full px-4 py-3 mb-10 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
             style={{marginBottom: '10px',}}
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
            <input
              type="number"
              placeholder="Paternity Leave Weeks"
              name="paternityLeaveWeeks"
              value={formData.paternityLeaveWeeks}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
            />
          )}
          {step === 4 && (
            <input
              type="text"
              placeholder="Contribute to 401k? (Yes/No)"
              name="contributeTo401k"
              value={formData.contributeTo401k}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
            />
          )}
          {step === 5 && (
            <input
              type="text"
              placeholder="Target Compensation (if sales professional)"
              name="targetCompensation"
              value={formData.targetCompensation}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
            />
          )}
          {step === 6 && (
            <input
              type="number"
              placeholder="Estimate Equity Shares"
              name="equityShares"
              value={formData.equityShares}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
            />
          )}
          {step === 7 && (
            <textarea
              placeholder="Health Benefits Selections"
              name="healthBenefits"
              value={formData.healthBenefits}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
            />
          )}
        </div>
        {/* Previous / Next buttons */}
        <div className="form-footer flex gap-3 max-lg:flex-col " style={{marginTop:'22px'}}>
          <button
            type="button"
            className="flex-1 focus:outline-none border border-gray-300 py-2 px-5 rounded-lg shadow-sm text-center text-gray-700 bg-white hover:bg-gray-100 text-lg"
            onClick={prevStep}
            disabled={step === 1} // Disable if it's the first step
          >
            Previous
          </button>
          <button
            type="button"
            className="flex-1 border border-transparent focus:outline-none p-3 rounded-lg text-center text-white bg-indigo-600 hover:bg-indigo-700 text-lg"
            onClick={nextStep}
            disabled={step === 7} // Disable if it's the last step
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default StepperForm;
