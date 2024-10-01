// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract OneMilNftPixels is ERC721, Ownable {
    struct Pixel {
        bytes3 colour;
        uint256 price;
    }

    mapping(uint24 => Pixel) public pixels;
    uint256 public minPriceIncrement;
    uint256 public updatePrice;

    event Purchase(uint24 indexed tokenId);
    event Update(uint24 indexed tokenId);
    
    // Pass msg.sender to the Ownable constructor
    constructor() ERC721("OneMilNftPixels", "NFT1MPX") Ownable(msg.sender) {}

    function setMinPriceIncrement(uint256 newIncrement) external onlyOwner {
        minPriceIncrement = newIncrement;
    }

    function setUpdatePrice(uint256 newPrice) external onlyOwner {
        updatePrice = newPrice;
    }

    function buy(uint24 id, bytes3 colour) external payable {
        Pixel memory pixel = pixels[id];

        try this.ownerOf(id) {
            revert("Pixel already owned");
        } catch { 
            // If the token does not exist, continue with the purchase
        }

        require(msg.value >= pixel.price + minPriceIncrement, "Insufficient payment");

        pixels[id].colour = colour;
        pixels[id].price = msg.value;

        _mint(msg.sender, id);

        payable(owner()).transfer(msg.value);

        emit Purchase(id);
    }

    function update(uint24 id, bytes3 colour) external payable {
        require(msg.value >= updatePrice, "Insufficient payment for update");

        pixels[id].colour = colour;

        payable(owner()).transfer(msg.value);

        emit Update(id);
    }
}
