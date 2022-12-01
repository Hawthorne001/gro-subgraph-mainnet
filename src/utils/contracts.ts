import { Address } from '@graphprotocol/graph-ts';
import {
    ADDR,
    STAKER_ADDRESSES
} from '../utils/constants';


// check if Transfer is a deposit or withdrawal
const isDepositOrWithdrawal = (
    from: Address,
    to: Address,
): bool => {
    return (from == ADDR.ZERO || to == ADDR.ZERO)
        ? true
        : false;
}

// check if Transfer comes in or out of a staker contract
const isStakerTransfer = (
    from: Address,
    to: Address,
): bool => {
    return (STAKER_ADDRESSES.includes(from) || STAKER_ADDRESSES.includes(to))
        ? true
        : false;
}

const isTransferToGRouter = (to: Address): bool => {
    return  ADDR.GROUTER.equals(to);
}

// const isStakerTransfer = (
//     from: Address,
//     to: Address,
//     poolId: string,
//     amount: BigDecimal,
// ): bool => {
//     let result = false;
//     if (STAKER_ADDRESSES.includes(to)) {
//         result = true;
//         let staker = initStakerData(poolId);
//         staker.lp_supply_tx = staker.lp_supply_tx.plus(amount);
//         staker.save();
//     } else if (STAKER_ADDRESSES.includes(from)) {
//         result = true;
//         let staker = initStakerData(poolId);
//         staker.lp_supply_tx = staker.lp_supply_tx.minus(amount);
//         staker.save();
//     }
//     return result;
// }

export {
    isDepositOrWithdrawal,
    isStakerTransfer,
    isTransferToGRouter
}
