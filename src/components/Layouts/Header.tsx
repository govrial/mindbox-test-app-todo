import { Typography } from "@mui/material";

const Header = () => {
  return <Typography 
    component="h1" 
    sx={{ fontSize: 40 }} 
    mt={12} 
    align="center"
  >
    Todo app
  </Typography>
}

export { Header };