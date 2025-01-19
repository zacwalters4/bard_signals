import bardLogoFull from '../Images/bard_signals_logo_full.png'
import telegramLogo from '../Images/Telegram.png'
import xLogo from '../Images/X.png'
import discordLogo from '../Images/Discord.png'

const Footer = () => {

    return (
        <div className='pt-24 w-full flex flex-col justify-center items-center'>
            <div className='flex flex-row justify-evenly items-center h-full w-56'>
                <a href='https://t.me/bardpaybot' className='h-8 w-8 flex justify-center items-center border-[1px] border-[#8a6df2] rounded-[2.5rem] overflow-hidden'>
                    <img src={telegramLogo} className='h-[20px] pr-[1px]'/>
                </a>
                <a href='https://x.com/BardSignals' className='h-8 w-8 flex justify-center items-center border-[1px] border-[#8a6df2] rounded-[2.5rem] overflow-hidden'>
                    <img src={xLogo} className='h-[20px]'/>
                </a>
                <a href='https://discord.gg/bardsignals' className='h-8 w-8 flex justify-center items-center border-[1px] border-[#8a6df2] rounded-[2.5rem] overflow-hidden'>
                    <img src={discordLogo} className='h-[20px]' />
                </a>
                
            </div>
            <img src={bardLogoFull} alt='Bard Signals Logo' className='w-60 mb-4 mt-4'/>
        </div>
    )
}

export default Footer