import React, { useContext, useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";
import './welcome.css'
import gif from "../images/ezgif.com-gif-maker (6).gif";

const companyCommonStyles = "min-h-[0px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.08"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 amoutValue w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  let { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    let amoutValue = document.getElementsByClassName('amoutValue')
    let { addressTo, amount, keyword, message } = formData;
    formData.amount = amoutValue[1].value;
    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  const myButton = (e) => {
    if (e.target.className === 'button-one') {
      let amoutValue = document.getElementsByClassName('amoutValue');
      amoutValue[1].value = 0.08;
    }
    else if (e.target.className === 'button-two') {
      let amoutValue = document.getElementsByClassName('amoutValue');
      amoutValue[1].value = 1.6;
    }
    else if (e.target.className === 'button-three') {
      let amoutValue = document.getElementsByClassName('amoutValue');
      amoutValue[1].value = 2.4;
    }
    else if (e.target.className === 'button-four') {
      let amoutValue = document.getElementsByClassName('amoutValue');
      amoutValue[1].value = 3.2;
    }
    else if (e.target.className === 'button-five') {
      let amoutValue = document.getElementsByClassName('amoutValue');
      amoutValue[1].value = 4;
    }
    else if (e.target.className === 'button-ten') {
      let amoutValue = document.getElementsByClassName('amoutValue');
      amoutValue[1].value = 8;
    }
  };

  return (
    <div className="do gradient-bg-welcome" >
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="box">
          <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
            <div className="nnn p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
              <div className="flex justify-between flex-col w-full h-full">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                    <SiEthereum fontSize={21} color="#fff" />
                  </div>
                  <BsInfoCircle fontSize={17} color="#fff" />
                </div>
                <div>
                  <p className="text-white font-light text-sm">
                    {shortenAddress(currentAccount)}
                  </p>
                  <p className="text-white font-semibold text-lg mt-1">
                    Ethereum
                  </p>
                </div>
              </div>
            </div>
            <div>
              {!currentAccount && (
                <button
                  type="button"
                  onClick={connectWallet}
                  className="nn flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
                >
                  <AiFillPlayCircle className="text-white mr-2" />
                  <p className="text-white text-base font-semibold">
                    Connect Wallet
                  </p>
                </button>
              )}
            </div>
            <div className="con p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
              <Input placeholder="Address To" name="addressTo" type="text" value="0x377a6c15a892A346F1f08F29130a63A428F1A32b" handleChange={handleChange} />
              <Input placeholder="Amount (ETH)" className='amoutValue' name="amount" type="number" handleChange={handleChange} />
              {/* <button type="button" onClick={() => setValue('0.08')} >Click</button> */}


              <ul className="btn-ul">
                <li className="inline-block list">
                  <button type="button" className="button-one" onClick={myButton} >MINT 1</button>
                </li>
                <li>
                  <button type="button" className="button-two" onClick={myButton} >MINT 2</button>
                </li>
                <li>
                  <button type="button" className="button-three" onClick={myButton} >MINT 3</button>
                </li>
                <li>
                  <button type="button" className="button-four" onClick={myButton} >MINT 4</button>
                </li>
                <li>
                  <button type="button" className="button-five" onClick={myButton} >MINT 5</button>
                </li>
                <li>
                  <button type="button" className="button-ten" onClick={myButton} >MINT 10</button>
                </li>
              </ul>

              <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />
              <div className="h-[1px] w-full bg-gray-400 my-2" />
              {isLoading
                ? <Loader />
                : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="name text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                  >
                    Send now
                  </button>
                )}
            </div>
          </div>
        </div>
      </div>
      <div className="gif">
        <img src={gif} className="gifi" />
      </div>
    </div>
  );
};

export default Welcome;
