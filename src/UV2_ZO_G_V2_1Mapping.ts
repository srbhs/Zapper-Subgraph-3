import { OwnershipTransferred as OwnershipTransferredEvent } from "../generated/UV2_ZO_G_V2_1/UV2_ZO_G_V2_1"
import {
  ZapOutCall,
  ZapOut2PairTokenCall,
  ZapOut2PairTokenWithPermitCall,
  ZapOutWithPermitCall,
  InCaseTokengetsStuckCall,
  RenounceOwnershipCall,
  SetnewgoodwillCall,
  ToggleContractActiveCall,
  TransferOwnershipCall,
  WithdrawCall
} from "../generated/UV2_ZO_G_V2_1/UV2_ZO_G_V2_1"
import { UV2_ZO_G_V2_1OwnershipTransferredEvent as UV2_ZO_G_V2_1OwnershipTransferredEventSchema } from "../generated/schema"
import {
  UV2_ZO_G_V2_1ZapOutCall as UV2_ZO_G_V2_1ZapOutCallSchema,
  UV2_ZO_G_V2_1ZapOut2PairTokenCall as UV2_ZO_G_V2_1ZapOut2PairTokenCallSchema,
  UV2_ZO_G_V2_1ZapOut2PairTokenWithPermitCall as UV2_ZO_G_V2_1ZapOut2PairTokenWithPermitCallSchema,
  UV2_ZO_G_V2_1ZapOutWithPermitCall as UV2_ZO_G_V2_1ZapOutWithPermitCallSchema,
  UV2_ZO_G_V2_1inCaseTokengetsStuckCall as UV2_ZO_G_V2_1inCaseTokengetsStuckCallSchema,
  UV2_ZO_G_V2_1renounceOwnershipCall as UV2_ZO_G_V2_1renounceOwnershipCallSchema,
  UV2_ZO_G_V2_1setnewgoodwillCall as UV2_ZO_G_V2_1setnewgoodwillCallSchema,
  UV2_ZO_G_V2_1toggleContractActiveCall as UV2_ZO_G_V2_1toggleContractActiveCallSchema,
  UV2_ZO_G_V2_1transferOwnershipCall as UV2_ZO_G_V2_1transferOwnershipCallSchema,
  UV2_ZO_G_V2_1withdrawCall as UV2_ZO_G_V2_1withdrawCallSchema
} from "../generated/schema"

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new UV2_ZO_G_V2_1OwnershipTransferredEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleZapOutCall(call: ZapOutCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UV2_ZO_G_V2_1ZapOutCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handleZapOut2PairTokenCall(call: ZapOut2PairTokenCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UV2_ZO_G_V2_1ZapOut2PairTokenCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.amountA = call.outputs.amountA
  entity.amountB = call.outputs.amountB
  entity.save()
}

export function handleZapOut2PairTokenWithPermitCall(
  call: ZapOut2PairTokenWithPermitCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new UV2_ZO_G_V2_1ZapOut2PairTokenWithPermitCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.v = call.inputs.v
  entity.r = call.inputs.r
  entity.s = call.inputs.s
  entity.amountA = call.outputs.amountA
  entity.amountB = call.outputs.amountB
  entity.save()
}

export function handleZapOutWithPermitCall(call: ZapOutWithPermitCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UV2_ZO_G_V2_1ZapOutWithPermitCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.v = call.inputs.v
  entity.r = call.inputs.r
  entity.s = call.inputs.s
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handleinCaseTokengetsStuckCall(
  call: InCaseTokengetsStuckCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new UV2_ZO_G_V2_1inCaseTokengetsStuckCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UV2_ZO_G_V2_1renounceOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetnewgoodwillCall(call: SetnewgoodwillCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UV2_ZO_G_V2_1setnewgoodwillCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletoggleContractActiveCall(
  call: ToggleContractActiveCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new UV2_ZO_G_V2_1toggleContractActiveCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UV2_ZO_G_V2_1transferOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handlewithdrawCall(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new UV2_ZO_G_V2_1withdrawCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}
