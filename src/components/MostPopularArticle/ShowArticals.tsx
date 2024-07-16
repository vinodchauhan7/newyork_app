import React from "react";
import { getMediaPicture, getMonthAndDate } from "../../lib/utils";
import { Link } from "react-router-dom";

type Props = {
  articles: any;
};

const ShowArticals = ({ articles }: Props) => {
  // const openInNewTab = (url: string): void => {
  //   window.open(url, "_blank", "noopener,noreferrer");
  // };

  return (
    <div className="flex justify-between items-start gap-3 py-2">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {articles?.map((article: any) => (
            <Link to={`article/${article?.id}`} state={{data:article}} key={article?.id}>

            <article className="flex max-w-xl flex-col items-start justify-between border-gray-100 border-2 p-2 cursor-pointer" data-testid="articleCard"
            key={article?.id}
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time className="text-gray-500">
                  {getMonthAndDate(article?.published_date)}
                </time>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <span className="absolute inset-0"></span>
                  {article?.title}
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {article?.abstract}
                </p>
              </div>
              <div className=" mt-8 flex items-center gap-x-4">
                <img
                  src={getMediaPicture(article?.media)?.url}
                  alt={article?.title}
                  className="object-cover h-48 w-96"
                />
              </div>
            </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowArticals;
