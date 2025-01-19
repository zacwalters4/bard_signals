import bardLogoFull from '../Images/bard_signals_logo_full.png'
import bardLogo from '../Images/bard_signals_logo.png'
import telegramLogo from '../Images/Telegram.png'
import xLogo from '../Images/X.png'
import discordLogo from '../Images/Discord.png'
import JoinButtonHeader from '../Components/JoinButtonHeader'


const Header = () => {

    return (
        <header className='fixed flex flex-row justify-center h-12 w-screen z-40 top-6'>
            <div className='bg-gradient-background-2 h-full w-[60%] rounded-[2rem] p-[1px]'>
                <div className='bg-black w-full h-full rounded-[2rem] flex items-center justify-between'>
                    <div className='flex flex-row items-center pointer-events-none select-none'>
                        <img src={bardLogo} alt='Bard Signals' className='ml-2 h-8'/>
                        <h1 className='pl-2 text-2xl bg-text-gradient bg-clip-text text-transparent'>Bard Signals</h1>
                    </div>
                    <div className='w-[20%] flex justify-evenly items-center'>
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

                    </div>
                    <div className='flex flex-row justify-between items-center h-full  mr-2'>
                        <a href='https://discord.gg/bardsignals' className='h-8 w-8 flex justify-center items-center border-[1px] border-[#8a6df2] rounded-[2.5rem] overflow-hidden mr-2'>
                            <img src={discordLogo} className='h-[20px] border-solid' />
                        </a>
                        <a href='https://x.com/BardSignals' className='h-8 w-8 flex justify-center items-center border-[1px] border-[#8a6df2] rounded-[2.5rem] overflow-hidden mr-2'>
                            <img src={xLogo} className='h-[20px] border-solid' />
                        </a>
                        <JoinButtonHeader />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header