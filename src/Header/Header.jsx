import bardLogoFull from '../Images/bard_signals_logo_full.png'
import bardLogo from '../Images/bard_signals_logo.png'
import telegramLogo from '../Images/Telegram.png'
import xLogo from '../Images/X.png'
import discordLogo from '../Images/Discord.png'


const Header = () => {

    return (
        <header className='fixed flex flex-row justify-center h-12 w-screen z-20 top-6'>
            <div className='bg-gradient-background-2 h-full w-[60%] rounded-[2rem] p-[2px]'>
                <div className='bg-black w-full h-full rounded-[2rem] flex items-center justify-between'>
                    <div className='flex flex-row items-center'>
                        <img src={bardLogo} alt='Bard Signals' className='ml-6 h-8'/>
                        <h1 className='pl-2 text-2xl'>Bard Signals</h1>
                    </div>
                    
                    <div className='flex flex-row justify-between items-center h-full w-24 mr-6'>
                        <a href='https://t.me/bardpaybot'>
                            <img src={telegramLogo} className='h-6'/>
                        </a>
                        <a href='https://x.com/BardSignals'>
                            <img src={xLogo} className='h-6'/>
                        </a>
                        <a href='https://discord.gg/bardsignals'>
                            <img src={discordLogo} className='h-6' />
                        </a>
                        
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header