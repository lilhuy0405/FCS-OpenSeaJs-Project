import React from 'react';
import styled from 'styled-components';
import Log from '../Log'
import {OpenSeaPort, Network} from 'opensea-js';
import {web3Provider} from '../../constants';
import OrderDetail from "../../OrderDetail";
import "../../OrderDetail.css"


export default class App extends React.Component {

    state = {
        accountAddress: null,
        seaport: null,
        detailPage: false,
        order: null
    }

    constructor(props) {
        super(props)

        // onNetworkUpdate(this.onChangeAddress)
        this.state.accountAddress = '0x987D3241AE658Af82822e3c227CD3433E982b976'
        this.state.seaport = new OpenSeaPort(web3Provider, {
            networkName: Network.Rinkeby
        })
        this.toggleDetail = this.toggleDetail.bind(this);
        this.updateOrder = this.updateOrder.bind(this);

    }

    toggleDetail() {
        console.log("toggle detail")
        let isDetail = this.state.detailPage;
        this.setState({detailPage: !isDetail})
    }

    updateOrder(order) {
        this.setState({order: order})
    }

    // onChangeAddress = () => {
    //     this.seaport = new OpenSeaPort(web3Provider, {
    //         networkName: Network.Rinkeby
    //     })
    //     this.web3 = this.seaport.web3
    //     this.web3.eth.getAccounts((err, res) => {
    //         this.setState({
    //             accountAddress: res[0]
    //
    //         })
    //         console.log(res[0])
    //     })
    // }

    render() {
        return (
            <div>

                <Header>
                    <h1>
                        Spores
                    </h1>
                    <h6>

                    </h6>
                </Header>
                <main>
                    {this.state.detailPage ?
                        <OrderDetail toggleDetail={this.toggleDetail} order = {this.state.order}/>
                        :
                        <Log
                            seaport={this.state.seaport}
                            accountAddress={this.state.accountAddress}
                            toggleDetail={this.toggleDetail}
                            updateOrder={this.updateOrder}
                        />
                    }


                </main>
            </div>
        )
    }
}

const Header = styled.header`
  border-bottom: 1px solid lightgrey;
  padding: 10px;
  text-align: center;
  background-color: #f4f9fd;

  h6 img {
    width: 24px;
  }
`

