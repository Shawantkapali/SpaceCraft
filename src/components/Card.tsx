import React from 'react'

import {
  Box,
  Button,
  Collapse,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
  FcAlarmClock, FcApproval, FcSurvey
} from 'react-icons/fc'

import { LeftFirst, RightFirst } from '../utils/motion'
import { motion } from 'framer-motion'
import { ReactElement } from 'react'

interface CardProps {
  heading: string
  description: string
  icon: ReactElement
  href: string
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  const [show, setShow] = React.useState(false)

  const handleToggle = () => setShow(!show)
  return (
    <Box
    maxW={{ base: 'full', md: '275px' }}
    w={'full'}
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    boxShadow={'2xl'}
    bg="linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)"
    p={5}
    transition="transform 0.3s ease-in-out, filter 0.3s ease-in-out"
    _hover={{
      transform: 'scale(1.05)',
      filter: 'brightness(1.1)',
    }}
  >
     <motion.div variants={LeftFirst} initial="hidden" whileInView="show"
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      marginTop: '10px', // Adjust margin as needed for spacing
      marginRight: '10px', // Adjust margin as needed for spacing
    }}>
          <Flex
            w={20}
            h={16}
            align={'center'}
            justify={'center'}
            color={'white'}
            rounded={'full'}
            bg='white'
          >
            {icon}
          </Flex>
        </motion.div>
    <Stack align={'start'} spacing={5}>
      <Box mt={2}>
        <Heading size="md">{heading}</Heading>
        <Collapse startingHeight={50} in={show}>
          {description}
        </Collapse>
      </Box>
      <Flex justify={'space-between'} align="center">
        <motion.div variants={RightFirst} initial="hidden" whileInView="show">
        <Button
        variant={'link'}
        colorScheme={'blue'}
        size={'sm'}
        borderRadius='md'
        padding="0.5rem 1rem"
        bg="white"
        color="purple.700"
        textDecoration="none" // Remove text decoration
        _hover={{
          transform: 'scale(1.2)',
          filter: 'brightness(1.1)',
          bg: 'purple.600', color: 'white'
        }}
        onClick={handleToggle}
      >
            Learn {show ? 'Less' : 'More'}
          </Button>
        </motion.div>
       
      </Flex>
    </Stack>
  </Box>
  
  )
}

export default function gridListWith() {
  return (
    <Box p={4}>
      <Stack spacing={2} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'} style={{marginTop: '30px'}}>
          Contact Us
        </Heading>
      </Stack>
      {/* <motion.div
    variants={slideVariants}
    initial="hidden"
    whileInView="show"
  > */}
      <Container maxW={'7xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
        
          <Card
            heading={'Heading'}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'}
            href={'#'}
          />
          <Card
            heading={'Heading'}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'}
            href={'#'}
          />
          <Card
            heading={'Heading'}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'}
            href={'#'}
          />
          <Card
            heading={'Heading'}
            icon={<Icon as={FcManager} w={10} h={10} />}
            description={'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'}
            href={'#'}
          />
          <Card
            heading={'Heading'}
            icon={<Icon as={FcSurvey} w={10} h={10} />}
            description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
          />
          <Card
            heading={'Heading'}
            icon={<Icon as={FcAbout} w={10} h={10} />}
            description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
          />
          <Card
            heading={'Heading'}
            icon={<Icon as={FcAlarmClock} w={10} h={10} />}
            description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
          />
          <Card
            heading={'Heading'}
            icon={<Icon as={FcApproval} w={10} h={10} />}
            description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
          />
          
        </Flex>
      </Container>
      {/* </motion.div> */}
    </Box>
  )
}