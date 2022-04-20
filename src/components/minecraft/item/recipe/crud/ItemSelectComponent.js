
import AsyncSelect from "react-select/async";

export default function ItemSelectComponent() {
    const options = [
        {
            value: 1, label: 'Sand | 1'
        },
        {
            value: 2, label: 'Red sand | 1:1'
        }
    ];

    return (
        <>
            <AsyncSelect isMulti defaultOptions={options} />
        </>
    );
}
