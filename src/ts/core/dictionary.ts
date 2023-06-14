import enDictionary from "../../../_locales/en/messages.json"
import jaDictionary from "../../../_locales/ja/messages.json"

type Dictionary = typeof jaDictionary
type Translator = (key: keyof Dictionary) => string

export { Dictionary, Translator, enDictionary, jaDictionary }
