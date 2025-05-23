
const JoinButton = () => {

    return (
        <div className='h-[47px] w-[152px] rounded-[22px] flex items-center justify-center'>
            <div className='bg-gradient-background h-[47px] w-[152px] rounded-[22px] absolute z-0 animate-rotate-grad'/>
            <div className='bg-black h-[45px] w-[150px] rounded-[22px] absolute z-10 '/>
            <a href='https://t.me/bardpaybot' className='z-20'>
                <button className='relative bg-[#5023f185] h-[45px] w-[150px] rounded-[22px] font-extrabold text-md'>Join Us</button>
            </a>
        </div>

    )
}

export default JoinButton