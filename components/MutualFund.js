import {
	Box,
	Text
} from '@chakra-ui/core';

const MutualFund = (props) => {
  return (
    <Box>
      <Text>This is a mutual fund investment # {props.mfid}.</Text>
    </Box>
  );
}

export default MutualFund;
