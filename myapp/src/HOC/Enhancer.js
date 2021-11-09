const Enhancer = (Component) => {
    return (props) => {
        console.log(props)
        return (
        <div>
            <Component {...props} />
            <h6><sub>Mercidies benz</sub></h6>
        </div>
        )
    }
}

export default Enhancer;
