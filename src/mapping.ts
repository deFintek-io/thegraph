import { BigInt } from "@graphprotocol/graph-ts"
import { Swap as SwapEvent } from "../generated/UniswapV3Pool/UniswapV3Pool"
import { Swap } from "../generated/schema"

export function handleSwap(event: SwapEvent): void {
  let swap = new Swap(event.transaction.hash.toHex() + "-" + event.logIndex.toString())
  swap.sender = event.params.sender
  swap.recipient = event.params.recipient
  swap.amount0 = event.params.amount0
  swap.amount1 = event.params.amount1
  swap.logIndex = event.logIndex
  swap.transactionHash = event.transaction.hash
  swap.save()
}

