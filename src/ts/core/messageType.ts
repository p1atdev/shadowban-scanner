import { Dictionary, Translator } from "./dictionary"
import { ProfileStatus } from "./profilechecker"

interface TweetStatus {
    tweet: {
        possiblySensitive: boolean
        possiblySensitiveEditable: boolean
        isTweetByCurrentUser: boolean
    }
    user: {
        possiblySensitive: boolean
        possiblySuggestBanned: boolean
    }
}

class TweetMessageFactory {
    private readonly tweetStatus: TweetStatus
    private readonly t: Translator

    constructor(status: TweetStatus, translator: Translator) {
        this.tweetStatus = status
        this.t = translator
    }

    compose(type: "message" | "info"): string {
        const { tweet, user } = this.tweetStatus

        switch (type) {
            case "message": {
                if (TweetMessageFactory.isNoProblem(this.tweetStatus)) {
                    return this.t("tweetNoProblemMessage")
                }

                const messages: (keyof Dictionary)[] = []

                if (tweet.possiblySensitive) {
                    if (user.possiblySensitive) {
                        if (tweet.possiblySensitiveEditable) {
                            messages.push("accountShadowbannedMessage")
                            messages.push("tweetFlaggedAsSensitiveMessage")
                        } else {
                            messages.push("accountAndTweetShadowbannedMessage")
                        }
                    } else {
                        messages.push("accountShadowbannedMessage")
                    }
                } else {
                    if (tweet.possiblySensitiveEditable) {
                        messages.push("tweetFlaggedAsSensitiveMessage")
                    } else {
                        messages.push("tweetShadowbannedMessage")
                    }
                }

                if (user.possiblySuggestBanned) {
                    messages.push("accountSuggestBannedMessage")
                }

                const messageText = messages.map((key) => this.t(key)).join(this.t("statusMessageSeparator"))
                return messageText
            }
            case "info": {
                const info: (keyof Dictionary)[] = []

                if (user.possiblySensitive) {
                    info.push("accountPossiblyShadowbanned")
                } else {
                    info.push("accountPossiblyNotShadowbanned")
                }

                if (tweet.possiblySensitiveEditable && tweet.possiblySensitive) {
                    info.push("accountHasSensitiveFlag")
                    info.push("accountHasNoAgeRestriction")
                } else if (tweet.possiblySensitive) {
                    info.push("accountHasSensitiveFlag")
                    info.push("accountHasAgeRestriction")
                } else {
                    info.push("accountHasNoSensitiveFlag")
                    info.push("accountHasNoAgeRestriction")
                }

                if (user.possiblySensitive) {
                    info.push("tweetsPossiblyNotInSearchResults")
                } else {
                    info.push("tweetsPossiblyInSearchResults")
                }

                if (user.possiblySuggestBanned) {
                    info.push("accountPossiblySuggestBanned")
                } else {
                    info.push("accountPossiblyNotSuggestBanned")
                }

                const infoText = info.map((key) => this.t(key)).join(this.t("statusInfoSeparator"))

                return infoText
            }
        }
    }

    static isNoProblem(tweetStatus: TweetStatus): boolean {
        const { tweet, user } = tweetStatus

        if (user.possiblySensitive) {
            return false
        }

        if (tweet.possiblySensitive) {
            return false
        }

        return true
    }
}

class ProfileMessageFactory {
    private readonly profileStatus: ProfileStatus
    private readonly t: Translator

    constructor(status: ProfileStatus, translator: Translator) {
        this.profileStatus = status
        this.t = translator
    }

    compose(): string {
        const { user } = this.profileStatus

        if (ProfileMessageFactory.isNoProblem(this.profileStatus)) {
            return this.t("tweetNoProblemMessage")
        }

        const messages: (keyof Dictionary)[] = []

        if (user.possiblySensitive) {
            messages.push("accountShadowbannedMessage")
        }
        if (user.possiblySuggestBanned) {
            messages.push("accountSuggestBannedMessage")
        }

        const messageText = messages.map((key) => this.t(key)).join(this.t("statusMessageSeparator"))
        return messageText
    }

    static isNoProblem(profileStatus: ProfileStatus): boolean {
        const { user } = profileStatus

        if (user.possiblySensitive) {
            return false
        }

        if (user.possiblySuggestBanned) {
            return false
        }

        return true
    }
}

export { TweetStatus, TweetMessageFactory, ProfileMessageFactory }
