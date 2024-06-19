import { render,screen, fireEvent } from "@testing-library/react";

import Add from "./Add";

test("add todo list test unit", () => {
    const mockAdd = jest.fn();
    render(<Add handleAdd={mockAdd} />)
    expect(screen.getByRole("button")).toBeDisabled();
    fireEvent.change(screen.getByRole("textbox"),{target:{value:"sport"}});
    fireEvent.click(screen.getByRole("button"));
    // assertion
    expect(mockAdd).toHaveBeenCalledWith("sport");
    expect(mockAdd).toHaveBeenCalledTimes(1);
    expect(screen.getByText(/Add task/i)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeEnabled();
});