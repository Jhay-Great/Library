const HamburgerBtn = function() {
    return (
        <button className='flex flex-col gap-1 sm:hidden'>
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