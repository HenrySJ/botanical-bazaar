import themeDefault from '@/themes/default'
import { ThemeProvider } from '@mui/material/styles'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={themeDefault}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
