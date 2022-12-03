import React, { useContext } from "react"
import { BlockType, State } from "./reducer"
import BlockParagraph from "./BlockParagraph"
import BlockHeader from "./BlockHeader"
import { documentContext } from "./BlockDocument"

function Block({ index }: { index: number }) {
  const doc = useContext(documentContext)

  const item = doc.state.blocks[index]

  switch (item.type) {
    case "PARAGRAPH":
      return <BlockParagraph data={item.data as string} />

    case "HEADER":
      return <BlockHeader data={item.data as string} />

    default:
      return null
  }
}

export default Block
