pragma solidity <0.8.0;
import "./Token.sol";
import "./Reserve.sol";

contract Exchange {
    using SafeMath for uint256;
    address _owner;
    mapping (Token => Reserve) public reserves;
    bool _tradeEnabled;

    constructor() public {
        _owner = msg.sender;
        _tradeEnabled = true;
    }

    modifier onlyOwner {
        require(msg.sender == _owner);
        _;
    }

    function convertEthToTokenByRate(uint256 amount, uint256 buyRate) public view returns (uint256) {
        return amount * buyRate / 1e18;
    }

    // convert from token to eth by sell rate
    // amount * ether / sell rate
    function convertTokenToEthByRate(uint256 amount, uint256 sellRate) public view returns (uint256) {
        return amount * 1e18 / sellRate;
    }

    // add/remove reserve
    function modifyReserveMap(Reserve reserve, Token token, bool isAdd) public  onlyOwner {
        if (isAdd) {
            reserves[token] = reserve;
        } else {
            delete reserves[token];
        }
    }

    // get Exchange Rate
    function getExchangeRate(Token srcToken, Token destToken) public view returns (uint256) {
        // srcToken -> ETH -> destToken
        // rate = buyrate dest / sellrate src
        return reserves[destToken].getExchangeRate(true) / reserves[srcToken].getExchangeRate(false);
    }

    function exchangeBetweenTokens(Token srcToken, Token destToken, uint256 srcAmount) public payable {
        require(srcAmount > 0, "Exchange Token -> Token: Amount must be bigger than 0");
        require(msg.value == srcAmount);
        // dest amount  = src * buy rate A / 1e18
        uint256 destAmount = convertEthToTokenByRate(srcAmount, reserves[srcToken].getExchangeRate(true));
        // sell token a -> eth
        // buy eth -> token b
        reserves[srcToken].exchange(false, srcAmount);
        reserves[destToken].exchange(true, destAmount);

        destToken.transfer(msg.sender, destToken.balanceOf(address(this)));

    }

    function exchangeEthToToken(Token token, uint256 amount) public payable {
        require(amount > 0, "Exchange Eth -> Token: Amount must be bigger than 0");
        require(msg.value == amount);

        reserves[token].exchange(true, amount);
        token.transfer(msg.sender, token.balanceOf(address(this)));
    }

    function exchangeTokenToEth(Token token, uint256 amount) public payable {
        require(amount > 0, "Exchange Token -> Eth: Amount must be bigger than 0");

        reserves[token].exchange(false, amount);
        token.transfer(msg.sender, token.balanceOf(address(this)));
    }
    
}
