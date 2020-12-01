pragma solidity <0.8.0;

interface IERC20 {
    // return total tokens in exisitence
    function totalSupply() external view returns (uint256);

    // return the amount of tokens owned by 'account'
    function balanceOf(address account) external view returns (uint256);

    // send amount of tokens to another
    function transfer(address to, uint256 amount) external returns (bool);

    // return number of tokens that 'spender' will be allowed to spend on behalf of 'owner' thru {transferFrom}
    // default is 0
    // change when {aprrove} or {transferFrom} are called
    function allowance(address owner, address spender)
        external
        view
        returns (uint256);

    // set 'amount' as the allowance of `spender` over the caller's tokens
    // return a boolean value indicating whether the operation succeeded
    function approve(address spender, uint256 amount) external returns (bool);

    // send 'amount' of tokens from 'owner' to 'recipient' using allowance mechanism
    // allow smart contract to execute a transfer on behalf of 'owner'
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);

    // emit when 'value' tokens are moved from 'from' to 'to'
    event Transfer(address indexed from, address indexed to, uint256 value);
    //emit when the allowance of 'spender' for an 'owner' is set by a call to {aprrove}
    event Approval(address indexed owner, address indexed to, uint256 value);
}
