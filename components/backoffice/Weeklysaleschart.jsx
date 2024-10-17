"use client";
import React, { useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
import  { faker } from '@faker-js/faker';
  

export default function Weeklysaleschart() {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: false,
            text: 'Chart.js Line Chart',
          },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
          {
            label: 'Totals',
            data: labels.map(() => faker.number.int({ min: 100, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
    };
    
    const tabs = [
        {
            title: "Sales",
            type: "sales"
        },
        {
            title: "Orders",
            type: "orders"
        }
    ];

    const [chartToDisplay, setChartToDisplay] = useState(tabs[0].type);

    return (
        <div className="dark:bg-slate-700 bg-slate-50 p-8 rounded-lg shadow-xl">
            <h2 className="text-xl font-bold mb-4 text-center text-slate-800 dark:text-slate-50">Weekly Sales</h2>
            <div className="p-4">

                {/* Tabs */}

                <div className="text-sm font-medium text-center text-gray-200 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                    <ul className="flex flex-wrap -mb-px">
                        {tabs.map((tab, index) => {
                            return (
                                <li className="me-2" key={index}>
                                    <button onClick={() => setChartToDisplay(tab.type)}
                                        className={chartToDisplay === tab.type
                                            ? "inline-block p-4 text-orange-600 border-b-2 border-orange-600 rounded-t-lg active dark:text-orange-500 dark:border-orange-500"
                                            : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-300 text-slate-800 hover:border-gray-700 dark:hover:text-gray-100"}>
                                        {tab.title}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Charts */}
                {
                    tabs.map((tab, index) => {
                        if (chartToDisplay === tab.type) {
                            return (
                                <Line options={options} data={data} />
                            );
                        }
                        return null;
                    })
                }
            </div>
        </div>
    );
}
