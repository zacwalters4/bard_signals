import JoinButtonPricing from '../Components/JoinButtonPricing'
import bardLogo from '../Images/bard_signals_logo.png'

const Pricing = () => {


    return (
        <div className='pt-24 w-full flex flex-col justify-center items-center'>
            <h1 className='text-5xl font-extrabold bg-text-gradient bg-clip-text text-transparent pb-2'>Premium Pricing</h1>
            <h2 className='text-[#b3b3b3] text-lg'>Competitive pricing for our members</h2>
            <div className='bg-gradient-background rounded-[20px] p-[2px] mt-8'>
                <div className='w-[450px] h-[300px] rounded-[20px] border-solid border-[1px] bg-black border-[#5023f1] flex flex-col items-center'>
                    <div className='w-[95%] mt-4 bg-border-gradient pb-[1px]'>
                        <div className='flex flex-row items-center justify-center w-full bg-black pb-[8px]'>
                            <img src={bardLogo} alt='Bard Signals' className='h-12'/>
                            <h1 className='pl-2 text-4xl bg-text-gradient bg-clip-text text-transparent py-2'>Bard Signals</h1>
                        </div>
                    </div>
                    <div className='w-[95%] mt-4 bg-border-gradient pb-[1px] flex'>
                        <div className='flex flex-row items-center w-full bg-black pb-6'>
                            <div className='w-[100%] flex flex-col items-center'>
                                <p className='text-lg text-[#b3b3b3]'>30 Days</p>
                                <h3 className='text-3xl font-extrabold bg-text-gradient bg-clip-text text-transparent pb-2'>1 SOL</h3>
                                <div className='w-[110px] h-[20px] rounded-[10px] border-solid border-[1px] border-[#8a6df2] text-xs flex items-center justify-center'>
                                    <p>Premium Access</p>
                                </div>
                            </div>
                        </div>
                        {/* <div className='bg-border-gradient-vert h-full w-[1px]' /> */}
                        <div className='flex flex-row items-center w-full bg-black pb-6'>
                            <div className='w-[100%] flex flex-col items-center'>
                                <p className='text-lg text-[#b3b3b3]'>90 Days</p>
                                <h3 className='text-3xl font-extrabold bg-text-gradient bg-clip-text text-transparent pb-2'>2.5 SOL</h3>
                                <div className='w-[110px] h-[20px] rounded-[10px] border-solid border-[1px] border-[#8a6df2] text-xs flex items-center justify-center'>
                                    <p>Save 20%!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <JoinButtonPricing />
                </div>
            </div>
        </div>
    )
}

export default Pricing