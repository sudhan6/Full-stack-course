import ListItem from "./ListItem";

const Content = () => {

    const chores = ["item 1", "item 2", "item 3", "item 4"]

    return (

        <div className="container">
            <ul>
                {
                    chores.map(chore => <ListItem chore={chore} />)

                }
            </ul>
        </div>
    );
}

export default Content;