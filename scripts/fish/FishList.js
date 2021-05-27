    import { fishDatabase } from "./fishDatabase.js"

    export const FishList = () => {
        const fishes = fishDatabase.fish

        let htmlString = '<article class="fishList">'

        for (const fish of fishes) {

            htmlString += `<section class="fish_card">
            <div><img class="fish_image--card" src= "${fish.image}"/></div>
            <div class="fish_name">Name: ${fish.name}</div>
            <div class="fish_species">Species: ${fish.species}</div>
            <div class="fish_length">Length: ${fish.length}</div>
            <div class="fish_location">Location: ${fish.location}</div>
            <div class="fish_diet">Diet: ${fish.diet}</div>
          </section>  `
        }
        htmlString += `</article>`

        return htmlString
    }