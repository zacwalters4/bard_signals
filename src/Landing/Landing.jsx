import bardLogo from '../Images/bard_signals_logo.png'
import bardLogoText from '../Images/bard_signals_logo_text.png'
import JoinButton from '../Components/JoinButton'

const Landing = () => {

    return (
        <div className='pt-24 w-full flex flex-col justify-center items-center'>
            <img src={bardLogo} alt='Bard Signals Logo' className='h-60 mt-12 drop-shadow-logo-drop-shadow'/>
            <h1 className='md:text-7xl text-4xl font-extrabold bg-text-gradient bg-clip-text text-transparent text-center'>Welcome to Bard</h1>
            <h2 className='text-[#b3b3b3] mt-2 mb-4 md:text-lg text-sm text-center w-[95%]'>The #1 confluence, wallet, and criteria-based signal bot on Solana</h2>
            <JoinButton />
            <div className='xl:w-[60%] w-full flex flex-row flex-wrap justify-evenly md:mt-14 mt-4'>
                <div className='w-[250px] h-[175px] rounded-[20px] bg-[#5023f110] border-solid border-[1px] border-[#5023f1] flex flex-col items-center m-2'>
                    <div className='w-[80%] mt-4'>
                        <h3 className='text-lg bg-text-gradient bg-clip-text text-transparent'>Alpha</h3>
                        <p className='text-sm text-[#b3b3b3] mt-2'>A constantly updated list of wallets are ranked on a 1-5 star basis based on their recent performance.</p>
                    </div>
                </div>
                <div className='w-[250px] h-[175px] rounded-[20px] bg-[#5023f110] border-solid border-[1px] border-[#5023f1] flex flex-col items-center m-2'>
                    <div className='w-[80%] mt-4'>
                        <h3 className='text-lg bg-text-gradient bg-clip-text text-transparent'>Due Dilligence</h3>
                        <p className='text-sm text-[#b3b3b3] mt-2'>Security checks, such as bundling, image reuse, dev history, top holders, rug detection and more.</p>
                    </div>
                </div>
                <div className='w-[250px] h-[175px] rounded-[20px] bg-[#5023f110] border-solid border-[1px] border-[#5023f1] flex flex-col items-center m-2'>
                    <div className='w-[80%] mt-4'>
                        <h3 className='text-lg bg-text-gradient bg-clip-text text-transparent'>Conviction</h3>
                        <p className='text-sm text-[#b3b3b3] mt-2'>A confluence-based signal system alerts you when multiple wallets enter a coin, along with an average star rating.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing