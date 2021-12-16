import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import BTC from '../assets/btc-img.png'
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi'
import './Featured.css'

const Featured = () => {

    const [data, setData] = useState(null)

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false'

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    // console.log(data)

    if (!data) return null

    return (
        <div className='featured'>
            <div className='container'>
                {/* Left */}
                <div className='left'>
                    <h2>Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h2>
                    <p>See all available assets: Cryptocurrencies and NFT's</p>
                    <button className='btn'>See More Coins</button>
                </div>

                {/* Right */}

                <div className='right'>
                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/' /> */}
                            <img src={data[0].image} alt='' />
                        </div>
                        <div>
                            <h5>{data[0].name}</h5>
                            <p>${data[0].current_price.toLocaleString()}</p>
                        </div>

                        {data[0].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {data[0].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {data[0].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                    </div>
                    <div className='card'>
                        <div className='top'>
                            <img src={data[1].image} alt='' />
                        </div>
                        <div>
                            <h5>{data[1].name}</h5>
                            <p>${data[1].current_price.toLocaleString()}</p>
                        </div>

                        {data[1].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {data[1].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {data[1].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                    </div>
                    <div className='card'>
                        <div className='top'>
                            <img src={data[2].image} alt='' />
                        </div>
                        <div>
                            <h5>{data[2].name}</h5>
                            <p>${data[2].current_price.toLocaleString()}</p>
                        </div>

                        {data[2].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {data[2].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {data[2].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                    </div>
                    <div className='card'>
                        <div className='top'>
                            <img src={data[3].image} alt='' />
                        </div>
                        <div>
                            <h5>{data[3].name}</h5>
                            <p>${data[3].current_price.toLocaleString()}</p>
                        </div>

                        {data[3].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {data[3].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {data[3].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                    </div>
                    <div className='card'>
                        <div className='top'>
                            <img src={data[4].image} alt='' />
                        </div>
                        <div>
                            <h5>{data[4].name}</h5>
                            <p>${data[4].current_price.toLocaleString()}</p>
                        </div>

                        {data[0].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {data[4].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {data[4].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                    </div>
                    <div className='card'>
                        <div className='top'>
                            <img src={data[5].image} alt='' />
                        </div>
                        <div>
                            <h5>{data[5].name}</h5>
                            <p>${data[5].current_price.toLocaleString()}</p>
                        </div>

                        {data[5].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {data[5].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Featured
