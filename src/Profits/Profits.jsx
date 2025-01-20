import PNL from '../Components/pnl'
import clown from '../Images/BardPNLs/clown43x.jpg'
import quarm from '../Images/BardPNLs/quarm16x.png'
import edging38 from '../Images/BardPNLs/edging38x.png'
import edging22 from '../Images/BardPNLs/edging22x.jpg'
import father from '../Images/BardPNLs/father80x.jpg'
import fumo from '../Images/BardPNLs/fumo44x.jpg'
import manic from '../Images/BardPNLs/Manic14x.png'
import thl from '../Images/BardPNLs/THL6x.png'
import xrp from '../Images/BardPNLs/xrp57x.jpg'
import griffain from '../Images/BardPNLs/griffain6x.jpg'

const Profits = () => {

    const PNLArray = [griffain, clown, quarm, edging38, fumo, manic, thl, xrp]

    return (
        <div className='pt-24 w-full flex flex-col justify-center items-center' id='profits'>
            <h1 className='md:text-5xl text-3xl font-extrabold bg-text-gradient bg-clip-text text-transparent text-center'>Profit Showcase</h1>
            <h2 className='text-[#b3b3b3] mt-2 mb-4 md:text-lg text-sm text-center w-[95%]'>Real profits from our members</h2>
            <div className='xl:w-[65%] w-full flex flex-row flex-wrap justify-evenly mt-4'>
                {PNLArray.map((image, key) => {
                    return <PNL link={image} key={key} />
                })}
            </div>

        </div>
    )
}

export default Profits