
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
        p={2}
        bg="red.100"
        display="flex"
        justifyContent="center"
        alignItems="center"

        w={100}
        h={100}
        // animate={{ x: [0, 100, 0] }}
        animate={{
          rotate: 360,

        }}

        transition={{
          repeat: Infinity
          // durat ion: "2",
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