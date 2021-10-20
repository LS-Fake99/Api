console.log("Prueba de conexion")


/*Carga primero el archivo .HTML y luego carga el alchivo JS*/
document.addEventListener('DOMContentLoaded',()=> {
    const id_random = getRandomInt(1, 151)
    fetachApi(id_random)
})

const getRandomInt = (min, max)=> {
    return Math.floor(Math.random() * (max - min)) + min;
  }

const fetachApi = async (id)=>{
    try{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()
        console.log(data)

        const pokemon = {

            img: data.sprites.other.dream_world.front_default,
            nombre: data.name,
            hp: data.stats[0].base_stat,
            experiencia: data.base_experience,
            habilidad_1 : data.abilities[0].ability.name,
            habilidad_2 : data.abilities[1].ability.name,
            ataque: data.stats[1].base_stat,
            defensa: data.stats[2].base_stat,
            ataque_especial: data.stats[3].base_stat,
            defensa_especial: data.stats[4].base_stat,
            velocidad: data.stats[5].base_stat,
        }

        pintar_card(pokemon)
        
    }

    catch (error) {
        
    }

}

const pintar_card = (pokemon) => {

    const flex = document.querySelector('.flex')
    const template = document.querySelector(`#template-card`).content
    const clone = template.cloneNode(true)
    const fragment = document.createDocumentFragment()

    clone.querySelector('.card-body-img').setAttribute('src', pokemon.img)
    clone.querySelector('.card-body-title').innerHTML = `${pokemon.nombre} <span>${pokemon.hp} hp</span>`
    clone.querySelectorAll('.card-body-text')[0].textContent = pokemon.experiencia + ' EXP'
    clone.querySelectorAll('.card-body-text')[1].textContent = pokemon.habilidad_1
    clone.querySelectorAll('.card-body-text')[2].textContent =  pokemon.habilidad_2
    clone.querySelectorAll('.card-footer-social h3')[0].textContent = pokemon.ataque + ' K'
    clone.querySelectorAll('.card-footer-social h3')[1].textContent = pokemon.defensa + ' K'
    clone.querySelectorAll('.card-footer-social h3')[2].textContent = pokemon.ataque_especial + ' K'
    clone.querySelectorAll('.card-footer-social h3')[3].textContent = pokemon.defensa_especial + ' K'
    clone.querySelectorAll('.card-footer-social h3')[4].textContent = pokemon.velocidad + ' K'
   

    fragment.appendChild(clone)
    flex.appendChild(fragment)

}

