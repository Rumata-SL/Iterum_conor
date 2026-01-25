import {Button, ThemeButton} from "shared/ui/Button/Button";
import {render, screen} from "@testing-library/react";

describe("Button", () => {
    test("render button text", () => {
        render(<Button>Test</Button>);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
    test("add class in button", () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
        expect(screen.getByText("Test")).toHaveClass("clear");
        screen.debug();
    });
});  