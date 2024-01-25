import React from 'react';
import ExpenseList from './ExpenseList';
import IncomeList from './IncomeList';

const AllList = () => {
    return (
        <div>
            <div
      className="mx-auto my-8 grid max-w-4xl grid-cols-1 gap-8 px-5 text-sm md:grid-cols-2">
        <IncomeList></IncomeList>
<ExpenseList></ExpenseList>
    </div>
        </div>
    );
};

export default AllList;