import bardLogo from '../bard_signals_logo_full.png'
import telegramLogo from '../Telegram.png'
import xLogo from '../X.png'
import discordLogo from '../Discord.png'


const Header = () => {

    return (
        <header className='fixed flex flex-row justify-center h-20 w-screen z-20 top-6'>
            <div className='bg-gradient-background-2 h-full w-[70%] rounded-[2rem] p-[2px]'>
                <div className='bg-black w-full h-full rounded-[2rem] flex items-center justify-between'>
                    <img src={bardLogo} alt='Bard Signals' className='ml-6 h-14'/>
                    <div className='flex flex-row justify-between items-center h-full w-[10rem] mr-6'>
                        
                        <img src={telegramLogo} className='h-[50%]'/>
                        <img src={xLogo} className='h-[50%]' />
                        <img src={discordLogo} className='h-[50%]' />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header