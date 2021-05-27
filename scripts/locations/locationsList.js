import { locationsDatabase } from "./locationsDatabase.js"

export const locationsList = () => {
    const allLocations = locationsDatabase.locations

    let htmlString = '<article class="locationsList">'

    for (const locations of allLocations) {

        htmlString += `<section class="tip_card">
        <div class="tip_header">${locations.ocean}</div>
        <div class="tip_type">${locations.country}</div>
        </section>`
    }
    htmlString += `</article>`

    return htmlString
}