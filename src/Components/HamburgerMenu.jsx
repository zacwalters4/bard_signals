
const HamburgerMenu = ({toggleDropdown, dropdownShow}) => {

    return (
        <button onClick={toggleDropdown} className='xl:hidden pr-3'>
            <div className='grid grid-cols-1 grid-rows-3 w-6 h-6 place-items-center '>
                <div className={`transition duration-300 h-[2px] w-6 bg-gradient-background ${dropdownShow && 'transform rotate-45 translate-y-2'}`}></div>
                <div className={`transition duration-300 h-[2px] w-6 bg-gradient-background ${dropdownShow && 'transform -rotate-45'}`}></div>
                <div className={`transition duration-300 h-[2px] w-6 bg-gradient-background ${dropdownShow && 'transform scale-0'}`}></div>
            </div>
        </button>

    )
}

export default HamburgerMenu