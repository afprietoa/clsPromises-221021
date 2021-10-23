let templateCard = document.getElementById('template-card').content
let fragement = document.createDocumentFragment()
let items = document.getElementById('items')

const getData = async() => {

    let url = 'https://raw.githubusercontent.com/jennymontoya1001/endpointheroesjson/main/heroes.json'
    let response = await fetch(url)
    let data = await response.json()
    let {results} = data
    return results;

}

getData();

const printData = async() => {
    
    let data = await getData()
    //console.log(data)
    data.forEach( hero => {
        let {superhero, image}= hero
        templateCard.querySelector('h5').textContent = superhero
        templateCard.querySelector('img').setAttribute( 'src', image )
        const clone = templateCard.cloneNode(true)
        fragement.appendChild(clone)
    })
    items.appendChild(fragement)
}

document.addEventListener('DOMContentLoaded', printData)

let boton = document.getElementById('btnBuscar') 

boton.addEventListener( 'click' , async() => {
    let name = document.getElementById('inputBuscar').value;

    let data = await getData();
    //console.log(data)
    let lookUp = data.filter(hero => hero.superhero.toLowerCase() === name) 
    //console.log(lookUp)
    lookUp.forEach( hero => {
        let {superhero, image}= hero
        templateCard.querySelector('h5').textContent = superhero
        templateCard.querySelector('img').setAttribute( 'src', image )
        const clone = templateCard.cloneNode(true)
        fragement.appendChild(clone)
    })
    items.innerHTML = ''
    items.appendChild(fragement)
})