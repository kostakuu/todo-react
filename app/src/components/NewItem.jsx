import React, {useState} from 'react';

const NewItem = (props) => {
    const [newItem, setNewItem] = useState('');

    const handleChange = (e) => setNewItem(e.target.value);
    const handleAdd = async () => {
        await props.handleAdd(newItem);
        setNewItem('');
    };

    return (
        <section className="container add">
            <label>
                <i>New item:</i>
                <input type="text" placeholder="Input ToDo title..." value={newItem} onChange={handleChange}/>
            </label>
            <button onClick={handleAdd}>Add</button>
        </section>
    );
};

export default NewItem;
