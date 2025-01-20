const PNL = ({link}) => {
    return (
        <div className='md:w-[250px] w-[40%] md:m-2 m-2 rounded-[20px] overflow-hidden border-solid border-[2px] border-[#8a6df2] shadow-landing-page-box-shadow'>
            <img src={link} alt='Bard PNL' className='md:h-[250px]'/>
        </div>
        
    )
}

export default PNL