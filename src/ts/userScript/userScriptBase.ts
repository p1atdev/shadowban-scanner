import { Core } from "../core/core"
import { TextFlow, TextFlowOptions } from "../pageScript/textFlow"
import { DEFAULT_SETTINGS } from "../defaultSettings"
import { Dictionary } from "../core/dictionary"

class UserScriptBase {
    constructor(dictionary: Dictionary) {
        const textFlowOptions: TextFlowOptions = {
            ...DEFAULT_SETTINGS,
            translator: (key) => {
                return dictionary[key].message
            },
        }
        const textFlow = new TextFlow(textFlowOptions)

        new Core(() => {
            textFlow.run()
        })
    }
}

export { UserScriptBase }
