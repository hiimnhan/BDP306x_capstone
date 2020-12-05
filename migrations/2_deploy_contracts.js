
var Reserve = artifacts.require("./Reserve.sol");
var Exchange = artifacts.require('./Exchange.sol');

module.exports = async function (deployer) {
    await deployer.deploy(Reserve, 160, 178, 2000000, 'SUNFLOWER', 'SFL', 4);
    const sflAddr = Reserve.address;
    const sflRes = await Reserve.at(sflAddr);

    const sflToken = await sflRes._token().then(res => res);
    console.log('sflToken', sflToken);

    await deployer.deploy(Reserve, 210, 223, 2000000, 'DAISY', 'DSY', 4);
    const dsyAddr = Reserve.address;
    const dsyRes = await Reserve.at(dsyAddr);

    const dsyToken = await dsyRes._token().then(res => res);
    console.log('dsyToken', dsyToken);

    const exchange = await deployer.deploy(Exchange);
    await exchange.modifyReserveMap(sflAddr, true);
    await exchange.modifyReserveMap(dsyAddr, true);

}