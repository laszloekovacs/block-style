import React, { createContext, useReducer } from "react"
import ActionsBar from "./ActionsBar"
import Block from "./Block"
import BlockList from "./BlockList"
import reducer, { Action, ActionType, init, State } from "./reducer"

export interface IDocumentContext {
  state: State
  dispatch: React.Dispatch<Action>
}

export const documentContext = createContext<IDocumentContext>({} as IDocumentContext)

function BlockDocument() {
  const [state, dispatch] = useReducer(reducer, {}, init)

  return (
    <documentContext.Provider value={{ state, dispatch }}>
      <ActionsBar />
      <div>
        <ul>
          {state.blocks.map((item, index) => (
            <Block key={index} index={index} />
          ))}
        </ul>
      </div>
    </documentContext.Provider>
  )
}

export default BlockDocument
