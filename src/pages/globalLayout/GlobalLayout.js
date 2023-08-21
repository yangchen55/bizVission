import React from 'react';
import Headers from './Headers'
import '../globalLayout/header.css'
import { Footer } from './footer/Footer';
const GlobalLayout = ({ children }) => {

    return (
        <>
            <Headers />

            <main style={{ marginTop: '100px' }} >
                {children}
            </main>
            
            <Footer />
        </>
    )
}

export default GlobalLayout