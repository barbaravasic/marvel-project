export const saveToStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const getFromStorage = (key) => {
    const data = localStorage.getItem(key);

    return JSON.parse(data);
}