import Image from 'next/image';
import { Box } from '@chakra-ui/react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

export default function ImageScrollbar({ data }) {
  return (
    <ScrollMenu style={{ overflow: 'hidden' }}>
      {data.map((item) => (
        <Box key={item.id} width='910px' itemId={item.id} overflow='hidden' p='1'>
          <Image
            placeholder="blur"
            blurDataURL={item.url}
            src={item.url}
            width={1000}
            height={500}
            sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
            alt={`Image ${item.id}`} // Adding alt text for accessibility
          />
        </Box>
      ))}
    </ScrollMenu>
  );
}
