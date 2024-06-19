import{render,screen,fireEvent } from "@testing-library/react";
import List from "./List";

describe("List test suite", () => {
    // (RGR) red green refactor 
const mockitems = [];
beforeEach(()=>{
mockitems.push({id:1, name:"sport",done:false});
});
    test("List unit test", () => {
       
        render(<List items={mockitems} />)
        // assertion
        mockitems.forEach((item)=> {
        expect(screen.getByText(item.name)).toBeInTheDocument();
    });
       
})
    test("delete unit test", () => {
        const handleDelete = jest.fn();
        render(<List items={mockitems} onDelete={handleDelete}/>)
        // assertion
        const buttons = screen.getAllByRole("button")
        fireEvent.click(buttons[0])
        expect(handleDelete).toHaveBeenCalledWith("sport");
    });
    test("check box unit test", () => {
        const handleCheck = jest.fn();
        render(<List items={mockitems} onCheck={handleCheck}/>)
        // assertion
        const checkboxes = screen.getAllByRole("checkbox")
        fireEvent.click(checkboxes[0])
        expect(handleCheck).toHaveBeenCalledTimes(1);
});
});
