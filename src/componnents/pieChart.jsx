import React, { useEffect } from "react";
import { Chart, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip, Legend, Title);
Chart.defaults.plugins.tooltip.backgroundColor = 'rgb(0, 0, 156)';
Chart.defaults.plugins.legend.position = 'right';
Chart.defaults.plugins.legend.title.display = true;
Chart.defaults.plugins.legend.title.text = 'Employee Total Compensation';
Chart.defaults.plugins.legend.title.font = 'Helvetica Neue';
const EmployChart = ({ data }) => {
    if (!data) return null;
    const totalCompensation = Object.values(data).reduce((total, value) => total + (parseFloat(value) || 0), 0);
    // Extract data for the chart
    const chartData = [
        { label: "Salary", value: data.salary },
        { label: "401k Contribution", value: data.SalaryContribution401kAmount },
        { label: "Sales Compensation", value: data.salesAnnualCompensation },
        { label: "Bonus", value: parseInt(data.targetBonusPercentage) },
        { label: "Equity Grants", value: parseInt(data.totalOptionsGrantAmount) },
        { label: "Greenhouse Benefits", value:parseInt(data.greenhouseBenefitsAmount) },
        { label: "Carrot Benefits", value: data.carrotBenefitsAmount}, // Assuming 1 for yes, 0 for no
        { label: "Paternity Leave", value: data.paternityLeaveAmount},
        { label: "Sabbatical Leave", value: data.sabbaticalLeaveAmount},
        { label: "Thrive Stipend", value: data.thriveStipend},
        { label: "EAP", value: data.EAP},
        { label: "LifeGuides", value: data.LifeGuides},
        { label: "Vetster", value: data.Vetster},
        { label: "ClassPass", value: data.ClassPass},
    ];

    console.log("data is here", chartData)
    // Chart configuration
    const chartConfig = {
        labels: chartData.map(item => item.label),
        datasets: [{
            data: chartData.map(item => item.value),
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(255, 99, 71, 0.8)', 
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                    'rgba(0, 188, 212, 0.8)',
                'rgba(221, 221, 221, 0.8)',
                 'rgba(255, 0, 255, 0.8)', 
                'rgba(200, 200, 200, 0.8)',
            ],
        }],
    };


    return (
        <div className="relative mt-10">
            <p className="w-96 max-lg:w-auto ml-40 max-lg:ml-0 top-0 left-1/2 max-lg:left-0 transform translate-x-1/2 max-lg:translate-x-0 bg-[#24A47F] text-white text-lg px-10 max-lg:px-5 py-6 rounded-lg shadow-lg">{`Total Compensation: $${totalCompensation.toFixed(2)}`}</p>
            <div className="w-1/2 ml-60 max-lg:ml-0 max-lg:w-auto">
                <Doughnut data={chartConfig} />
            </div>
        </div>
    );
};

export default EmployChart;
