//npm install @mui/material @emotion/react @emotion/styled

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="공지사항" {...a11yProps(0)} />
          <Tab label="Q&A" {...a11yProps(1)} />
          <Tab label="자료실" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Q&A입니다.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
    <hr />

    <Typography variant='h1'>글자 작성</Typography>
    <Typography variant='h2'>글자 작성</Typography>
    <Typography variant='h3'>글자 작성</Typography>
    <Typography variant='h4'>글자 작성</Typography>
    <Typography variant='h5'>글자 작성</Typography>
    <Typography variant='h6'>글자 작성</Typography>

    <Typography variant='body1'>글자 작성</Typography>
    <Typography variant='body2'>글자 작성</Typography>

    <Typography variant='h5'>글자 작성</Typography>
    <Typography variant='h5'>글자 작성</Typography>
    
    <Typography>일반 텍스트</Typography>
    </>
  );
}

