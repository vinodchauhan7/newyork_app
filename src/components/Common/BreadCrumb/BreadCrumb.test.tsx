
import BreadCrumb from "./index"
import { render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';

test("Render BreadCrumb Component", () => {
  const {container} = render(<BreadCrumb/>);
  const parent = screen.getByText(/Most Popular Articles/i);
  expect(container).toMatchSnapshot();
  expect(parent).toBeInTheDocument();
})