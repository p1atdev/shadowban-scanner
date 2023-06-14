// twitter.com's bearer token
const BEARER_WEB_TOKEN =
    "AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA"

// GET https://api.twitter.com/1.1/search/typeahead.json
class SearchTypeahead {
    usenrame: string

    guest_token?: string = undefined

    constructor(username: string) {
        this.usenrame = username
    }

    // get guest token
    async activate() {
        if (this.guest_token !== undefined) {
            return this.guest_token
        }

        const url = new URL("https://api.twitter.com/1.1/guest/activate.json")
        const res = await fetch(url.toString(), {
            method: "POST",
            headers: {
                Authorization: `Bearer ${BEARER_WEB_TOKEN}`,
            },
        })
        const json = await res.json()
        this.guest_token = json.guest_token

        return json.guest_token
    }

    // search typehead
    async search() {
        const guestToken = await this.activate()

        const url = new URL("https://api.twitter.com/1.1/search/typeahead.json")
        const searchParams = new URLSearchParams()

        searchParams.set("q", `@${this.usenrame}`)
        searchParams.set("src", "search_box")
        searchParams.set("result_type", "events,users,topics")

        url.search = searchParams.toString()

        const res = await fetch(url.toString(), {
            headers: {
                Authorization: `Bearer ${BEARER_WEB_TOKEN}`,
                "x-guest-token": guestToken,
            },
        })
        const json = await res.json()

        if (json.users === undefined) {
            return {
                possiblySuggestBanned: true,
            }
        } else if (json.users.length === 0) {
            return {
                possiblySuggestBanned: true,
            }
        }

        const topHitUser = json.users[0]

        if (topHitUser.screen_name.toLowerCase() !== this.usenrame.toLowerCase()) {
            return {
                possiblySuggestBanned: true,
            }
        }

        return {
            possiblySuggestBanned: false,
        }
    }
}

export { SearchTypeahead }
