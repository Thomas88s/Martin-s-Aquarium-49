    import { tipsDatabase } from "./tipsDatabase.js"

    export const tipsList = () => {
        const allTips = tipsDatabase.tips

        let htmlString = '<article class="tipsList">'

        for (const tips of allTips) {

            htmlString += `<section class="tip_card">
            <div class="tip_header">${tips.header}</div>
            <div class="tip_type">${tips.type}</div>
            </section>`
        }
        htmlString += `</article>`

        return htmlString
    }
    