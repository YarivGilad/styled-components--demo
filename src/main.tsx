// import React from 'react'
import ReactDOMClient from 'react-dom/client'
import { App } from './view/app'
import './styles/global.styles.css'
import { GlobalStyle } from './styles/reset.styles.ts';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container);
root.render(
    <>
        <GlobalStyle/>
        <App />
    </>
)
