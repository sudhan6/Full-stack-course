import Enhancer from "../HOC/Enhancer";

const Description = ({ heading }) => {
    return (
        <div>
            <h1>{heading}</h1>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores libero, totam facere, in accusantium magnam laboriosam ipsa fugit temporibus nisi repellendus voluptatibus sed eum doloribus accusamus explicabo deleniti. Iusto, blanditiis.</div>
        </div>
    );
}

export default Enhancer(Description);
