import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price*100;
    const publishableKey ='pk_test_vO8fVHSmuSAQt5HCAXmcAgcN00P6zYBUYC';

    const onToken = token =>{
        console.log(token);
        alert('payment successful');
    }
    return(
        <StripeCheckout label='Pay Now' name='farrod ltd.'         billingAddress
        shippingAddress
        image='https://i.pinimg.com/564x/90/7a/29/907a297621ccb275287760b48ddcdb59.jpg'
        description={`your total is $${price}`}
        panelLabel='Pay Now' 
        token={publishableKey}/>

        )
}

export default StripeCheckoutButton;