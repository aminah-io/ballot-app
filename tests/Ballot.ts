import { ethers } from "hardhat";
import { Ballot } from "../typechain-types";
import { expect } from "chai";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";

const PROPOSALS = ["Prop 1", "Prop 2", "Prop 3"]

describe("Ballot", () => {
  let owner: any, recipient: any, ballotContract: Ballot;

  describe("when the contract is deployed", async () => {
    beforeEach(async function () {
      const [ownerAccount, recipientAccount] = await ethers.getSigners();
      owner = ownerAccount;
      recipient = recipientAccount;
  
      const ballotFactory = await ethers.getContractFactory("Ballot");
      ballotContract = await ballotFactory.deploy((PROPOSALS.map(proposal => ethers.encodeBytes32String(proposal))));
      await ballotContract.waitForDeployment();
    });

    it("has the provided proposals", async () => {});
    it("zero votes for all proposals", async () => {});
    it("sets the deployer address as chairperson", async () => {
      const chairperson = await ballotContract.chairperson();
      expect(chairperson).to.equal(owner.address);
    });
    it("sets the voting weight for the chairperson as 1", async () => {});
    it("should", async () => {});
  });
});