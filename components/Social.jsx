import Link from 'next/link'
import {FaGithub,FaLinkedinIn} from 'react-icons/fa'
import { SiLeetcode } from "react-icons/si";


const socials = [
    {
        icon:<FaGithub/>,
        path:"https://github.com/MrZorawaR"
    },
    {
        icon:<FaLinkedinIn/>,
        path:"https://www.linkedin.com/in/nitish315/"
    },
    {
      icon:<SiLeetcode/>,
      path:"https://leetcode.com/u/nitish315/"
  },
]
const Social = () => {
  return (
    <div className='flex gap-6'>
      {socials.map((social,index)=>(
          <Link key={index} href={social.path} target='_blank' className='w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'>
            {social.icon}
            </Link>
      ))}
    </div>
  )
}

export default Social
