const _apiUrl = "/api/investor";

export const getInvestors = () => {
    return fetch(_apiUrl).then((res) => res.json());
};

export const getInvestorById = (investorId) => {
    return fetch(`${_apiUrl}/${investorId}`).then((res) => res.json());
};

export const createInvestor = (investor) => {
    return fetch(_apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(investor),
    }).then((res) => res.json());
};

export const updateInvestor = (investorId, updatedInvestor) => {
    return fetch(`${_apiUrl}/${investorId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedInvestor)

    })
};

export const deleteInvestor = (id) => {
    return fetch(`${_apiUrl}/${id}`, {
        method: "DELETE"
    });
};
