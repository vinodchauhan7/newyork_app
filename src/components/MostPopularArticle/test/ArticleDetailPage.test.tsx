
import ArticleDetailPage from "../ArticleDetailPage"
import { render} from "@testing-library/react";
import '@testing-library/jest-dom';
import {MemoryRouter } from "react-router-dom";


test("Render articles Component", () => {
  const {container} = render(
    <MemoryRouter initialEntries={[{ pathname: '/article:id', state: {data: {}} }]}>
       <ArticleDetailPage/>
      </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
})