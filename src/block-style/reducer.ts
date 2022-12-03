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

export function init(): State {
  return { blocks: [], active: 0 }
}

export type ActionType = "RESET" | "NEW_BLOCK"

export default function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "NEW_BLOCK":
      return produce(state, (draft) => {
        const temp = {
          type: "PARAGRAPH",
          data: "Consectetur ex do ipsum nostrud elit nostrud excepteur do qui pariatur. Aliquip aliquip ipsum laboris ad.",
        }
        draft.blocks.push(temp as BlockType)
      })

    case "RESET":
      return init()

    default:
      return state
  }
}
