import React, { useCallback, useContext } from "react"
import { documentContext } from "./BlockDocument"
import { Action, State, ActionType } from "./reducer"

function ActionsBar() {
  const doc = useContext(documentContext)

  const handleReset = useCallback(() => {
    doc.dispatch({ type: "RESET" })
  }, [])

  const handleNewBlock = useCallback(() => {
    doc.dispatch({ type: "NEW_BLOCK" })
  }, [])

  const handleDebugPrint = useCallback(() => {
    console.log(doc.state)
  }, [doc.state])

  return (
    <div>
      <ul>
        <button onClick={handleReset}>reset</button>
        <button onClick={handleNewBlock}>create new block</button>
        <button onClick={handleDebugPrint}>print document</button>
      </ul>
    </div>
  )
}

export default ActionsBar
