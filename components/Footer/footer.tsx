import Link from "next/link"
import { IconContext } from "react-icons";
import { FaDiscord, FaGithub, FaLinkedin, FaMailchimp, FaRegEnvelope, FaTwitter } from "react-icons/fa";

export const Footer = () => (
    <footer className="z-20 w-full p-16 bg-inherit shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-inherit dark:border-gray-600">
        <span className="text-sm text-gray-500 sm:text-center dark:text-custom-primary">© 2023 Joshua Hargreaves
        </span>
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
    </footer>
)