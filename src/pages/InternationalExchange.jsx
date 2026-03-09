import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { FaPlus, FaMinus, FaPlay } from 'react-icons/fa';
import heroImage from "../assets/internationalExchange/INTX_Web_Hero_Image.png";
import easyAPI from "../assets/internationalExchange/shutterstock_1440732200.jpg";
import liquidityImage from "../assets/internationalExchange/shutterstock_2066562593.jpg";
const InternationalExchange = () => {
    return (
        <div className='w-full h-full bg-white text-black'>
            <div className='w-full flex items-center justify-between px-4 md:px-10 lg:px-20 py-4 border-b border-gray-100 hidden md:flex'>
                <h1 className='text-xl md:text-2xl font-normal'>Coinbase International Exchange</h1>
                <ul className='flex items-center gap-6 text-sm font-semibold'>
                    <li><Link to="#" className='hover:text-blue-600'>Help</Link></li>
                    <li><Link to="#" className='hover:text-blue-600'>Legal</Link></li>
                    <li><Link to="#" className='hover:text-blue-600'>Privacy Policy</Link></li>
                    <li><Link to="#" className='hover:text-blue-600'>Market Data</Link></li>
                    <li><Link to="#" className='hover:text-blue-600'>API</Link></li>
                    <li><Link to="#" className='hover:text-blue-600'>Retail</Link></li>
                </ul>
            </div>

            <div className='w-full h-full pt-16 pb-12 px-4 md:px-10 lg:px-20'>
                <div className='w-full flex flex-col md:flex-row items-center justify-between gap-10'>
                    <div className='w-full md:w-[50%]'>
                        <img src={heroImage} alt="" className='rounded-[2.5rem]' />
                    </div>
                    <div className='w-full md:w-[50%] pl-0 md:pl-10'>
                        <h1 className='text-5xl md:text-[4rem] font-medium tracking-tight leading-[1.1]'>Bringing the most trusted and secure name in crypto to the global market</h1>
                        <ul className='list-disc pl-5 pt-8 text-lg flex flex-col gap-4 text-gray-800 marker:text-gray-400 font-medium'>
                            <li>Robust regulatory and risk management frameworks focused on customer protection</li>
                            <li>Unlock new trading strategies with access to perpetual futures</li>
                            <li>Low-latency API for complete control over your order and account management</li>
                            <li>Competitive pricing and incentives for high-volume trading</li>
                        </ul>
                        <div className='pt-10'>
                            <Link to="/contact-us" className='bg-black text-white font-semibold py-4 px-8 rounded-full flex items-center justify-center w-fit hover:bg-gray-800 transition-colors'>
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-full py-24 px-4 md:px-10 lg:px-20 bg-black text-white'>
                <div className='w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20'>
                    <div className='w-full md:w-[60%]'>
                        <h1 className='text-5xl md:text-6xl font-medium tracking-tight'>Introducing Coinbase<br />International Exchange</h1>
                    </div>
                    <div className='w-full md:w-[40%]'>
                        <p className='text-xl text-gray-300'>
                            "The need for a trusted, secure, and transparent leader in global crypto markets has never been stronger."
                        </p>
                        <div className='pt-10'>
                            <Link to="/blog" className='bg-white text-black font-semibold py-4 px-8 rounded-full flex items-center justify-center gap-2 w-fit hover:bg-gray-200 transition-colors'>
                                Read the blog
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-full py-24 px-4 md:px-10 lg:px-20'>
                <div className='w-full flex flex-col md:flex-row items-start justify-between gap-10 md:gap-20'>
                    <div className='w-full md:w-[40%]'>
                        <h1 className='text-5xl md:text-6xl font-medium tracking-tight'>Access perpetual futures</h1>
                    </div>
                    <div className='w-full md:w-[60%]'>
                        <p className='text-xl text-gray-600'>Coinbase International Exchange provides institutional clients with access to over 80 perpetual futures and spot markets, allowing for trading strategy versatility.</p>
                    </div>
                </div>

                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-16'>
                    <div className='w-full bg-[#f9f9f9] p-10 rounded-[2rem]'>
                        <h1 className='text-2xl font-semibold'>Trade with more flexibility</h1>
                        <p className='text-lg pt-4 text-gray-600'>Express your view of the market with the flexibility to go long or short with less friction and leverage.</p>
                    </div>
                    <div className='w-full bg-[#f9f9f9] p-10 rounded-[2rem]'>
                        <h1 className='text-2xl font-semibold'>Efficient capital allocation</h1>
                        <p className='text-lg pt-4 text-gray-600'>With lower initial margins for perpetual futures, experience cost-effective exposure to crypto markets.</p>
                    </div>
                    <div className='w-full bg-[#f9f9f9] p-10 rounded-[2rem]'>
                        <h1 className='text-2xl font-semibold'>Move in lock-step with the spot market</h1>
                        <p className='text-lg pt-4 text-gray-600'>An effective, easy to understand funding rate to support convergence with spot markets and promote market balance.</p>
                    </div>
                </div>
            </div>

            <div className='w-full h-full py-20 px-4 md:px-10 lg:px-20'>
                <div className='w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20'>
                    <div className='w-full md:w-[50%]'>
                        <img src={easyAPI} alt="" className='rounded-[2.5rem]' />
                    </div>

                    <div className='w-full md:w-[50%]'>
                        <h1 className='text-5xl md:text-6xl font-medium tracking-tight'>Easy-to-use API</h1>
                        <p className='text-xl pt-6 text-gray-600'>Our high-throughput, low-latency API trading system with a processing time of ~2 milliseconds, provides users with direct access to order placement and complete control over account management.</p>
                    </div>

                </div>
            </div>

            <div className='w-full h-full py-24 px-4 md:px-10 lg:px-20 bg-white'>
                <div className='w-full flex flex-col md:flex-row-reverse items-center justify-between gap-10 md:gap-20'>
                    <div className='w-full md:w-[50%]'>
                        <div className='h-[400px] w-full bg-cover bg-center rounded-[2.5rem]' style={{ backgroundImage: `url(${liquidityImage})` }}></div>
                    </div>
                    <div className='w-full md:w-[50%] pr-0 md:pr-10'>
                        <h1 className='text-5xl md:text-6xl font-medium tracking-tight'>Liquidity Incentives</h1>
                        <p className='text-xl pt-6 text-gray-500 font-normal leading-relaxed'>High-volume traders can receive additional incentives by providing significant liquidity. Contact a member of our team to learn more about this program.</p>
                    </div>
                </div>
            </div>

            <div className='w-full h-full py-32 px-4 md:px-10 lg:px-20 bg-black text-white'>
                <div className='w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20'>
                    <div className='w-full md:w-[60%]'>
                        <h1 className='text-5xl md:text-6xl lg:text-[4rem] font-medium tracking-tight leading-[1.1]'>Introducing Coinbase<br />International Exchange</h1>
                    </div>
                    <div className='w-full md:w-[40%]'>
                        <p className='text-xl lg:text-2xl text-gray-400 font-light leading-relaxed'>"The need for a trusted, secure, and transparent leader in global crypto markets has never been stronger."</p>
                        <div className='pt-10'>
                            <button className='bg-white text-black font-semibold py-4 px-8 rounded-full hover:bg-gray-200 transition-colors'>
                                Read the blog
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-full py-24 px-4 md:px-10 lg:px-20 bg-white'>
                <h1 className='text-5xl md:text-6xl font-medium tracking-tight pb-12'>FAQs</h1>
                <div className='w-full flex flex-col gap-3'>
                    {[
                        { question: 'Who is eligible to trade on Coinbase International Exchange?' },
                        { question: 'How do I get started?' },
                        { question: 'How do I connect to the exchange?' },
                        { question: 'What digital assets are available for trading?' },
                        { question: 'Is Coinbase International Exchange available to retail traders?' }
                    ].map((faq, index) => (
                        <div key={index} className='bg-[#f7f7f7] rounded-3xl px-8 py-5 cursor-pointer hover:bg-gray-100 transition-colors'>
                            <div className='flex justify-between items-center'>
                                <h2 className='text-[1.35rem] font-semibold text-gray-900'>{faq.question}</h2>
                                <span className='text-gray-500 font-light text-xl'><FaPlus /></span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='w-full h-full pb-24 pt-10 px-4 md:px-10 lg:px-20 bg-white'>
                <div className='w-full flex flex-col md:flex-row items-start justify-between gap-10 md:gap-20'>
                    <div className='w-full md:w-[50%] pr-0 md:pr-10'>
                        <h1 className='text-2xl font-semibold'>Legal</h1>
                        <p className='text-lg md:text-xl pt-4 text-gray-500 font-medium'>Coinbase International Exchange is a brand of CB International Holdings Ltd., a Bermuda company regulated by the Bermuda Monetary Authority (BMA) and holds a Class F license to conduct digital asset business.</p>
                    </div>
                    <div className='w-full md:w-[50%] pr-0 md:pr-10'>
                        <h1 className='text-2xl font-semibold'>Business Continuity</h1>
                        <p className='text-lg md:text-xl pt-4 text-gray-500 font-medium'>Coinbase International Exchange has a Business Continuity Program that is designed to ensure the continuity of our operations in the event of a significant business disruption.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default InternationalExchange