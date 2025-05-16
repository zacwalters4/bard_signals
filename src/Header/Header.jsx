import bardLogoFull from '../Images/bard_signals_logo_full.png'
import bardLogo from '../Images/bard_signals_logo.png'
import telegramLogo from '../Images/Telegram.png'
import xLogo from '../Images/X.png'
import discordLogo from '../Images/Discord.png'
import JoinButtonHeader from '../Components/JoinButtonHeader'
import HamburgerMenu from '../Components/HamburgerMenu'
import { useState } from 'react'
import JoinButton from '../Components/JoinButton'

const Header = () => {
    const [dropdownShow, setDropdownShow] = useState(false)

    const toggleDropdown = () => {
        setDropdownShow(!dropdownShow)
      }

    return (
        <header className={`fixed flex flex-row justify-center h-12 w-screen z-40 top-4 ${dropdownShow ? 'h-auto' : 'h-12'}`}>
            <div className='bg-gradient-background-2 h-full sm:w-[60%] w-[90%] rounded-[24px] p-[1px]'>
                <div className='bg-black w-full h-full rounded-[24px] flex flex-col items-center'>
                    <div className=' w-full h-[46px] flex items-center justify-between'>
                        <div className='flex flex-row items-center pointer-events-none select-none'>
                            <img src={bardLogo} alt='Bard Signals' className='ml-2 h-8'/>
                            <h1 className='pl-2 text-2xl bg-text-gradient bg-clip-text text-transparent'>Bard Signals</h1>
                        </div>
                        <div className='w-[40%] hidden xl:flex justify-evenly items-center'>
                            <a href='#profits'>
                                <button className='bg-text-gradient bg-clip-text text-transparent hover:bg-white text-sm'>
                                    <h3>Profits</h3>
                                </button>
                            </a>
                            <a href='#pricing'>
                                <button className='bg-text-gradient bg-clip-text text-transparent hover:bg-white text-sm'>
                                    <h3>Pricing</h3>
                                </button>
                            </a>
                            <a href='https://docs.bardsignals.com/'>
                                <button className='bg-text-gradient bg-clip-text text-transparent hover:bg-white text-sm'>
                                    <h3>Documentation</h3>
                                </button>
                            </a>
                            <a href='https://dexscreener.com/solana/7f6aledjcnd22uk6xwop2tmn1igndt74ptz3ijgiumu5'>
                                <button className='bg-text-gradient bg-clip-text text-transparent hover:bg-white text-sm'>
                                    <h3>$BARD Token</h3>
                                </button>
                            </a>
                            
                        </div>
                        <div className='hidden xl:flex flex-row justify-between items-center h-full  mr-2'>
                            <a href='https://discord.gg/bardsignals' className='h-8 w-8 flex justify-center items-center border-[1px] border-[#8a6df2] rounded-[2.5rem] overflow-hidden mr-2'>
                                <img src={discordLogo} className='h-[20px] border-solid' />
                            </a>
                            <a href='https://x.com/BardSignals' className='h-8 w-8 flex justify-center items-center border-[1px] border-[#8a6df2] rounded-[2.5rem] overflow-hidden mr-2'>
                                <img src={xLogo} className='h-[20px] border-solid' />
                            </a>
                            <JoinButtonHeader />
                        </div>
                        <HamburgerMenu dropdownShow={dropdownShow} toggleDropdown={toggleDropdown}/>
                    </div>
                    <div className={`${dropdownShow ? 'flex' : 'hidden'} flex flex-col w-[50%] items-center mt-4 `}>
                        <a href='#profits' className='w-full '>
                            <button onClick={toggleDropdown} className='bg-text-gradient bg-clip-text text-transparent hover:bg-white text-lg h-10 w-full'>
                                <h3>Profits</h3>
                            </button>
                        </a>
                        <div className='bg-border-gradient h-[1px] w-full my-2'/>
                        <a href='#pricing' className='w-full'>
                            <button onClick={toggleDropdown} className='bg-text-gradient bg-clip-text text-transparent hover:bg-white text-lg h-10 w-full'>
                                <h3>Pricing</h3>
                            </button>
                        </a>
                        <div className='bg-border-gradient h-[1px] w-full my-2'/>
                        <a href='https://docs.bardsignals.com/' className='w-full'>
                            <button onClick={toggleDropdown} className='bg-text-gradient bg-clip-text text-transparent hover:bg-white text-lg h-10 w-full'>
                                <h3>Documentation</h3>
                            </button>
                        </a>
                        <div className='bg-border-gradient h-[1px] w-full my-2'/>
                        <a href='https://dexscreener.com/solana/7f6aledjcnd22uk6xwop2tmn1igndt74ptz3ijgiumu5' className='w-full'>
                            <button onClick={toggleDropdown} className='bg-text-gradient bg-clip-text text-transparent hover:bg-white text-lg h-10 w-full'>
                                <h3>$BARD Token</h3>
                            </button>
                        </a>
                        <div className='bg-border-gradient h-[1px] w-full my-2'/>
                        <div className='flex my-2 justify-center w-full'>
                            <a href='https://discord.gg/bardsignals' className='h-8 w-8 flex justify-center items-center mx-2'>
                                <img src={discordLogo} className='h-full border-solid' />
                            </a>
                            <a href='https://x.com/BardSignals' className='h-8 w-8 flex justify-center items-center mx-2'>
                                <img src={xLogo} className='h-full border-solid' />
                            </a>
                        </div>
                        <div className='bg-border-gradient h-[1px] w-full my-2'/>
                        <div className='my-4'>
                            <JoinButton />
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header