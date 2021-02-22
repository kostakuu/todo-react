import React, {useState} from 'react';

const Item = (props) => {
    const [id] = useState(props.item.id)
    const [title] = useState(props.item.title)
    const [completed] = useState(props.item.completed)

    const itemClass = completed ? 'complete' : '';
    const handleClick = () => props.handleAlter({id, title, completed});

    return (
        <li onClick={handleClick} className={itemClass}>{title}</li>
    );
}

export default Item;
