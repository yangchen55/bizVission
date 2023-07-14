import React from 'react';
import Headers from './Headers'
import '../globalLayout/header.css'
const GlobalLayout = ({ content }) => {

    return (
        <>
            <Headers />

            <main style={{ marginTop: '100px' }} >
                {content}
            </main>
            <footer>
                i am footer
            </footer>
        </>
    )
}

export default GlobalLayout