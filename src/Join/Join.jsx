import bardLogo from '../Images/bard_signals_logo.png'
import JoinButton from '../Components/JoinButton'
import bardFront from '../Images/bard_logo_front.png'

const Join = () => {

    return (
        <div className='pt-24 w-full flex flex-col justify-center items-center'>
                <div className='lg:w-[60%] w-full h-[400px] bg-gradient-background-3 lg:rounded-[20px]'>
                    <div className='w-full h-full bg-cover flex flex-col justify-center items-center' style={{backgroundImage: `url(${bardFront})`}}>
                        <img src={bardLogo} alt='Bard Signals Logo' className='h-40'/>
                        <h1 className='md:text-6xl text-3xl font-extrabold bg-text-gradient bg-clip-text text-transparent text-center'>Join Bard Today</h1>
                        <h2 className='text-[#b3b3b3] mt-2 mb-4 md:text-lg text-sm text-center w-[95%]'>The #1 confluence, wallet, and criteria-based signal bot on Solana</h2>
                        <JoinButton />
                    </div>
            </div>
        </div>
    )
}

export default Join