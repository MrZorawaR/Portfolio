import Link from 'next/link'
import {FaGithub,FaLinkedinIn} from 'react-icons/fa'

const socials = [
    {
        icon:<FaGithub/>,
        path:""
    },
    {
        icon:<FaLinkedinIn/>,
        path:""

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
