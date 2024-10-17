"use client"
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Bestsellingproductscharts() {
    const data = {
        labels: ['Laptop', 'Android Phones', 'PlayStation', 'Smart TV'],
        datasets: [
          {
            label: '# of Votes',
            data: [45, 65, 30, 50,],
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 2)',
              'rgba(54, 162, 235, 2)',
              'rgba(255, 206, 86, 2)',
              'rgba(75, 192, 192, 2)',
            ],
            borderWidth: 1,
          },
        ],
      };
  return (
    <div className="dark:bg-slate-700 bg-slate-50 p-8 rounded-lg shadow-xl">
        <h2 className="text-xl font-bold mb-4 text-center text-slate-800 dark:text-slate-50">Best Selling Products</h2>
        <Pie data={data} />
    </div>
  )
}
