import { details as detailsEvent } from "../generated/USRLG_v1/USRLG_v1"
import {
  LetsWithdrawonlyERCCall,
  LetsWithdrawonlyETHCall,
  DestructCall,
  InitializeCall,
  Initialize1Call,
  SetnewUniSwapFactoryAddressCall,
  SetnewdzgoodwillAddressCall,
  SetnewgoodwillCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  WithdrawCall,
  WithdrawERC20TokenCall
} from "../generated/USRLG_v1/USRLG_v1"
import { USRLG_v1detailsEvent as USRLG_v1detailsEventSchema } from "../generated/schema"
import {
  USRLG_v1LetsWithdrawonlyERCCall as USRLG_v1LetsWithdrawonlyERCCallSchema,
  USRLG_v1LetsWithdrawonlyETHCall as USRLG_v1LetsWithdrawonlyETHCallSchema,
  USRLG_v1destructCall as USRLG_v1destructCallSchema,
  USRLG_v1initializeCall as USRLG_v1initializeCallSchema,
  USRLG_v1initialize1Call as USRLG_v1initialize1CallSchema,
  USRLG_v1setnewUniSwapFactoryAddressCall as USRLG_v1setnewUniSwapFactoryAddressCallSchema,
  USRLG_v1setnewdzgoodwillAddressCall as USRLG_v1setnewdzgoodwillAddressCallSchema,
  USRLG_v1setnewgoodwillCall as USRLG_v1setnewgoodwillCallSchema,
  USRLG_v1toggleContractActiveCall as USRLG_v1toggleContractActiveCallSchema,
  USRLG_v1transferOwnershipCall as USRLG_v1transferOwnershipCallSchema,
  USRLG_v1withdrawCall as USRLG_v1withdrawCallSchema,
  USRLG_v1withdrawERC20TokenCall as USRLG_v1withdrawERC20TokenCallSchema
} from "../generated/schema"

export function handledetailsEvent(event: detailsEvent): void {
  let entity = new USRLG_v1detailsEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.ExchangeAddress = event.params.ExchangeAddress
  entity.TokenAdddress = event.params.TokenAdddress
  entity.LiqRed = event.params.LiqRed
  entity.ethRec = event.params.ethRec
  entity.tokenRec = event.params.tokenRec
  entity.func = event.params.func
  entity.save()
}

export function handleLetsWithdrawonlyERCCall(
  call: LetsWithdrawonlyERCCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new USRLG_v1LetsWithdrawonlyERCCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.LiquidityTokenSold = call.inputs.LiquidityTokenSold
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handleLetsWithdrawonlyETHCall(
  call: LetsWithdrawonlyETHCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new USRLG_v1LetsWithdrawonlyETHCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.LiquidityTokenSold = call.inputs.LiquidityTokenSold
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handledestructCall(call: DestructCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new USRLG_v1destructCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handleinitializeCall(call: InitializeCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new USRLG_v1initializeCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handleinitialize1Call(call: Initialize1Call): void {
  let id = call.transaction.hash.toHex()
  let entity = new USRLG_v1initialize1CallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewUniSwapFactoryAddressCall(
  call: SetnewUniSwapFactoryAddressCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new USRLG_v1setnewUniSwapFactoryAddressCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewdzgoodwillAddressCall(
  call: SetnewdzgoodwillAddressCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new USRLG_v1setnewdzgoodwillAddressCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewgoodwillCall(call: SetnewgoodwillCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new USRLG_v1setnewgoodwillCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActiveCall(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new USRLG_v1toggleContractActiveCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new USRLG_v1transferOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handlewithdrawCall(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new USRLG_v1withdrawCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlewithdrawERC20TokenCall(
  call: WithdrawERC20TokenCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new USRLG_v1withdrawERC20TokenCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}
