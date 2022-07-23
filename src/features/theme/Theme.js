import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeTectColor } from './themeSlice';
export const Theme = () => {
    const [color, setColor] = useState("white")
    const dispatch = useDispatch()
    return (
        <div>
            <input type='text' placeholder="Enter value" onChange={(e) => setColor(e.target.value)} /><br /><br />
            <button onClick={() => { dispatch(changeTectColor(color)) }}>Change text color</button>

        </div>
    )
}
export default Theme;
