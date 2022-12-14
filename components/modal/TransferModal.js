import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Transfer from './Transfer'

const TransferModal = ({sanityTokens,thirdWebTokens,walletAddress}) => {

  const [action, setActon] = useState('send')
  const [selectedToken, setSelectedToken] = useState(sanityTokens)
    const selectedStyle={
        color:'#3773f5'
    }
    const unselectedStyle={
        border:'1px solid #282b2f',
    }

    const selectedModal=option=>{
      switch(option){
        case 'Send':
          return <Transfer 
          selectedToken={selectedToken}
          setAction={setActon}
          thirdWebTokens={thirdWebTokens}
          walletAddress={walletAddress}/>
        case 'Receive':
          return <h2>Receive</h2>
      }
    }

  return (
    <Wrapper>
        <Selector>
       <Option 
       style={action==='Send' ? selectedStyle : unselectedStyle} 
       onClick={()=>setActon('Send')}>
       <p>Send</p>
       </Option>
        <Option 
        style={action==='Receive' ? selectedStyle : unselectedStyle} 
        onClick={()=>setActon('Receive')}>
        <p>Receive</p>
        </Option>
        </Selector>
        <ModalMain>
          {selectedModal(action)}
        </ModalMain>
    </Wrapper>
  )
}

export default TransferModal


const Wrapper = styled.div`
  height: 35rem;
  width: 27rem;
  color: white;
  border: 1px solid #282b2f;
  display: flex;
  flex-direction: column;
`
const Selector = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 5rem;
`

const Option = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    background-color: #111214;
  }
`

const ModalMain = styled.div`
  padding: 1rem;
  flex: 1;
`