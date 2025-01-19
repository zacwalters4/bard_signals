import bardLogoFull from '../Images/bard_signals_logo_full.png'
import telegramLogo from '../Images/Telegram.png'
import xLogo from '../Images/X.png'
import discordLogo from '../Images/Discord.png'

const Footer = () => {

    return (
        <div className='pt-24 w-full flex flex-col justify-center items-center'>
            <div className='flex flex-row justify-evenly items-center h-full w-40'>
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
            <img src={bardLogoFull} alt='Bard Signals Logo' className='w-60 mb-4 mt-2'/>
        </div>
    )
}

export default Footer