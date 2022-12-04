import produce from "immer"

export type BlockTypesType = "EMPTY" | "PARAGRAPH" | "HEADER"

export interface BlockType {
  type: BlockTypesType
  data: unknown
}

export interface State {
  active: number
  blocks: BlockType[]
}

export interface Action {
  type: ActionType
  payload?: unknown
}

export interface SetTypePayload {
  newtype: BlockTypesType
  index: number
}

export function init(): State {
  return { blocks: [{ type: "HEADER", data: "" }], active: 0 }
}

export type ActionType = "RESET" | "NEW_BLOCK" | "SET_TYPE" | "MAKE_ACTIVE"

export default function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "RESET":
      return init()

    case "NEW_BLOCK":
      return produce(state, (draft) => {
        const temp: BlockType = {
          type: "PARAGRAPH",
          data: "Consectetur ex do ipsum nostrud elit nostrud excepteur do qui pariatur. Aliquip aliquip ipsum laboris ad.",
        }
        draft.blocks.push(temp)
      })

    case "SET_TYPE":
      return produce(state, (draft) => {
        draft.blocks[(action.payload as SetTypePayload).index].type = (action.payload as SetTypePayload).newtype
      })

    case "MAKE_ACTIVE":
      return produce(state, (draft) => {
        draft.active = action.payload as number
      })

    default:
      return state
  }
}
