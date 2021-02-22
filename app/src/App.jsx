import React, {useState, useEffect} from 'react';

import Header from './components/Header';
import NewItem from './components/NewItem';
import ItemList from './components/ItemList';

import ItemService from './service/itemService';

const App = () => {
    const itemService = new ItemService();

    const [items, setItems] = useState([]);

    const handleRefreshData = async () => {
        const items = await itemService.get();
        setItems(items);
    };

    const handleAdd = async (title) => {
        await itemService.add(title);
        await handleRefreshData();
    };

    const handleAlter = async (item) => {
        await itemService.alter(item);
        await handleRefreshData();
    };

    useEffect(() => {
        handleRefreshData().then(null);
    }, []);

    return (
        <>
            <Header/>
            <NewItem handleAdd={handleAdd}/>
            <ItemList items={items} handleAlter={handleAlter}/>
        </>
    );
};

export default App;
