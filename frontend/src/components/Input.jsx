const Input = function({ placeholder}) {
    return (
        <input className='w-full h-full bg-transparent border-0 border-transparent py-1 px-2 pl-8 rounded-md focus:border-0 focus:outline-0' type="search" placeholder={placeholder} />
    )
}

export default Input;