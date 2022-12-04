import React, { createContext, useReducer } from "react"
import BlockDocumentActions from "./BlockDocumentActions"
import Block from "./Block"
import BlockList from "./BlockList"
import reducer, { Action, ActionType, init, State } from "./reducer"
import styles from "./styles.module.scss"
export interface IDocumentContext {
  state: State
  dispatch: React.Dispatch<Action>
}

export const documentContext = createContext<IDocumentContext>({} as IDocumentContext)

function BlockDocument() {
  const [state, dispatch] = useReducer(reducer, {}, init)

  return (
    <documentContext.Provider value={{ state, dispatch }}>
      <BlockDocumentActions />
      <div className={styles.document}>
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
