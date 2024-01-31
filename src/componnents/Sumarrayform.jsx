import React from "react";

export default function SummaryForm({ formData, resetForm }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert("Form submitted");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
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
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Paternity Leave</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{formData.paternityLeave}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Paternity Leave Weeks</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{formData.paternityLeaveWeeks}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Participate in 401k</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{formData.participate401k}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Contribute to 401k</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{formData.contributeTo401k}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Target Compensation</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{formData.targetCompensation}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Equity Shares</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{formData.equityShares}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Health Benefits</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{formData.healthBenefits}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Include Benefits</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{formData.includeBenefits}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Biweekly Contribution</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{formData.biweeklyContribution}</dd>
          </div>
        </dl>
      </div>
      <div className="flex justify-end mt-4 px-4 py-3 bg-gray-50 text-right sm:px-6">
 
        <button
          type="button"
          onClick={resetForm}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Reset
        </button>
        <button
          type="submit"
          className="inline-flex justify-center ml-6 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Submit
        </button>
        </div>
    </form>
  );
}


