/* eslint-disable react/prop-types */
import { useScroll,motion } from "framer-motion";
import { useRef } from "react"

const ParagraphReveal = ({value}) => {
    const element = useRef(null);
    const {scrollYProgress} = useScroll({
        target: element,
        offset: ['start 0.9', 'start 0.25']
    })
  return (
    <motion.p 
        ref={element} 
        className='text-[50px] text-white p-6 max-w-lg'
        style={{
            opacity: scrollYProgress
        }}
    >
        {value}
    </motion.p>
  )
}

export default ParagraphReveal
