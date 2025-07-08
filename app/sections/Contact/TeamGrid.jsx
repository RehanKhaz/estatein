'use client'
import Image from 'next/image'

const TeamGrid = () => {
  return (
    <section className="common-padding my-[2em] max-md:px-2 max-md:my-[1em]">
      <div className="relative p-5 max-md:p-3 secondary-color mx-auto  border-[.5px] border-neutral-800 rounded-xl overflow-hidden">
        {/* Background Image */}
        <Image
          src="/assets/abstract_contact.png"
          alt="Background"
          fill
          className="object-cover inset-0 absolute -z-10"
        />

        {/* Grid Content */}
        <div className="relative grid grid-cols-4 max-md:grid-cols-2 gap-5 max-md:gap-2 z-10">
          {[1, 2, 3].map((item, i) => (
            <Image
              key={i}
              src={`/assets/grid${item}.png`}
              alt={`Grid ${item}`}
              width={1000}
              height={600}
              className="object-cover col-span-2 h-full w-full"
            />
          ))}

          {[4, 5].map((item, i) => (
            <Image
              key={i + 3}
              src={`/assets/grid${item}.png`}
              alt={`Grid ${item}`}
              width={1000}
              height={600}
              className="object-cover h-full w-full"
            />
          ))}

          <div className="col-span-2 flex justify-center flex-col space-y-4">
            <Image
              src="/assets/fluorescent.png"
              alt="Fluorescent"
              width={300}
              height={100}
              className="size-fit object-cover"
            />
            <h3 className="text-[2.3em] max-md:text-[1.8em]">
              Explore Estatain World
            </h3>
            <p className="text-[17px] max-w-7xl text-normal leading-[1.3em]">
              Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better.
            </p>
          </div>

          <Image
            src="/assets/grid6.png"
            alt="Grid6"
            width={1000}
            height={600}
            className="object-cover pointer-events-none mix-blend-difference col-span-2 h-full w-full"
          />
        </div>
      </div>
    </section>
  )
}

export default TeamGrid
