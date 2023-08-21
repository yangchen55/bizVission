import React, { useState } from 'react';
import './middlePagination.css'
import ReasonsToJoin from '../../platform/ReasonsToJoin/ReasonsToJoin';
import Acquiring from '../../platform/Acquiring/Acquiring';
import { Tabs, TabList, Tab, TabPanel} from 'react-tabs'

const MiddlePagination = () => {


    return (

        <Tabs className="tab-main">
            <TabList className="tab-list-container">
                <Tab className="tab-button">About Axial</Tab>
                <Tab className="tab-button">For Acquiring & Investing</Tab>
                <Tab className="tab-button">For Selling and Raising</Tab>
                <Tab className="tab-button">For Hiring an M&A Advisor</Tab>
            </TabList>
            <TabPanel>
                <h2>About Axial</h2>
                {/* Content for About Axial tab */}
            </TabPanel>
            <TabPanel>
                <ReasonsToJoin />
            </TabPanel>

            <TabPanel>
                <h2>For Selling and Raising</h2>
                {/* Content for For Selling and Raising tab */}
                <Acquiring />
            </TabPanel>
            <TabPanel>
                <h2>For Hiring an M&A Advisor</h2>
                {/* Content for For Hiring an M&A Advisor tab */}
            </TabPanel>
        </Tabs>

    );
}


export default MiddlePagination