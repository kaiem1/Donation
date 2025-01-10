import React from 'react';

const MainContainer = ({children}) => {
    return (
        <div className=' max-w-7xl mx-auto'>
            {children}
        </div>
    );
};

export default MainContainer;