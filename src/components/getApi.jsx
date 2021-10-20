export const getDemonSlayer = urlDemon => {
    return fetch(urlDemon)
    .then(res => res.json())
};