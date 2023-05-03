import Link from 'next/link';
import Image from 'next/image';
import {Box, Flex, Text, Avatar} from '@chakra-ui/react';
import {FaBed, FaBath} from 'react-icons/fa';
import {BsGridFill} from 'react-icons/bs';
import {GoVerified} from 'react-icons/go';
import millify from 'millify';
import house from '../../assets/house.jpg';
const Property = ({property: {coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID}  }) => (
    <Link href={`/property/${externalID}`} passHref>
        <Flex flexWrap="wrap" w="330px" p="5" paddingTop="0" justifyContent="flex-start"  cursor="pointer"   >
            <Box >
                <Image src={{coverPhoto} ? coverPhoto.url : house } alt="house" width={330} height={240} loading='lazy' />
            </Box>
            <Box w="full">
                <Flex justifyContent="space-between" alignItems="center"  pt="2">
                    <Flex alignItems="center">
                        <Box paddingRight="3" color="green.300" > {isVerified && <GoVerified/>  } </Box>
                        <Text fontWeight="bold" fontSize={"lg"}> AED {millify(price)} {rentFrequency && `/${rentFrequency}`} </Text>
                    </Flex>
                    <Box>
                        <Avatar size={'sm'} src={agency?.logo?.url} />  
                        {/* ? boş değilse anlamına gelir */}
                     </Box>
                </Flex>
                <Flex alignItems="center" p="1" justifyContent="space-between" w="250" color="blue.400" >
                    {rooms} <FaBed/> | {baths}  <FaBath/> | {millify(area)} sqft <BsGridFill/>
 
                </Flex>
                <Text fontSize="lg"  > 
                {title.length > 30 ? title.substring(0, 30) + '...' : title} 
               </Text>
            </Box>
        </Flex>
    </Link>
)

export default Property  ;