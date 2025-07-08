const Banner = ({title , description}) => {
  return (
    <section>
      <div className=' common-padding min-h-[40vh] border-y-[.5px] border-neutral-700 bg-[#141414] flex justify-center flex-col gap-4'>
        <h3 className='text-[2.5em] max-md:text-[1.8em]'>
          {title}
        </h3>
        <p className=' text-[17px] max-w-7xl text-normal leading-[1.3em] '>
          {description}
        </p>
      </div>
    </section>
  )
}

export default Banner
