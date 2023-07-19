export const getUsers = () => {
    const url = 'https://randomuser.me/api?results=200';
    return fetch(url)
    .then((response) => response.json());
}