import { Color } from "./color"
import { MessageElement } from "./messageElement"
import { TweetMessageFactory, TweetStatus } from "./messageType"
import { TweetReactProps } from "./reactProps"
import { CHECKED_DATA_ATTRIBUTE, CURRENT_USERS_TWEET_CLASS_NAME } from "../pageScript/settings"
import { SearchTypeahead } from "./searchTypeahead"

class TweetChecker {
    private readonly tweet: Element

    searchTypeahead?: SearchTypeahead

    constructor(tweet: Element) {
        this.tweet = tweet
    }

    async run() {
        this.tweet.setAttribute(CHECKED_DATA_ATTRIBUTE, "true")
        const menuBar = this.tweet.querySelector("div[role='group'][id]")
        if (!menuBar) throw new Error("Failed to get menu bar of tweet")

        const reactProps = new TweetReactProps(menuBar).get()

        if (this.searchTypeahead === undefined) {
            const searchTypeahead = new SearchTypeahead(reactProps.user.screen_name)
            this.searchTypeahead = searchTypeahead
        }

        console.log(this.searchTypeahead)

        const searchResult = await this.searchTypeahead.search()

        const tweetStatus: TweetStatus = {
            tweet: {
                possiblySensitive: Boolean(reactProps.possibly_sensitive),
                // ref: https://github.com/Robot-Inventor/shadowban-scanner/issues/16
                possiblySensitiveEditable: !(reactProps.possibly_sensitive_editable === false),
                isTweetByCurrentUser: reactProps.user.following === null,
            },
            user: {
                possiblySensitive: Boolean(reactProps.user.possibly_sensitive),
                possiblySuggestBanned: searchResult.possiblySuggestBanned,
            },
        }

        console.log("tweetStatus", tweetStatus)

        const color = new Color().textColor
        const messageElement = new MessageElement("tweet", color, tweetStatus, "tweetStatus")

        if (tweetStatus.tweet.isTweetByCurrentUser) {
            messageElement.element.classList.add(CURRENT_USERS_TWEET_CLASS_NAME)
        }

        const messageFactory = new TweetMessageFactory(tweetStatus, () => "")

        if (messageFactory.isNoProblem()) {
            messageElement.element.classList.add("shadowban-scanner-message-no-problem")
        }

        menuBar.insertAdjacentElement("beforebegin", messageElement.element)
    }
}

export { TweetChecker }
