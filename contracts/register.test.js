/* eslint-disable */

const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Register", () => {

    let contract;
    let owner;
    let addr1;
    let addr2;

    beforeEach(async () => {
        contractFactory = await ethers.getContractFactory("Register");
        contract = await contractFactory.deploy();
        owner = await ethers.getSigner();
        [owner, addr1, addr2] = await ethers.getSigners();

        newOwner = addr2.address;
    });

    describe('Init owner and change owner', () => {

        it('should have the owner of the contract in the registerdAccounts once the contract deployed', async () => {
            const currentAccount = await contract.getRegisteredAccount(owner.address);
            expect(currentAccount[0]).to.equals(owner.address);
        });

        it('should trigger the "OwnershipTransferred event" once the "transferOwnership function" finished', async () => {
            const previousOwner = owner;
            await expect(contract.transferOwnership(newOwner))
                .emit(contract, 'OwnershipTransferred')
                .withArgs(previousOwner.address, newOwner);


            describe('After assigning new owner', () => {

                it(`should get the newOwner's address as ${newOwner}`, async () => {
                    await contract.transferOwnership(newOwner);
                    expect(await contract.getOwner()).to.equal(newOwner);
                });

                it('should fail if sender is the previous owner', async () => {

                    await expect(contract.connect(previousOwner).transferOwnership(addr2.address))
                        .to.be.revertedWith('without a reason string');
                });
            });
        });

        it('should fail if sender is not the owner', async () => {
            await expect(contract.connect(addr1).transferOwnership(newOwner))
                .to.be.revertedWith('without a reason string');
        });

    });
    describe('Register and deactiate accounts', () => {
        const registeredAccount = '0x8355DBE8B0e275ABAd27eB843F3eaF3FC855e525';
        it('should trigger the "newRegistered event" once the "signup function()" finished', async () => {
            const signupAcc = '0xe53AA7f2d2abDF0C711914ACFE0e64bD0A709627';
            await expect(contract.signup(signupAcc))
                .emit(contract, 'newRegistered')
                .withArgs(signupAcc);

            const signupAcc2 = registeredAccount;

            await expect(contract.signup(signupAcc2))
                .emit(contract, 'newRegistered')
                .withArgs(signupAcc2);

            // it('should have 3 accounts in the registeredAccounts"', async () => {
            //     const currentAccounts = await contract.getRegisteredAccounts();
            //     expect(currentAccounts.length).to.equals(3);
            // });

            it('should get the false value of the deactivated account', async () => {
                const deactivatingAccount = await contract.getRegisteredAccount(registeredAccount);
                const getOwner = await contract.getOwner();
                const getSigner = await ethers.getSigner(getOwner);
                await contract.connect(getSigner).deactivateAccount(deactivatingAccount[0]);
                const deactivatedAccount = await contract.getRegisteredAccount(registeredAccount);
                expect(deactivatedAccount[1]).to.be.equals(false);
            });

            it('should trigger the "accountDeactivatd event" once "deactivateAccount function" finished ', async () => {
                const deactivatingAccount = await contract.getRegisteredAccount(registeredAccount);
                const getOwner = await contract.getOwner();
                const getSigner = await ethers.getSigner(getOwner);
                await expect(contract.connect(getSigner).deactivateAccount(deactivatingAccount[0]))
                    .emit(contract, 'accountDeactivatd')
                    .withArgs(registeredAccount);
            });
        });
    })

})