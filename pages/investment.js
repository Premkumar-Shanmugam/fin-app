import {
  Flex,
  Heading,
  Box,
  Divider,
  Text,
  useColorMode
} from '@chakra-ui/core';
import MutualFund from '../components/MutualFund';

const Investment = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'gray.100', dark: 'gray.700' };
  const mfs = [1, 2, 3, 4, 5];
  return (
    <Flex
      direction='column'
      h='93vh'
      w={['90vw', '90vw', '90vw', '70vw']}>
      <Box>
        <Heading mb={2}>My Investments</Heading>
      </Box>
      <Flex
        direction={['column', 'column', 'row', 'row']}
        justify='center'
        bg={bgColor[colorMode]}
        boxShadow='md'
        rounded='lg'
        p='4'>
        <Flex direction='column' align='center' mx='2'>
          <Text fontSize="xl">Mutual Funds</Text>
          {mfs.map(mf => (
            <Box key={mf} bg={colorMode === 'light' ? 'gray.200' : 'gray.600'} rounded="md" my="2" p="1">
              <MutualFund mfid={mf}></MutualFund> 
            </Box>
          ))}
        </Flex>
        <Divider orientation='vertical' borderColor='gray.300' my='2' />
        <Flex direction='column' align='center' mx='2'>
          <Text fontSize="xl">Equities</Text>
          {mfs.map(mf => (
            <Box key={mf} bg={colorMode === 'light' ? 'gray.200' : 'gray.600'} rounded="md" my="2" p="1">
              <MutualFund mfid={mf}></MutualFund> 
            </Box>
          ))}
        </Flex>
        <Divider orientation='vertical' borderColor='gray.300' my='2' />
        <Flex direction='column' align='center' mx='2'>
          <Text fontSize="xl">Fixed Deposits</Text>
          {mfs.map(mf => (
            <Box key={mf} bg={colorMode === 'light' ? 'gray.200' : 'gray.600'} rounded="md" my="2" p="1">
              <MutualFund mfid={mf}></MutualFund> 
            </Box>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Investment;
