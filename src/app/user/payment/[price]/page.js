
import Payment from '@/Components/User/Payment/Payment';
import React from 'react';

const PaymentPage = ({params}) => {
    const payment = params?.price;
  
    return (
        <div>
            <Payment amount={payment}/>
        </div>
    );
};

export default PaymentPage;