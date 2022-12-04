import React from "react"

function BlockHeader({ data }: { data: string }) {
  return <h1 className={data ? "empty" : "full"}>{data ? data : "Start typing..."}</h1>
}

export default BlockHeader
