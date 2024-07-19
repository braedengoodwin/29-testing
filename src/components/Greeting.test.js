import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  // test 1
  test("renders Hello World as test", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  // test 2
  test("renders good to see you if the button was NOT clicked as test", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    //Assert
    const goodToSeeYou = screen.getByText("good to see you", { exact: false });
    expect(goodToSeeYou).toBeInTheDocument();
  });

  // test 3
  test("renders Changed! if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const changed = screen.getByText("Changed!");
    expect(changed).toBeInTheDocument();
  });

  // test 4
  test("does not render good to see you if the button was clicked", () => {
    //Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const notRendered = screen.queryByText("good to see you", { exact: false });
    expect(notRendered).toBeNull();
  });
});
