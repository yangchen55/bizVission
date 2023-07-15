import React from 'react'
import GlobalLayout from '../globalLayout/GlobalLayout'
import ClosedDeal from './closedDeal/ClosedDeal'
import Hero from './HeroContent/Hero'
import Middle from './middleMarket/Middle'
import { CaseStudies } from './casestudies/CaseStudies'

const Home = ({ children }) => {
    return (
        <>
            <GlobalLayout>
                <Hero />
                <Middle />
                <ClosedDeal />
                <CaseStudies/>

            </GlobalLayout>


        </>



    )
}

export default Home