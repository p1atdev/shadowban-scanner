import { Translator } from "../core/dictionary"
import { TweetMessageFactory, ProfileMessageFactory, TweetStatus } from "../core/messageType"
import { ProfileStatus } from "../core/profilechecker"
import { CURRENT_USERS_TWEET_CLASS_NAME, MESSAGE_CLASS_NAME } from "./settings"

interface TextFlowOptions {
    showMessageInAllTweets: boolean
    alwaysDetailedView: boolean
    enableOnlyForCurrentUsersTweets: boolean
    translator: Translator
}

class TextFlow {
    private readonly translator: Translator
    private readonly allWaysDetailedView: boolean

    constructor(options: TextFlowOptions) {
        if (!options.showMessageInAllTweets) {
            const style = document.createElement("style")
            style.textContent = ".shadowban-scanner-message-no-problem { display: none; }"
            document.body.appendChild(style)
        }

        if (options.enableOnlyForCurrentUsersTweets) {
            const style = document.createElement("style")
            style.textContent = `.${MESSAGE_CLASS_NAME}:not(.${CURRENT_USERS_TWEET_CLASS_NAME}) {display: none;}`
            document.body.appendChild(style)
        }

        this.allWaysDetailedView = options.alwaysDetailedView

        this.translator = options.translator
    }

    run() {
        const target: HTMLElement | null = document.querySelector(".shadowban-scanner-message:not(.text-inserted")
        if (!target) return

        target.classList.add("text-inserted")

        const tweetStatusText = target.dataset.tweetStatus
        if (tweetStatusText) {
            const tweetStatus: TweetStatus = JSON.parse(tweetStatusText)
            this.processTweetStatus(target, tweetStatus, this.translator)
            return
        }

        const profileStatusText = target.dataset.profileStatus
        if (profileStatusText) {
            const profileStatus: ProfileStatus = JSON.parse(profileStatusText)
            this.processProfileStatus(target, profileStatus, this.translator)
            return
        }
    }

    private processTweetStatus(target: HTMLElement, tweetStatus: TweetStatus, translator: Translator) {
        const messageFactory = new TweetMessageFactory(tweetStatus, translator)

        const message = messageFactory.compose("message")
        target.insertAdjacentText("afterbegin", message)

        const button = target.querySelector("button")
        if (!button) return

        if (this.allWaysDetailedView) {
            button.click()
        } else {
            button.textContent = this.translator("showMore")
        }

        const pre = target.querySelector("pre")
        if (!pre) return

        pre.textContent = messageFactory.compose("info")
    }

    private processProfileStatus(target: HTMLElement, profileStatus: ProfileStatus, translator: Translator) {
        const messageFactory = new ProfileMessageFactory(profileStatus, translator)

        const message = messageFactory.compose()
        target.insertAdjacentText("afterbegin", message)
    }
}

export { TextFlowOptions, TextFlow }
