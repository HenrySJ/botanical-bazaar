import { AppBar, Box, Toolbar, Typography } from '@mui/material'

export default function Home() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography component="div" variant="h5" color="primary">
              Botanical{' '}
              <Typography component="span" variant="h5" color="secondary">
                Bazaar
              </Typography>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}
