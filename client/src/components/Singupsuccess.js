import React from 'react'
import {motion} from 'framer-motion/dist/framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Singupsuccess = () => {
  return (
    <motion.div className='container-xlg text-center' initial={{opacity: .2}} animate={{opacity: 1}} exit={{opacity:.2}}>
        <FontAwesomeIcon className="h1" size="lg" icon="thumbs-up" color='green'/>
        <div className="h1">All singed up!</div>
        <div >You may now sing in to <span className='logo'>Acend</span> and save your trips</div>
    </motion.div>
  )
}

export default Singupsuccess