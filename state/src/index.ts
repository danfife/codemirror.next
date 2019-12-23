export {EditorStateConfig, EditorState} from "./state"
export {StateCommand, Syntax, languageData, CancellablePromise, Annotation} from "./extension"
export {Facet, StateField, StateFieldSpec, Extension, Precedence,
        defineFacet, FacetConfig, computedFacet, computedFacetN} from "./facet"
export {EditorSelection, SelectionRange} from "./selection"
export {Change, ChangeDesc, ChangeSet, Mapping, MapMode, ChangedRange} from "./change"
export {Transaction} from "./transaction"
export {Text} from "../../text"
export {combineConfig, fillConfig} from "./config"
