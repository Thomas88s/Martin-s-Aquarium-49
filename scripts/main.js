    import { FishList } from "./fish/FishList.js"
    import { tipsList } from "./tips/tipsList.js"
    import { locationsList } from "./locations/locationsList.js"

    const fishHTMLElement = document.querySelector(".listedFish")
    fishHTMLElement.innerHTML = FishList()

    const tipsHTMLElement = document.querySelector(".listedTips")
    tipsHTMLElement.innerHTML = tipsList()

    const locationsHTMLElement = document.querySelector(".listedLocations")
    locationsHTMLElement.innerHTML = locationsList()