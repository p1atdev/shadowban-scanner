import { ProfileChecker } from "./profilechecker"
import { CHECKED_DATA_ATTRIBUTE } from "../pageScript/settings"
import { TweetChecker } from "./tweetChecker"
import "../../css/style.css"

class Core {
    constructor(onMessageCallback: Function) {
        const timelineObserver = new MutationObserver(() => {
            const tweets = document.querySelectorAll(`[data-testid="tweet"]:not([${CHECKED_DATA_ATTRIBUTE}]`)
            for (const tweet of tweets) {
                const tweetChecker = new TweetChecker(tweet)
                tweetChecker.run().then(() => onMessageCallback())
            }

            const userName = document.querySelector(
                `:not([data-testid="tweet"]) [data-testid="UserName"]:not([${CHECKED_DATA_ATTRIBUTE}])`
            )
            if (userName) {
                const profileChecker = new ProfileChecker(userName)
                profileChecker.run()
                onMessageCallback()
            }
        })

        const loadingObserver = new MutationObserver(() => {
            const main = document.querySelector("main")
            if (!main) return

            loadingObserver.disconnect()
            timelineObserver.observe(main, { subtree: true, childList: true })
        })
        loadingObserver.observe(document.body, { subtree: true, childList: true })
    }
}

export { Core }
