const _apiUrl = "/api/property";

export const getProperties = () => {
    return fetch(_apiUrl).then((res) => res.json());
};

export const getPropertyById = (propertyId) => {
    return fetch(`${_apiUrl}/${propertyId}`).then((res) => res.json());
};

export const createProperty = (property) => {
    return fetch(_apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(property),
    }).then((res) => res.json());
};

export const updateProperty = (propertyId, updatedProperty) => {
    return fetch(`${_apiUrl}/${propertyId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProperty)

    })
};

export const deleteProperty = (id) => {
    return fetch(`${_apiUrl}/${id}`, {
        method: "DELETE"
    });
};

export const assignProperty = (propertyId, agentId) => {
    return fetch(`${_apiUrl}/${propertyId}/assign?agentId=${agentId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
    })

};

export const unassignProperty = (propertyId, agentId) => {
    return fetch(`${_apiUrl}/${propertyId}/unassign?agentId=${agentId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
    })

};