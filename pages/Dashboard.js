import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'
import { ThirdwebSDK } from '@3rdweb/sdk'
import {ethers} from 'ethers'


const sdk=new ThirdwebSDK(
  new ethers.Wallet(
    process.env.NEXT_PUBLIC_METAMASK_KEY,
    ethers.getDefaultProvider(
      'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
    )
  )
)

const Dashboard = ({address}) => {
  const [sanityTokens,setSanityTokens]=useState([]);
  const [thirdWebTokens,setThirdWebTokens]=useState([]);

  useEffect(() => {
    const getSanityAndThirdWebToken= async()=>{
        const coins=await fetch(
          "https://tae71gg1.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D'coins'%5D%7B%0A%20%20name%2C%0A%20%20usdPrice%2C%0A%20%20contractAddress%2C%0A%20%20symbol%2C%0A%20%20logo%0A%7D"
          )
          const saintyTokens=(await coins.json()).result
          
          setSanityTokens(saintyTokens)
          setThirdWebTokens(
            sanityTokens.map(token=> console.log(sdk.getTokenModule(token.contractAddress))
          )
          )
    }
    getSanityAndThirdWebToken()
  }, [])
  // console.log("Sanity",sanityTokens)
  // console.log("ThirdWeb",thirdWebTokens);




  return (
  <Wrapper>
   <Sidebar/>
   <MainContainer>
   <Header 
   walletAddress={address} 
   sanityTokens={sanityTokens} 
   thirdWebTokens={thirdWebTokens}/>
   <Main
   walletAddress={address} 
   sanityTokens={sanityTokens} 
   thirdWebTokens={thirdWebTokens}/>
   </MainContainer>
  </Wrapper>
  )
}

export default Dashboard

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #0a0b0d;
  color: white;
  overflow:hidden;
`

const MainContainer = styled.div`
  flex: 1;
`