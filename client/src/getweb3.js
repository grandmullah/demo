import  Web3  from 'web3';
import { ethers } from 'ethers'
import Token from './class/EToken.json'
//import { Web3Provider } from 'react-web3'
const getWeb3 = () => 
    new Promise((resolve,reject) => {
        window.addEventListener("load", async () => {
            
            // if (window.ethereum) {
            //     //const web3 =new Web3(window.ethereum)
            //     //try {
            //         //await window.ethereum.enable()
            //         await window.ethereum.send('eth_requestAccounts')
            //         //resolve(web3)
            //     // } catch (error) {
            //     //    reject(error) 
            //     // }
            // }
             
            if (window.web3) {
            
                window.web3 = new Web3(window.web3.currentProvider)
            } 
            var results 
            var  web3 = window.web3
             if (typeof web3 !== 'undefined'){
                web3 = new Web3(web3.currentProvider)
              try {
                  await window.ethereum.enable()
                const Provider =   new ethers.providers.Web3Provider(web3.currentProvider);
                const abi = Token.abi
                const address =Token.networks[17].address
                const Contract = new ethers.Contract(address,abi,Provider)
                results = {
                    Provider: Provider,
                    contract: Contract
                }
                resolve(results)
            }catch (error){
                reject(error)
            }
            }
            else {
                var provider = new Web3.providers.HttpProvider('http://localhost:8545')
                 web3 =  new Web3(provider)
                 const Provider =   new ethers.providers.Web3Provider(web3.currentProvider);
                 const abi = Token.abi
                 const address =Token.networks[17].address
                 const Contract = new ethers.Contract(address,abi,Provider)
                console.log("prov")
                results = {
                    Provider:Provider,
                    contract: Contract
                }
               resolve(results)
            }
        })
    })


export default getWeb3