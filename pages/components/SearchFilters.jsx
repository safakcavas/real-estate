import { useEffect, useState } from "react";
import {
  Flex,
  Select,
  Box,
  Text,
  Input,
  Button,
  Spinner,
  Icon,
} from "@chakra-ui/react";
import { useRouter } from 'next/router';
import { MdCancel } from "react-icons/md";
import Image from "next/image";
import { filterData, getFilterValues } from "@/utils/filterData";

const SearchFilters = () => {
  const [filters, setFilters] = useState(filterData);

  const router = useRouter(); //useRouter ile de router'ı kullanabiliyoruz.
  const searchProperties = (filterValues) => {

    const path = router.pathname; 
    const { query } = router;

    const values = getFilterValues(filterValues); 

    values.forEach((item) => {
      query[item.name] = item.value; 
    });

    router.push({ pathname: path, query: query }); 
  };

    //router.pathname ile şu anki sayfanın path'ini alıyoruz. --- path demek /search yani arama sayfası demek.
    //router.query ile de şu anki sayfanın query'ini alıyoruz. ----- query demek ?query=1&query=2 gibi url'de yazılan değerler demek.
    //getFilterValues fonksiyonu ile de filtrelenmiş verileri alıyoruz.
    //query[item.name]=item.value ile de query'ye yeni değerleri ekliyoruz.
    //router.push ile de yeni değerleri url'ye ekliyoruz.
  return (
    <Flex bg="gray.100" p="4" justifyContent="center" flexWrap={"wrap"}>
      {filters.map((filter) => (
        <Box key={filter.queryName}>
          <Select
            placeholder={filter.placeholder}
            alignItems="center"
            w="max-content"
            p="2"
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
          >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
            {/* //burada queryName ile gelen değerleri alıyoruz ve searchProperties fonksiyonuna gönderiyoruz.
                     ardından searchProperties fonksiyonu ile de getFilterValues fonksiyonuna gönderiyoruz. 
                     getFilterValues fonksiyonu ile de filtrelenmiş verileri alıyoruz.  */}
          </Select>
        </Box>
      ))}
    </Flex>
  );
};

export default SearchFilters;
