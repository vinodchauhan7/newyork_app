import React from 'react';

type Props = {
    children: React.ReactNode
};

const PopularArticals = ({children}: Props) => {
    return (
        <div className='font-normal text-2xl'>
            {children}    
        </div>
    );
};

export default PopularArticals;