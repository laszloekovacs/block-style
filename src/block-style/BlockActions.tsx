import React, { KeyboardEventHandler } from "react"

function BlockActions() {
  const keyHandler: KeyboardEventHandler = (ev) => {
    console.log(ev.key)
    ev.stopPropagation()
  }

  return <div onKeyUpCapture={keyHandler}>Actions</div>
}

export default BlockActions
