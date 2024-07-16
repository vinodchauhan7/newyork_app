import React from 'react';

type Props = {};

const BreadCrumb = (props: Props) => {
    return (
        <div className="flex py-5 items-center">
            <div className="flex-grow border-t-2 border-black"></div>
                <span className="flex-shrink mx-4 text-1xl md:text-2xl text-blue-950">Most Popular Articles</span>
            <div className="flex-grow border-t-2 border-black"></div>
        </div>
    );
}

export default BreadCrumb;