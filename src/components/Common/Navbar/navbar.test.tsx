
import Navbar from "./index"
import { render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';

test("Render Navbar Component", () => {
  const {container} = render(<Navbar/>);
  const parent = screen.getByText(/The New York Times/i);
  expect(container).toMatchSnapshot();
  expect(parent).toBeInTheDocument();
})