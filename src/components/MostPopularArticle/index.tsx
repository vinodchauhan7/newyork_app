import React from 'react';
import { usePopularArticals } from '../../hooks/usePopularArticals/use-popular-articals';
import ArticalsSizeDropDown from './ArticleDropDown';
import ShowArticals from './ShowArticals';
import PopularArticals from './PopularArticles';

const MostPopularArticals = () => {
    const {loading, popularArticals, onClickSetArticalsSize, articalsSize} = usePopularArticals();

    return (
        <PopularArticals>
          {!loading ? (
            <>
                <ArticalsSizeDropDown 
                    onClickSetArticalsSize={onClickSetArticalsSize}
                    articalsSize={articalsSize}
                    popularArticals={popularArticals!}
                />
                <ShowArticals articles={popularArticals} />
            </>
          ) : (
            <div className="loading md:h-[400px]">Loading...</div>
          )}
        </PopularArticals>
    );
};

export default MostPopularArticals;