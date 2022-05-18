import '../commons/styles/globals.css'
import {ThemeProvider} from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import theme from "../commons/config/theme"
import { Provider } from "react-redux";
import store from "../redux/store"



function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
  <ThemeProvider theme={theme}>
    <CssBaseline/>
  <Component {...pageProps} />
  </ThemeProvider>
  </Provider>
  
}

export default MyApp
