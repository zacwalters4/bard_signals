
const JoinButtonHeader = () => {

    return (
        <div className='h-[37px] w-[142px] rounded-[22px] flex items-center justify-center'>
            <div className='bg-gradient-background h-[37px] w-[142px] rounded-[22px] absolute z-0 animate-rotate-grad'/>
            <div className='bg-black h-[35px] w-[140px] rounded-[22px] absolute z-10 '/>
            <a href='https://t.me/bardpaybot' className='z-20'>
                <button className='relative bg-[#5023f185] h-[35px] w-[140px] rounded-[22px] font-extrabold text-md'>Join Us</button>
            </a>
        </div>
    )
}

export default JoinButtonHeader