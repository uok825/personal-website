import { Page, Text, Card, Collapse, Link } from '@geist-ui/react'
import Navbar from './Navbar'

const Experience = () => {

  return (
    <Page width="1200px">
      <Navbar />
      <Card mt={3} justify="center" hovarable>
      <Collapse.Group>
  <Collapse title="Avalanche ReFi Hackathon" initialVisible>
    <Text>A member of the winning team in the "Yerel Etki" project at the Avalanche ReFi Hackathon, representing team Chainway.</Text>
  </Collapse>
  <Collapse title="ScaffoldETH-v2 Hackathon">
    <Text>Creator of the "<Link href="https://github.com/uok825/p2p-nft-lending" target="_blank" color="blue"> P2P NFT Lending and Borrowing</Link>" project, but not a winner project :(</Text>
  </Collapse>
  <Collapse title="LeadingPrivacy’s ETH Privacy Istanbul Hackathon">
    <Text>A member of the winning team on the ZKSync Account Abstraction track in the “<Link href="https://github.com/itublockchain/will-wallet-leading-privacy" target="_blank" color="blue">WillWallet</Link>” project at the ETH Privacy Hackathon, representing team ITU Blockchain.</Text>
  </Collapse>
  <Collapse title="ETHGlobal HackFS23">
    <Text>A member of the "<Link b href="https://www.ethglobal.com/showcase/subpr0br-ohvbo" target="_blank" color="blue">subpr0br </Link>" project which is Finalist and selected for 2 best use bounties. Represtening me and my partner.</Text>
    </Collapse>
</Collapse.Group>
  </Card>
    </Page>
  )
}

export default Experience