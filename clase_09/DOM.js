


// console.log(document.doctype)
// console.log(document.documentElement)
// console.log(document.head)
// console.log(document.body)

// SELECTOR
// const $secciones = document.getElementsByTagName("section")

// const $games = document.getElementsByClassName("games")

// const $nintendo = document.getElementById("nintendo")

// SELECTORES UNIVERSALES

// querySelector -> consultar selector
// const $nintendo = document.querySelector("#nintendo")

// querySelectorAll
// const $secciones = document.querySelectorAll("section")
// const $games = document.querySelectorAll(".games")

// console.log($nintendo)

const d = document;

const print = console.log

// const $a = d.querySelector("a")

// $a.textContent = "Ir a Google"
// $a.href = "https://www.google.com/"
// $a.target = "_blank"

// const texto = 
// `
//     <p> 
//         Me gusta el <i>pancito</i> mas precisamente con <b>quesito</b>
//         y ni les cuento con un <mark>matecito</mark>.
//     </p>
// `

// const article = d.querySelector("article");

// article.innerHTML = texto;

const pokemons = [
    {
        img: "https://i0.wp.com/lordlibidan.com/wp-content/uploads/2019/03/Running-Pikachu-GIF.gif?resize=480%2C342&ssl=1",
        name: "Pikachu",
        type: "Electric",
        bgColor: "yellow"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/it/archive/4/43/20120529174523%21Bulbasaur.png",
        name: "Bulbasaur",
        type: "Plant/Venom",
        bgColor: "green"
    },
    {
        img: "https://freepngimg.com/thumb/pokemon/117717-charmander-png-image-high-quality-thumb.png",
        name: "Charmander",
        type: "Fire",
        bgColor: "orange"
    },
    {
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8355c42b-bec4-426e-a0fa-f39523ea6c02/da74aa6-367253cd-ef9e-41fe-83df-64b857675335.png/v1/fill/w_848,h_720/vamo_a_calmarno_render_by_taringamemes_da74aa6-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvODM1NWM0MmItYmVjNC00MjZlLWEwZmEtZjM5NTIzZWE2YzAyXC9kYTc0YWE2LTM2NzI1M2NkLWVmOWUtNDFmZS04M2RmLTY0Yjg1NzY3NTMzNS5wbmciLCJ3aWR0aCI6Ijw9ODQ4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ZNF3N5MBYnZKSWpRRuWvSYFLbTvxacfR439C1L60lDk",
        name: "Squirtle",
        type: "Water",
        bgColor: "blue"
    },
    {
        img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/017.png",
        name: "Pidgeotto",
        type: "Flying/Normal",
        bgColor: "gold"
    },
]

const $cards = d.querySelector(".cards");

pokemons.forEach(pokemon => {
    const $div = d.createElement('div');
    $div.className = "card";
    $div.style.backgroundColor = pokemon.bgColor

    $div.innerHTML = `
        <img src=${pokemon.img}>
        <h3>${pokemon.name}</h3>
        <h4>${pokemon.type}</h4>
    `

    $cards.appendChild($div)
})

