import React from 'react'
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Hero from './Hero';
import Universe from './Universe';

function ProductPage() {
    return ( 
        <>
            <Hero />
            <LeftSection />
            <RightSection />
            <LeftSection />
            <RightSection />
            <LeftSection />
            <Universe />
        </>

     );
}

export default ProductPage;