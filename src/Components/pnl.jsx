const PNL = ({link}) => {
    console.log(link)
    return (
        <div className='w-[250px] m-4 rounded-[20px] overflow-hidden border-solid border-[3px] border-[#8a6df2] shadow-landing-page-box-shadow'>
            <img src={link} alt='Bard PNL' className='h-[250px]'/>
        </div>
        
    )
}

export default PNL