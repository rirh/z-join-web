import { createMuiTheme } from '@material-ui/core/styles';


export default createMuiTheme({
    overrides: {
        MuiCssBaseline: {
            '@global': {
                html: {
                    fontFamily: "'Courier New', Courier, monospace",
                    fontWeight: 400
                },
            },

        }

    },
    palette: {
        primary: {
            // light: 这将从 palette.primary.main 中进行计算，
            main: '#000080',
            // dark: 这将从 palette.primary.main 中进行计算，
            // contrastText: 这将计算与 palette.primary.main 的对比度
        },
    }
})