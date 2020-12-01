var Token = artifacts.require("./Token.sol");
var Reserve = artifacts.require("./Reserve.sol");
var Exchange = artifacts.require('./Exchange.sol');

module.exports = async function (deployer) {
    const sflToken = await deployer.deploy(Token, 2000000, 'Sunflower', 'SFL', 4);
    const sflAddr = Token.address;

    const sflReserve = await deployer.deploy(Reserve, 200*10000, 210*10000, sflAddr);
    const sflReserveAdrr = sflReserve.address;

    const dsyToken = await deployer.deploy(Token, 2000000, 'Daisy', 'DSY', 4);
    const dsyAddr = dsyToken.address;
    const dsyBalance = await dsyToken.totalSupply().then(res => res.words[0]);
    console.log('dsy ba', dsyBalance);

    const dsyReserve = await deployer.deploy(Reserve, 100*10000, 120*10000, dsyAddr);

    await dsyToken.transfer(dsyReserve.address, dsyBalance - 10000);
    const dsyReserveBalance = await dsyReserve.getTokenBalance().then(res => console.log('balance re dsy', res.words[0]));


}