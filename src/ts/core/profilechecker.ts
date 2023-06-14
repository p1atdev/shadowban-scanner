import { Color } from "./color"
import { MessageElement } from "./messageElement"
import { ProfileReactProps } from "./reactProps"
import { CHECKED_DATA_ATTRIBUTE } from "../pageScript/settings"
import { SearchTypeahead } from "./searchTypeahead"
import { ProfileMessageFactory } from "./messageType"

interface ProfileStatus {
    user: {
        possiblySensitive: boolean
        possiblySuggestBanned: boolean
    }
}

class ProfileChecker {
    private readonly userName: Element

    searchTypeahead?: SearchTypeahead

    constructor(userNameElement: Element) {
        this.userName = userNameElement
    }

    async run() {
        this.userName.setAttribute(CHECKED_DATA_ATTRIBUTE, "true")
        const reactProps = new ProfileReactProps(this.userName).get()

        if (this.searchTypeahead === undefined) {
            const searchTypeahead = new SearchTypeahead(reactProps.user.screen_name)
            this.searchTypeahead = searchTypeahead
        }

        const searchResult = await this.searchTypeahead.search()

        const profileStatus: ProfileStatus = {
            user: {
                possiblySensitive: Boolean(reactProps.user.possibly_sensitive),
                possiblySuggestBanned: searchResult.possiblySuggestBanned,
            },
        }

        if (ProfileMessageFactory.isNoProblem(profileStatus)) return

        const color = new Color().textColor

        const messageElement = new MessageElement("account", color, profileStatus, "profileStatus")

        const userDescription = document.querySelector("[data-testid='UserDescription']")
        if (!userDescription) throw new Error("Failed to get user description of profile")

        userDescription.insertAdjacentElement("afterend", messageElement.element)
    }
}

export { ProfileChecker, ProfileStatus }
