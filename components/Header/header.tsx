import Link from "next/link"
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa"

export const Header = () => {
    return (
<nav className="bg-white border-gray-200 p-16 dark:bg-inherit">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <span className="text-sm text-gray-500 sm:text-center dark:text-custom-primary">Joshua Hargreaves
        </span>
    <div className="w-full md:block md:w-auto" id="navbar-default">
    <ul className="flex flex-wrap items-center space-x-2  mt-3 text-sm font-medium md:text-custom-primary dark:text-custom-primary sm:mt-0">
            <li>
                <Link href="https://github.com/JoshHargreaves" className="mr-4 hover:underline md:mr-6">
                    <FaGithub className="hover:text-violet-500 transition duration-300 ease-in-out " style={{ color: '#FFCACA', fontSize: '24px' }} />
                </Link>
            </li>

            <li>
                <Link href="https://www.linkedin.com/in/joshua-hargreaves-5b544b63/" className="mr-4 hover:underline md:mr-6">
                    <FaLinkedin className="hover:text-violet-500 transition duration-300 ease-in-out " style={{ color: '#FFCACA', fontSize: '24px' }} />
                </Link>
            </li>
            <li>
                <Link href="mailto:me@joshhargreaves.co.uk" className="mr-4 hover:underline md:mr-6">
                    <FaRegEnvelope className="hover:text-violet-500 transition duration-300 ease-in-out " style={{ color: '#FFCACA', fontSize: '24px' }} />
                </Link>
            </li>
        </ul>
    </div>
  </div>
</nav>
    )
}