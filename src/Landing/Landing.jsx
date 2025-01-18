import bardLogo from '../Images/bard_signals_logo.png'
import bardLogoText from '../Images/bard_signals_logo_text.png'
import JoinButton from '../Components/JoinButton'

const Landing = () => {

    return (
        <div className='pt-24 w-full flex flex-col justify-center items-center'>
            <img src={bardLogo} alt='Bard Signals Logo' className='h-60 mt-12'/>
            <h1 className='text-7xl font-extrabold'>Welcome to Bard</h1>
            <h2 className='text-[#b3b3b3] mt-2 text-lg'>The #1 confluence, wallet, and criteria-based signal bot on Solana.</h2>
            <JoinButton />
        </div>
    )
}

export default Landing