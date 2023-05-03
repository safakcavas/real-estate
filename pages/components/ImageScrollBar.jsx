import { useContext } from 'react';
import Image from 'next/image';
import { Box, Icon, Flex } from '@chakra-ui/react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import 'react-horizontal-scrolling-menu/dist/styles.css';
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex justifyContent='center' alignItems='center' marginRight='1'>
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => scrollPrev()}
        fontSize='2xl'
        cursor='pointer'
        d={['none','none','none','block']}
      />
    </Flex>
  );
}

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Flex justifyContent='center' alignItems='center' marginLeft='1'>
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => scrollNext()}
        fontSize='2xl'
        cursor='pointer'
        d={['none','none','none','block']} // burada d ile responsive yaptık mobilde görünmesini istemediğimiz için none dedik  
    />
    </Flex>
  );
}
export default function ImageSrollbar({ data }) {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ overflow: 'hidden' }}  >
      {data.map((item) => (
        <Box key={item.id} width='910px' itemId={item.id} overflow='hidden' p='1' height="600" position='relative'  >
         <Image
            alt="randomimage"
            placeholder="blur"
            blurDataURL={item.url}
            src={item.url}
            maxWidth="1000"
            maxHeight="500"
            sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"    
            width="1000"
            height="500"
          />
        </Box>
      ))}
    </ScrollMenu>
  );
}
  
