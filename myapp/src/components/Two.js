import { useSelector } from "react-redux";

const Two = ({ data }) => {
    const state = useSelector(state => state)
    console.log(state)
    return (
        <div>
            <h2>I'm compTwont Two</h2>
        </div>
    );
}

export default Two;
