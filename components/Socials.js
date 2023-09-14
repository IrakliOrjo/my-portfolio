import Link from "next/link"



import {
  RiLinkedinBoxFill, 

  RiFacebookLine, 

  RiBehanceLine,
  RiGithubFill
} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg ">
      <Link href={'https://www.linkedin.com/in/irakli-orjo/'} target="blank"
      className="hover:text-accent transtion-all duration-300">
        <RiLinkedinBoxFill />
      </Link>
      <Link href={'https://github.com/IrakliOrjo'} className="hover:text-accent transtion-all duration-300">
        <RiGithubFill />
      </Link>
      <Link href={''} className="hover:text-accent transtion-all duration-300">
        <RiFacebookLine />
      </Link>
   
      <Link href={''} className="hover:text-accent transtion-all duration-300">
        <RiBehanceLine />
      </Link>
     
    </div>
  )
}

export default Socials