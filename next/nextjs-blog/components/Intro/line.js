import Image from 'next/image'

export default function Line({
  title, 
  src, 
  width,
}) {
    return (
      <>
      <section className="flex-col md:flex-row flex items-center md:justify-between mb-12">
        <h1 className="intro-hover text-6xl lg:text-8xl font-bold tracking-tighter leading-tight md:pr-2">
          {title}.
        </h1>
        <div className="text-center md:text-right text-lg mr-4">
          <div className="sm:mx-0 sm:hidden md:flex">
          <Image
            title={title}
            src={src}
            height={80}
            width={width}
            objectFit='cover'
            />
          </div>
        </div>
        
      </section>
      </>
    )
  }
  