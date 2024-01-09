import Shop from '@/Components/Shop/Shop';
import React from 'react';

export const metadata = {
    title: 'Bistro Boss | Shop Page',
    description: 'Best Food Restaurant',
}

const ShopPage = ({params}) => {

    return (
        <div>
            <Shop params={params.category}/>
        </div>
    );
};

export default ShopPage;