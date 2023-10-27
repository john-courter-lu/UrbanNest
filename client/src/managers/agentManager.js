const _apiUrl = "/api/agent";

export const getAgents = () => {
    return fetch(_apiUrl).then((res) => res.json());
};

export const getAgentById = (agentId) => {
    return fetch(`${_apiUrl}/${agentId}`).then((res) => res.json());
};

export const createAgent = (agent) => {
    return fetch(_apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(agent),
    }).then((res) => res.json());
};

export const updateAgent = (agentId, updatedAgent) => {
    return fetch(`${_apiUrl}/${agentId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedAgent)
    })
};

export const deactivateAgent = (agentId) => {
    return fetch(`${_apiUrl}/deactivate/${agentId}`, {
        method: "PUT",
    })
};
