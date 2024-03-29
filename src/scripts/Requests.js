import { getRequests, deleteRequest } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests()

    let html = "<ul>"
    const convertRequestToListElement = requests.map(request => {
        return `
            <li>
            ${request.description}
        <button class="request__delete"
                id="request--${request.id}">
            Delete
        </button>
            </li>`
    })
        
    html += convertRequestToListElement.join("") 
    html += "</ul>"
        
    return html
}
const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})