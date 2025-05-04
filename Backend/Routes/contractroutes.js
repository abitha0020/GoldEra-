require('dotenv').config();
const express = require('express');
const { ethers } = require('ethers');

const router = express.Router();

const providerUrl = process.env.GANACHE_URL || 'http://127.0.0.1:7545'; 
const privateKey = process.env.PRIVATE_KEY;
const contractAddress = process.env.CONTRACT_ADDRESS;

const contractABI = 
[
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "huid",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "oldAadhar",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newAadhar",
				"type": "uint256"
			}
		],
		"name": "AadharUpdated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "aadhar",
				"type": "uint256"
			},
			{
				"internalType": "string[]",
				"name": "huidArray",
				"type": "string[]"
			}
		],
		"name": "addHUIDs",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "aadhar",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "huid",
				"type": "string"
			}
		],
		"name": "HUIDAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "aadhar",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "huid",
				"type": "string"
			}
		],
		"name": "HUIDRemoved",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "aadhar",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "huid",
				"type": "string"
			}
		],
		"name": "removeHUID",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newAadhar",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "huid",
				"type": "string"
			}
		],
		"name": "updateAadhar",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "aadharToHUIDs",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "huid",
				"type": "string"
			}
		],
		"name": "getAadhar",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "aadhar",
				"type": "uint256"
			}
		],
		"name": "getHUIDs",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "huidToAadhar",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "aadhar",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "huid",
				"type": "string"
			}
		],
		"name": "isHUIDCorresponding",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const provider = new ethers.JsonRpcProvider(providerUrl);
const wallet = new ethers.Wallet(privateKey, provider);
const contract = new ethers.Contract(contractAddress, contractABI, wallet);

// Route to add a HUID
router.post('/add-huid', async (req, res) => {
    const { aadhar, huid } = req.body;

    try {
        const tx = await contract.addHUIDs(aadhar, huid);
        await tx.wait();
        res.status(200).json({ message: 'HUID added successfully', txHash: tx.hash });
    } catch (error) {
        console.error('Error adding HUID:', error.message);
        res.status(500).json({ error: 'Failed to add HUID', details: error.message });
    }
});

// Route to remove a HUID
router.post('/remove-huid', async (req, res) => {
    const { aadhar, huid } = req.body;

    try {
        const tx = await contract.removeHUID(aadhar, huid);
        await tx.wait();
        res.status(200).json({ message: 'HUID removed successfully', txHash: tx.hash });
    } catch (error) {
        console.error('Error removing HUID:', error.message);
        res.status(500).json({ error: 'Failed to remove HUID', details: error.message });
    }
});

// Route to get HUIDs for a specific Aadhar
router.get('/get-huids/:aadhar', async (req, res) => {
    const { aadhar } = req.params;

    try {
        const huids = await contract.getHUIDs(aadhar);
        res.status(200).json({ huids });
    } catch (error) {
        console.error('Error fetching HUIDs:', error.message);
        res.status(500).json({ error: 'Failed to fetch HUIDs', details: error.message });
    }
});

// Route to get Aadhar for a specific HUID
router.get('/get-aadhar/:huid', async (req, res) => {
    const { huid } = req.params;

    try {
        const aadhar = await contract.getAadhar(huid);
        res.status(200).json({ aadhar: aadhar.toString() }); // Convert BigInt to string
    } catch (error) {
        console.error('Error fetching Aadhar:', error.message);
        res.status(500).json({ error: 'Failed to fetch Aadhar', details: error.message });
    }
});

// Route to update Aadhar for a HUID
router.post('/update-aadhar', async (req, res) => {
    const { newAadhar, huid } = req.body;

    try {
        const tx = await contract.updateAadhar(newAadhar, huid);
        await tx.wait();
        res.status(200).json({ message: 'Aadhar updated successfully', txHash: tx.hash });
    } catch (error) {
        console.error('Error updating Aadhar:', error.message);
        res.status(500).json({ error: 'Failed to update Aadhar', details: error.message });
    }
});

// Route to check if a HUID corresponds to an Aadhar
router.get('/is-huid-corresponding', async (req, res) => {
    const { aadhar, huid } = req.query;

    if (!aadhar || !huid) {
        return res.status(400).json({ error: 'Missing required query parameters: aadhar and huid' });
    }

    try {
        const result = await contract.isHUIDCorresponding(aadhar, huid);
        res.status(200).json({ corresponding: result });
    } catch (error) {
        console.error('Error checking HUID correspondence:', error.message);
        res.status(500).json({ error: 'Failed to check HUID correspondence', details: error.message });
    }
});


module.exports = router;
