import { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropdownPage() {
    const [selection, setSelection] = useState(null);

    const options = [
        {
            label: "The Color Red",
            value: "red",
        },
        {
            label: "The Color Green",
            value: "green",
        },
        {
            label: "A Shade of Blue",
            value: "blue",
        },
    ];

    const handleOptionChange = (option) => {
        setSelection(option);
    }

    return (
        <div className="flex">
            <Dropdown options={options} value={selection} onChange={handleOptionChange} />
        </div>
    );
}

export default DropdownPage;