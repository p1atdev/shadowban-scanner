import { MESSAGE_CLASS_NAME } from "../pageScript/settings"
import { ColorCode } from "./color"
class MessageElement {
    private div: HTMLDivElement

    constructor(
        type: "tweet" | "account",
        color: ColorCode,
        messageFlags?: DOMStringMap | Object,
        datasetName?: string
    ) {
        this.div = document.createElement("div")
        this.div.classList.add(MESSAGE_CLASS_NAME)
        if (datasetName) {
            this.div.dataset[datasetName] = JSON.stringify(messageFlags)
        }
        this.div.style.color = color

        console.log("type", type, "dataset", this.div.dataset)

        if (type === "tweet") {
            const pre = document.createElement("pre")
            pre.style.display = "none"
            this.div.appendChild(pre)

            const button = document.createElement("button")
            button.addEventListener("click", () => {
                pre.style.display = "block"
                button.remove()
            })
            this.div.appendChild(button)
        }
    }

    get element() {
        return this.div
    }
}

export { MessageElement }
