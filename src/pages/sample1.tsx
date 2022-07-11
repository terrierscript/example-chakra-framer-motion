
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
  const delays = [0, 0.2, 0.4, 0.6]
  return <Box p={10}>
    <HStack spacing={10}>
      {delays.map((delay, i) => {

        return <Box w={100} h={100} key={i}>
          <Rotate transition={{ delay }}>
            <RotateBox w={100} h={100} />
          </Rotate>
        </Box>
      })}
    </HStack>
  </Box>
}

export default Page