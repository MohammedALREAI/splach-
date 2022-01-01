import { Header } from 'Component/Header/Header';
import React, { FC } from 'react';


export const Layout:FC = ({ children }) => {
    return (
        <div>
            <Header/>
            {children}
        </div>
    );
};
