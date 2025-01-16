import bardLogo from '../bard_signals_logo.png'
import bardLogoText from '../bard_signals_logo_text.png'
import JoinButton from '../Components/JoinButton'

const Landing = () => {

    return (
        <div className='pt-20 w-full h-[80vh] flex flex-col justify-center items-center'>
            <img src={bardLogo} alt='Bard Signals Logo' className='h-[30%]'/>
            <h1 className='text-7xl font-extrabold'>Welcome to Bard</h1>
            <h2 className='text-[#b3b3b3] mt-2 text-lg'>The #1 confluence, wallet and criteria based signal bot on Solana.</h2>
            <JoinButton />

            
        </div>
    )
}

export default Landing