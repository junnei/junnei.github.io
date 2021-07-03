import Link from 'next/link';

export const Navbar = () => {
  return (
      <nav className='horizontal md:vertical shadow-sm right-0 top-0 fixed flex items-center flex-wrap bg-gradient-to-br md:bg-gradient-to-b from-green-300 to-indigo-400 p-3 sm:w-100vw md:w-16 sm:h-20 md:h-100vh sm:flex-row md:flex-col sm:justify-end md:justify-center'>
       <Link href='/'>
          <a className='text-shadow inline-flex items-center p-2 mr-4 '>
            <svg
              viewBox='-6 -4 31 31'
              xmlns='http://www.w3.org/2000/svg'
              className='fill-current text-black h-8 w-8 mr-2'
            >
              <path d='M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z' />
            </svg>
            <span className='text-xl text-black font-bold uppercase tracking-wide'>
              Junnei
            </span>
          </a>
        </Link>
      </nav>
  );
};