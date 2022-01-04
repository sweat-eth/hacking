// scripts/index.js
async function main () {
  // Our code will go here
  // Retrieve account
  const account = '0xD5Ff53724C6B8Fe007693dCdf1ea454F155cd476';
  console.log(account);

  // Set up an ethers contract, representing our deployed Box instance
  const address = '0x1CB1A5e65610AEFF2551A50f76a87a7d3fB649C6';
  const Toadz = await ethers.getContractFactory('Toadz');
  const toadz = await Toadz.attach(address);

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
