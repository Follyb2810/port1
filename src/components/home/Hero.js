import {Typography, Button, Box, Container} from '@mui/material'
import { BoxGradient } from '@/src/styles/style';
  function Hero() {
    
    return (
      <Container maxWidth="xl">
        <BoxGradient >
        {/* Content of your component */}
        <h1>heel</h1>
        <Typography  component="h2">
        h1. Heading
        </Typography>
        <Button>hello</Button>
        <Button >hello</Button>
        
        </BoxGradient>
      </Container>
    );
  }
  export default Hero