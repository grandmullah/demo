import React, { Component } from 'react'
import { Switch, Route} from  'react-router-dom'
import getWeb3 from './getweb3'
//import { ethers } from 'ethers'
import  Transfer from './Transfer'

class App extends Component {
   state ={ provider: 50 }
    componentDidMount = async () => {
      try{
      const Provider = await getWeb3();
      const signer = Provider.Provider.getSigner(0)
      const total = await Provider.contract.TotalSupply()
      console.log(Provider.Provider)
      const tt = total.toNumber()
      this.setState({tt})
       console.log(tt)
       } catch(error) {
          console.log(error)
      }
      
    }
    render() {
       const provi = this.state.provider
        // console.log(this.state.provider)
        return ( 
            <div >
              <Transfer />
             Your Balance is :{provi}
            </div>
        );
    }
}

export default App;