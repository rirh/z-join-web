import React, { FunctionComponent } from 'react';
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from 'src/styles/themeProvider'
import { AppRouter } from 'src/routers/index'
import { Provider } from 'react-redux'
import { store } from 'src/redux/redux'

export const App: FunctionComponent = () => {
    return <>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppRouter />
            </ThemeProvider >
        </Provider>
    </>;
};

