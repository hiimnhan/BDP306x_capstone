import { getExchangeContract, getReserveContract } from "./web3Service";

export function getSwapABI(data) {
  /*TODO: Get Swap ABI*/
}

export function getTransferABI(data) {
  /*TODO: Get Transfer ABI*/
}

export function getApproveABI(srcTokenAddress, amount) {
  /*TODO: Get Approve ABI*/
}

export function getAllowance(srcTokenAddress, address, spender) {
  /*TODO: Get current allowance for a token in user wallet*/
}

/* Get Exchange Rate from Smart Contract */
export async function getExchangeRate(srcTokenAddress, destTokenAddress) {
  const exchangeContract = getExchangeContract();
  let rate = [1, 1];
  if (srcTokenAddress === destTokenAddress) return rate;
  else if (srcTokenAddress === '0x0') {
    const reserveDest = await exchangeContract.methods.reserves(destTokenAddress).call();
    const destContract = getReserveContract(reserveDest);

    const rawRate = await destContract.methods.getExchangeRate(true).call();
    rate = [rawRate, 1];
    return rate;
  } else if (destTokenAddress === '0x0') {
    const reserveSrc = await exchangeContract.methods.reserves(srcTokenAddress).call();
    const srcContract = getReserveContract(reserveSrc);

    const rawRate = await srcContract.methods.getExchangeRate(false).call();
    rate = [rawRate * Math.pow(10, -4), 1];
    return rate;
  }
  rate = await exchangeContract.methods.getExchangeRate(srcTokenAddress, destTokenAddress).call();
  return rate;
}

export async function exchangeTokens(srcTokenAddress, destTokenAddress, amount) {
  console.log('amount', amount);
  const exchangeContract = getExchangeContract();

  if (srcTokenAddress === '0x0') {
    const actualAmount = amount * Math.pow(10, 18);
    console.log('actual', actualAmount);
    await exchangeContract.methods.exchangeEthToToken(destTokenAddress, actualAmount).call();
  }
}

export async function getTokenBalances(tokens, address) {
  /*TODO: Get Token Balance*/
}
