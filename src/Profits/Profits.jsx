import PNL from '../Components/pnl'
import clown from '../Images/BardPNLs/clown43x.jpg'
import quarm from '../Images/BardPNLs/quarm16x.png'
import edging38 from '../Images/BardPNLs/edging38x.png'
import father from '../Images/BardPNLs/father80x.jpg'
import fumo from '../Images/BardPNLs/fumo44x.jpg'
import manic from '../Images/BardPNLs/Manic14x.png'
import thl from '../Images/BardPNLs/THL6x.png'
import xrp from '../Images/BardPNLs/xrp57x.jpg'

const Profits = () => {

    const PNLArray = [clown, quarm, edging38, father, fumo, manic, thl, xrp]

    return (
        <div className='pt-24 w-full flex flex-col justify-center items-center'>
            <h1 className='text-5xl font-extrabold bg-text-gradient bg-clip-text text-transparent'>Profit Showcase</h1>
            <h2 className='text-[#b3b3b3] mt-2 text-lg'>Real profits from our members</h2>
            <div className='w-[60%] flex flex-row flex-wrap justify-evenly'>
                {PNLArray.map(image => {
                    return <PNL link={image} />
                })}
            </div>

        </div>
    )
}

export default Profits