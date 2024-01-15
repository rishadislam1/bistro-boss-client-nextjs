"use client"

import HeaderButton from "@/Components/Button/HeaderButton";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";



const stripePromise = loadStripe('pk_test_51OYpcdCZyt28vTMkEOoR34oP3CnVN9lxvViw29oDp3v1HykmDbFrvqsPItYZGDaRzUWTUM67JG0TMBu9Xas8g1Gk001d3IlMVv');

const Payment = ({amount}) => {
    
    return (
        <div>
            <div>
                <HeaderButton subheader={'Please Proceed'} header={'PAYMENT'}/>
            </div>
            <Elements stripe={stripePromise}>
            <CheckOutForm amount= {amount}></CheckOutForm>
            </Elements>
           
        </div>
    );
};

export default Payment;