import React, { Component } from 'react'
import getweb3 from './getweb3'

export default class Transfer extends Component {
  componentDidMount = async () => {
     const provider = await getweb3()
    const signer = provider.Provider.getSigner(0)
    const contract = provider.contract.connect(signer)
    console.log(contract)
    const tx = await contract.transfer('0x1f41E86D17325e8d0887F7d81c99Ba159eD4C0Ba','100')
    console.log(tx)
  }
  render () {
    return (
      <>
      
      </>
    )
  }
}

