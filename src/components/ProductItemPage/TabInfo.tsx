'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ProductInfoDetail from './ProductInfoDetail';

export default function TabInfo() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label='lab API tabs example'>
            <Tab label='Thông tin sản phẩm' value='1' />
            <Tab label={`Đánh giá (0)`} value='2' />
          </TabList>
        </Box>
        <TabPanel value='1'>
          <ProductInfoDetail />
        </TabPanel>
        <TabPanel value='2'>{`Đánh giá (0)`}</TabPanel>
      </TabContext>
    </Box>
  );
}
