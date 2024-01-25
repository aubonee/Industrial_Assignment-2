import React from 'react';

const BudgetShow = () => {
    return (
        <div className="bg-violet-700/70 py-2">
        <div className="mx-auto max-w-sm px-5 py-8 text-center text-white">
        <div>
          <h2>Available Budget</h2>
          <p className="mt-1 text-4xl font-medium">+<span id="total-budget"> BDT 14,340.00</span></p>
        </div>

        <div
          className="mt-4 flex items-center justify-between bg-green-500 px-4 py-3 text-sm"
        >
          <p>Income</p>
          <p>+ BDT <span id="total-income">3,391.45</span></p>
        </div>

        <div
          className="mt-2 flex items-center justify-between bg-red-500 px-4 py-3 text-sm"
        >
          <span>Expenses</span>
          <p>- BDT <span id="total-expense"> 1,762.69</span></p>
        </div>
      </div>
      </div>
    );
};

export default BudgetShow;