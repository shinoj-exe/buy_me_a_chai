import './App.css';
import { ethers } from 'ethers';
import abi from './contract/Chai.json'
import { useEffect, useState } from 'react';
import Buy from './components/Buy';
import Memos from './components/Memos';
function App() {
  const [state,setState]=useState({
    provider:null,
    signer:null,
    contract:null
  })

  useEffect(()=>{
    const connectWallet = async()=>{
      const contractAddress="0xB1c628c997c2455d5e44acBc8262b4376637d0B9";
      const contractABI = abi.abi;
      try {
        const {ethereum}=window;
        if(ethereum){
          const account=await ethereum.request({method:"eth_requestAccounts"})
        }
        const provider= new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress,contractABI,signer);
        setState({provider,signer,contract});
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  },[])
  // console.log(state);
  return (
    <div className="App">
      <Buy state={state}/>
      <Memos state={state}/>
    </div>
  );
}

export default App;
