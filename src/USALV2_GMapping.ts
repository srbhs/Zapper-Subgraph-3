import {
  ERC20TokenHoldingsOnConversion as ERC20TokenHoldingsOnConversionEvent,
  LiquidityTokens as LiquidityTokensEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/USALV2_G/USALV2_G"
import {
  LetsInvestCall,
  DepositETHCall,
  RenounceOwnershipCall,
  TransferOwnershipCall,
  WithdrawCall,
  WithdrawERC20TokenCall
} from "../generated/USALV2_G/USALV2_G"
import {
  USALV2_GERC20TokenHoldingsOnConversionEvent as USALV2_GERC20TokenHoldingsOnConversionEventSchema,
  USALV2_GLiquidityTokensEvent as USALV2_GLiquidityTokensEventSchema,
  USALV2_GOwnershipTransferredEvent as USALV2_GOwnershipTransferredEventSchema
} from "../generated/schema"
import {
  USALV2_GLetsInvestCall as USALV2_GLetsInvestCallSchema,
  USALV2_GdepositETHCall as USALV2_GdepositETHCallSchema,
  USALV2_GrenounceOwnershipCall as USALV2_GrenounceOwnershipCallSchema,
  USALV2_GtransferOwnershipCall as USALV2_GtransferOwnershipCallSchema,
  USALV2_GwithdrawCall as USALV2_GwithdrawCallSchema,
  USALV2_GwithdrawERC20TokenCall as USALV2_GwithdrawERC20TokenCallSchema
} from "../generated/schema"

export function handleERC20TokenHoldingsOnConversionEvent(
  event: ERC20TokenHoldingsOnConversionEvent
): void {
  let entity = new USALV2_GERC20TokenHoldingsOnConversionEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.param0 = event.params.param0
  entity.save()
}

export function handleLiquidityTokensEvent(event: LiquidityTokensEvent): void {
  let entity = new USALV2_GLiquidityTokensEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.param0 = event.params.param0
  entity.save()
}

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new USALV2_GOwnershipTransferredEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleLetsInvestCall(call: LetsInvestCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new USALV2_GLetsInvestCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handledepositETHCall(call: DepositETHCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new USALV2_GdepositETHCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new USALV2_GrenounceOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new USALV2_GtransferOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handlewithdrawCall(call: WithdrawCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new USALV2_GwithdrawCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlewithdrawERC20TokenCall(
  call: WithdrawERC20TokenCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new USALV2_GwithdrawERC20TokenCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}
