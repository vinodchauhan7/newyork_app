import React from 'react';
import { useLocation } from 'react-router-dom';
import { getMediaPicture } from '../../lib/utils';

const ArticleDetailPage = () => {
    let { state } = useLocation();
    return (
        <div className='flex flex-col md:flex-row justify-center gap-2 mt-8' data-testid="articleCardDetail">
            <div className='w-full md:w-1/2 h-1/2 bg-gray-200'>
            <img src={getMediaPicture(state.data?.media)?.url} alt={state.data?.title} className='w-full h-full object' />
            </div>
            <div className='w-full md:w-1/2 h-1/2'>
                <h1 className='font-bold text-2xl'>{state.data.title}</h1>
                <div className='flex-grow border-t-2 border-black'></div>
                <p className='font-light text-xl'>{state.data.abstract}</p>
            </div> 

        </div>
    )
}

export default ArticleDetailPage;