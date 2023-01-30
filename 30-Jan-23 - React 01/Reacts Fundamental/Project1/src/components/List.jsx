// Creating <ul> from and array of Objects

const Items = [
    { title: "apple", isfruit: true, id: 1 },
    { title: "Onion", isfruit: false, id: 2 },
    { title: "mango", isfruit: true, id: 3 }
];

export default function FruitList() {
    let listItems = Items.map(item =>
        <li
            key={item.id}
            style={{ color: item.isfruit ? 'red' : 'green' }}>
            {item.title}
        </li>);
    return (
        <ul>{listItems}</ul>
    )
}