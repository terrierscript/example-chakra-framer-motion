
import { Box, chakra, Stack } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: isValidMotionProp,
})

const Page = () => {
  return <Stack>
    <Box>x</Box>
    <Box>

      <ChakraBox
        bg="red.100"
        w={10}
        h={10}
        // animate={{ x: [0, 100, 0] }}
        animate={{ rotate: 360 }}

        transition={{
          // duration: "2",
          // ease: "ease"
        }}
      >
        <Box>
          aaaa
        </Box>
      </ChakraBox>

    </Box>
  </Stack>
}

export default Page