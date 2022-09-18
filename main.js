import { fetchPainting1, fetchPainting2, fetchPainting3, fetchPainting4, fetchPainting5 } from "./museum.js";

//painting 1

const displayPainting1 = async () => {
    const data = await fetchPainting1()
    renderPainting1(data)
}

const renderPainting1 = (painting) => {

    let html = `
    <p>Title: ${painting.title}</p>
    <img src =${painting.primaryImageSmall} alt=''>
        `
    document.getElementById('app').innerHTML += html
}

displayPainting1()

// painting 2
const displayPainting2 = async () => {
    const data = await fetchPainting2()
    renderPainting2(data)
}

const renderPainting2 = (painting) => {

    let html = `
    <p>Title: ${painting.title}</p>
    <img src =${painting.primaryImageSmall} alt=''>
        `
    document.getElementById('app').innerHTML += html
}

displayPainting2()

// painting 3
const displayPainting3 = async () => {
    const data = await fetchPainting3()
    renderPainting3(data)
}

const renderPainting3 = (painting) => {
    let html = `
    <p>Title: ${painting.title}</p>
    <img src =${painting.primaryImageSmall} alt=''>
    `
    document.getElementById('app').innerHTML += html
}

displayPainting3()

// painting 4
const displayPainting4 = async () => {
    const data = await fetchPainting4()
    renderPainting4(data)
}

const renderPainting4 = (painting) => {
    let html = `
    <p>Title: ${painting.title}</p>
    <img src = ${painting.primaryImageSmall} alt=''>
    `
    document.getElementById('app').innerHTML += html
}

displayPainting4()

// painting 5
const displayPainting5 = async () => {
    const data = await fetchPainting5()
    renderPainting5(data)
}

const renderPainting5 = (painting) => {
    let html = `
    <p>Title: ${painting.title}<p>
    <img src = ${painting.primaryImageSmall} alt=''>
    `
    document.getElementById('app').innerHTML += html
}

displayPainting5()