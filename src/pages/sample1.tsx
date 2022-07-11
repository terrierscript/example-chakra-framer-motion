
import { Box, chakra, HStack, Stack } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'
import { FC, PropsWithChildren } from 'react'

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: isValidMotionProp,
})

const Rotate: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <motion.div
    animate={{
      scale: [0.1, 1, 0.1],
      rotate: [0, 360],
    }}
    transition={{
      duration: 3,
      repeat: Infinity
    }}
  >
    {children}
  </motion.div>
}

const Page = () => {
  return <Box p={10}>
    <HStack>
      <Box w={100} h={100}>
        <Rotate>
          <Box
            w={100} h={100}
            p={2}
            bg="red.200"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box>
            </Box>
          </Box>
        </Rotate>
      </Box>
    </HStack>
  </Box>
}

export default Page