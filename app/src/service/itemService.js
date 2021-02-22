class ItemService {
    constructor() {
        this.url = 'https://6032f05aa223790017acf83a.mockapi.io/api/items/';
    }

    async get() {
        return fetch(this.url)
            .then((response) => response.json())
            .catch(error => console.error(error));
    }

    async add(title) {
        if (!title) {
            alert('Error! Title is empty.');
            return;
        }

        const newItem = {
            title: title,
            completed: false
        };

        await fetch(this.url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .catch(error => console.error(error));
    }

    async alter(item) {
        const updatedItem = {
            ...item,
            completed: !item.completed
        };

        await fetch(this.url + item.id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
            .catch(error => console.error(error));
    }
}

export default ItemService;
