const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");

// console.log(time);
// console.log(lodFixture);

// console.log(time.days);

const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
// console.log(anyValue);

const { expect } = require("chai");
const { ethers } = require("hardhat");
// console.log(expect);

describe("MyTest", function () {
  async function runEveryTime() {
    const ONE_YEAR_IN_SECONDS = 356 * 24 * 60 * 60;
    const ONE_GEWI = 1_000_000_000;

    const lockedAmount = ONE_GEWI;
    const unlockedTime = (await time.latest()) + ONE_YEAR_IN_SECONDS;

    // console.log(ONE_YEAR_IN_SECONDS, ONE_GEWI);
    // console.log(unlockedTime);

    // GET ACCOUNTS
    const [owner, otherAccount] = await ethers.getSigners();
    // const [owner, act1, act2, act3] = await ethers.getSigners();
    // console.log(owner);
    // console.log(otherAccount);

    const MyTest = await ethers.getContractFactory("MyTest");
    const myTest = await MyTest.deployed(unlockedTime, { value: lockedAmount });

    console.log(myTest, unlockedTime, lockedAmount, owner, otherAccount);

    return { myTest, unlockedTime, lockedAmount, owner, otherAccount };
  }
  runEveryTime();
});
