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
    const ONE_GEWI = 1000000000;

    console.log(ONE_YEAR_IN_SECONDS, ONE_GEWI);
  }
  runEveryTime();
});
