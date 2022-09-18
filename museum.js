const API = "https://collectionapi.metmuseum.org/public/collection/v1/objects"



export const fetchPainting1 = async () => {
    const dataFetch = await fetch(`${API}/438815`)
    const jsonData = await dataFetch.json()
    return jsonData
}

export const fetchPainting2 = async () => {
    const dataFetch = await fetch(`${API}/438011`)
    const jsonData = await dataFetch.json()
    return jsonData
}

export const fetchPainting3 = async () => {
    const dataFetch = await fetch(`${API}/438014`)
    const jsonData = await dataFetch.json()
    return jsonData
}

export const fetchPainting4 = async () => {
    const dataFetch = await fetch(`${API}/437430`)
    const jsonData = await dataFetch.json()
    return jsonData
}

export const fetchPainting5 = async () => {
    const dataFetch = await fetch(`${API}/437432`)
    const jsonData = await dataFetch.json()
    return jsonData
}
