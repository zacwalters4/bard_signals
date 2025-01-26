import bardLogo from '../Images/bard_signals_logo.png'
import JoinButton from '../Components/JoinButton'
import bardFront from '../Images/bard_logo_front.png'

const Join = () => {

    return (
        <div className='pt-28 w-full flex flex-col justify-center items-center'>
                <div className='lg:w-[60%] w-full h-[400px] bg-gradient-background-3 lg:rounded-[20px] bg-black'>
                    <div className='w-full h-full bg-cover flex flex-col justify-center items-center' style={{backgroundImage: `url(${bardFront})`}}>
                        <img src={bardLogo} alt='Bard Signals Logo' className='h-40 drop-shadow-logo-drop-shadow'/>
                        <h1 className='md:text-6xl text-3xl font-extrabold bg-text-gradient bg-clip-text text-transparent text-center pb-2'>Join Bard Signals Today</h1>
                        <h2 className='text-[#b3b3b3] mt-2 mb-4 md:text-lg text-sm text-center w-[95%]'>Want to catch all the narratives on-chain? Bard makes it simple, join now</h2>
                        <JoinButton />
                    </div>
            </div>
        </div>
    )
}

export default Join