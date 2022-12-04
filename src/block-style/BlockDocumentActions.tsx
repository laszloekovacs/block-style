import React, { useCallback, useContext } from "react"
import { documentContext } from "./BlockDocument"
import { Action, State, ActionType } from "./reducer"

function BlockDocumentActions() {
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

  const changeBlockTypeHandler = useCallback(() => {
    console.log("changing type")
  }, [])

  return (
    <div>
      <ul>
        <button onClick={handleReset}>reset</button>
        <button onClick={handleNewBlock}>create new block</button>
        <button onClick={handleDebugPrint}>print document</button>
        <button onClick={changeBlockTypeHandler}>change Type</button>
      </ul>
    </div>
  )
}

export default BlockDocumentActions
