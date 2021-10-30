const ListItem = ({chore}) => {
    return (
        <li>
             <div>
                {chore}
            </div>
        <button style={{ background: 'crimson', color: "white" }} >Delete</button>
        </li>
    )
}

export default ListItem;