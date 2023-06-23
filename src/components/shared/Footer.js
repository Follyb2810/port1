import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import { AddLocationAlt, Facebook } from '@mui/icons-material';
import { Container } from '@mui/material';

export default function Footer() {
  return (
    <Container maxWidth="xl">
        <Box justifyContent={'space-between'} display={'flex'}>
        
        <Image src={require('/src/components/asset/img/logo.png')} alt='folly'  width={50}
        height={50} />
        <Box
        sx={{
            '& > :not(style)': {
                m: 2,
            },
            }}
            >
            <Facebook fontSize="small" />
            <AddLocationAlt />
            <AddLocationAlt fontSize="large" />
            <AddLocationAlt sx={{ fontSize: 40 }} />
            </Box>
            </Box>
        </Container>
  );
}