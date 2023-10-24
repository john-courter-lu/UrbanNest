const _apiUrl = "/api/type";

export const getTypes = () => {
    return fetch(_apiUrl).then((res) => res.json());
};
