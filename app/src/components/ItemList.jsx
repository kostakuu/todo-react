import React, {useState, useEffect} from 'react';

import Item from './Item';

const ItemList = (props) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(props.items);
    }, [props.items]);

    const Items = () => items.map(item => <Item item={item} key={item.id} handleAlter={props.handleAlter}/>);

    return (
        <section className="container items">
            <ul>
                <Items/>
            </ul>
        </section>
    );
};

export default ItemList;
