import { useState } from "react";

const HamburgerBtn = function({ click, handleClick }) {
    const [ state, setState ] = useState('s')
    // const handleClick = function() {
    //     // console.log('ran')
    //     setState(state === 's' ? 'd' : 's');
    //     console.log(state)
    // }
    return (
        <button onClick={handleClick} className='flex flex-col gap-1 sm:hidden'>
            <HamburgerBar />
            <HamburgerBar />
            <HamburgerBar />
        </button>
    );
}

const HamburgerBar = function() {
    return <div className='w-7 rounded-lg border-2 border-white'></div>
}

export default HamburgerBtn;