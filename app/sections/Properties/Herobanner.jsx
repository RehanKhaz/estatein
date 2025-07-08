import { Box, Calendar, CircleDollarSign, Home, MapPin, SearchIcon } from 'lucide-react'

const Herobanner = () => {
  return (
    <section>
      <div className=' common-padding min-h-[50vh] border-y-[.5px] border-neutral-700 bg-[#141414] flex justify-center flex-col'>
        <h3 className='text-[2.3em] max-md:text-[1.8em]'>
          Find Your Dream Property
        </h3>
        <p className=' text-[17px] max-w-7xl text-normal leading-[1.3em]'>
          Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey 
        </p>
      </div>
      <div className='mx-auto w-[80vw] max-md:w-[90%] mt-[-2em] p-1.5 rounded-xl secondary-color'>
        <div className='flex-between px-3 w-full bg-[#141414] rounded-xl'>
          <input
            type='text'
            placeholder='Search a Property There'
            className='text-lg text-neutral-300 flex-1 border-none outline-none indent-3 h-[3.6em] py-2'
          />
          <button className='accent-color max-md:p-2 max-md:rounded-full text-white rounded-lg'>
            <span className='max-md:hidden'>
            Search Property
            </span>
            <SearchIcon size={20} className='md:hidden text-white' />

          </button>
        </div>
      </div>
      <div className='secondary-color mx-auto w-[95vw] rounded-xl mt-4 md:mt-[-4px] px-2 py-2'>
        <div className='flex-center gap-2 flex-wrap'>
          <div className='bg-[#141414] rounded-lg flex-between gap-2 border-[.5px] max-md:w-full border-neutral-600 px-4 py-3'>
            <MapPin className='text-neutral-400' size={20} />
            <p>|</p>
            <select className='text-neutral-400 text-xl gap-3 w-[8em] max-md:w-full' name='' id=''>
              <option value='Location'>Location</option>
            </select>
          </div>
          <div className='bg-[#141414] rounded-lg flex-between gap-2 border-[.5px] max-md:w-full border-neutral-600 px-4 py-3'>
            <Home className='text-neutral-400' size={20} />
            <p>|</p>
            <select className='text-neutral-400 text-xl gap-3 w-[8em] max-md:w-full' name='' id=''>
              <option value='Property Type'>Property Type</option>
            </select>
          </div>
          <div className='bg-[#141414] rounded-lg flex-between gap-2 border-[.5px] max-md:w-full border-neutral-600 px-4 py-3'>
            <CircleDollarSign className='text-neutral-400' size={20} />
            <p>|</p>
            <select className='text-neutral-400 text-xl gap-3 w-[8em] max-md:w-full' name='' id=''>
              <option value='Pricing Range'>Pricing Range</option>
            </select>
          </div>
          <div className='bg-[#141414] rounded-lg flex-between gap-2 border-[.5px] max-md:w-full border-neutral-600 px-4 py-3'>
            <Box className='text-neutral-400' size={20} />
            <p>|</p>
            <select className='text-neutral-400 text-xl gap-3 w-[8em] max-md:w-full' name='' id=''>
              <option value='Property Size'>Property Size</option>
            </select>
          </div>
          <div className='bg-[#141414] rounded-lg flex-between gap-2 border-[.5px] max-md:w-full border-neutral-600 px-4 py-3'>
            <Calendar className='text-neutral-400' size={20} />
            <p>|</p>
            <select className='text-neutral-400 text-xl gap-3 w-[8em] max-md:w-full' name='' id=''>
              <option value='Build Year'>Build Year</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Herobanner
