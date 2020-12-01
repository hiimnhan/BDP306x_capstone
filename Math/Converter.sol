pragma solidity <0.8.0;

contract Converter {
    
    constructor() public {}
    
    // convert from eth to token by buy rate
    // amount * buy rate / ether
    function convertEthToTokenByRate(uint256 amount, uint256 buyRate) public view returns (uint256) {
        return amount * buyRate / 1e18;
    }

    // convert from token to eth by sell rate
    // amount * ether / sell rate
    function convertTokenToEthByRate(uint256 amount, uint256 sellRate) public view returns (uint256) {
        return amount * 1e18 / sellRate;
    }
}