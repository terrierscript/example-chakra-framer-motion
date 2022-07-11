
import { Box, BoxProps, chakra, HStack, Stack } from '@chakra-ui/react'
import { motion, isValidMotionProp, Transition } from 'framer-motion'
import { FC, PropsWithChildren } from 'react'

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: isValidMotionProp,
})

const Rotate: FC<PropsWithChildren<{
  transition?: Transition
}>> = ({ children, transition }) => {
  const defaultTransition: Transition = {
    duration: 3,
    repeat: Infinity,
  }
  return <motion.div
    animate={{
      scale: [0.1, 1, 0.1],
      rotate: [0, 360],
    }}
    transition={{
      ...defaultTransition,
      ...transition,
    }}
  >
    {children}
  </motion.div>
}

const RotateBox = (props: BoxProps) => {
  return <Box
    p={2}
    bg="red.200"
    display="flex"
    justifyContent="center"
    alignItems="center"
    {...props}
  />
}
const Page = () => {
  return <Box p={10}>
    <HStack>
      <Box w={100} h={100}>
        <Rotate><RotateBox w={100} h={100} /></Rotate>
      </Box>
      <Box w={100} h={100}>
        <Rotate transition={{ delay: 0.5 }}>
          <RotateBox w={100} h={100} />
        </Rotate>
      </Box>
      <Box w={100} h={100}>
        <Rotate transition={{ delay: 1 }}>
          <RotateBox w={100} h={100} />
        </Rotate>
      </Box>
    </HStack>
  </Box>
}

export default Page