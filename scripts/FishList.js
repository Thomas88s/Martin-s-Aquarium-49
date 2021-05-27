    import { database } from "./database.js"

    export const FishList = () => {
        const fishes = database.fish

        let htmlString = '<article class="fishList">'

        for (const fish of fishes) {

            htmlString += `<section class="fish_card">
            <div><img class="fish_image--card" src= "${fish.image}" /></div>
            <div class="fish_name">${fish.name}</div>
            <div class="fish_species">${fish.species}</div>
            <div class="fish_length">${fish.length}</div>
            <div class="fish_location">${fish.location}</div>
            <div class="fish_diet">${fish.diet}</div>
          </section>  `
        }
        htmlString += `</article>`

        return htmlString
    }