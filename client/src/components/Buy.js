import { ethers } from 'ethers';
import React from 'react'

const Buy = ({state}) => {
    const buyChai=async(e)=>{
        e.preventDefault();
        const {contract}=state;
        const name =document.querySelector("#name").value;
        const message =document.querySelector("#message").value;
        console.log(name,message,contract);
        const amount ={value:ethers.utils.parseEther("0.001")};
        const transaction = await contract.buyChai(name,message,amount)
        await transaction.wait();
        console.log("Transaction complete");
    }
  return (
    <div>
        <form onSubmit={buyChai}>
            <label htmlFor="">Name</label>
            <input type="text" id='name' placeholder='Enter your name' />
            <label htmlFor="">Message</label>
            <input type="text" id='message' placeholder='Enter your Message' />
            <button type="submit">Pay</button>
        </form>
    </div>
  )
}

export default Buy