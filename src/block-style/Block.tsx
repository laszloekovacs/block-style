import React, { useContext } from "react"
import { BlockType, State } from "./reducer"
import BlockParagraph from "./BlockParagraph"
import BlockHeader from "./BlockHeader"
import { documentContext } from "./BlockDocument"
import BlockActions from "./BlockActions"

function Block({ index }: { index: number }) {
  const doc = useContext(documentContext)
  const item = doc.state.blocks[index]

  const MakeActiveHandler = () => {
    doc.dispatch({ type: "MAKE_ACTIVE", payload: index })
  }

  let selectedBlock
  switch (item.type) {
    case "PARAGRAPH":
      selectedBlock = <BlockParagraph data={item.data as string} />
      break

    case "HEADER":
      selectedBlock = <BlockHeader data={item.data as string} />
      break

    default:
      selectedBlock = null
      break
  }

  return (
    <div onClick={MakeActiveHandler}>
      <BlockActions>{selectedBlock}</BlockActions>
    </div>
  )
}

export default Block
