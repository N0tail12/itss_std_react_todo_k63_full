import { useState, useEffect } from 'react';

import { addFirebaseItem, updateFirebaseItem, getFirebaseItems, clearFirebaseItem } from "../lib/firebase";

function useStorage() {
  const [items, setItems] = useState([]);

  const [update, setUpdate] = useState(true);

  useEffect(() => {
    if(update){
      getItems();
    }
  }, [items, update]);

  const getItems = async () => {
    console.log("1111")
    const _items = await getFirebaseItems();
    setItems(_items);
    setUpdate(false);
  };

  const addItem = async item => {
    const newItem = { text: item.text, done: item.done };
    await addFirebaseItem(newItem);
    setItems([...items, newItem]);
    setUpdate(true);
  };

  const updateItem = async checked => {
    const changes = { done: !checked.done };
    await updateFirebaseItem(changes, checked.id);
    const newItems = items.map((item) => {
      if (item.id === checked.id) {
        item = { ...item, changes}
      }
      return item;
    })
    setItems(newItems);
    setUpdate(true);
  }

  const clearItems = () => {
    items.map(item => {
      clearFirebaseItem(item);
      return 0;
    })
    setItems([]);
    setUpdate(true);
  };

  return [items, addItem, updateItem, clearItems];
}

export default useStorage;