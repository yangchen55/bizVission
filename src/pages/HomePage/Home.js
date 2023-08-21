import React from 'react'
import Pursue from '../globalLayout/footer/Pursue'
import GlobalLayout from '../globalLayout/GlobalLayout'
import ClosedDeal from './closedDeal/ClosedDeal'
import Hero from './HeroContent/Hero'
import Middle from './middleMarket/Middle'
import MiddlePagination from './MiddlePagination/MiddlePagination'
import { CaseStudies } from './casestudies/CaseStudies'

const Home = ({ children }) => {
    return (
        <>
            <GlobalLayout>
                <Hero />
                <MiddlePagination />
                <Middle />
                <ClosedDeal />
                <Pursue />
                <CaseStudies/>
            </GlobalLayout>


        </>



    )
}

export default Home