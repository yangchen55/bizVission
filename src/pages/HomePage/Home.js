import React from 'react'
import Pursue from '../globalLayout/footer/Pursue'
import GlobalLayout from '../globalLayout/GlobalLayout'
import ClosedDeal from './closedDeal/ClosedDeal'
import Hero from './HeroContent/Hero'
import Middle from './middleMarket/Middle'
import MiddlePagination from './MiddlePagination/MiddlePagination'

const Home = ({ children }) => {
    return (
        <>
            <GlobalLayout>
                <Hero />
                <MiddlePagination />
                <Middle />
                <ClosedDeal />
                <Pursue />
            </GlobalLayout>


        </>



    )
}

export default Home