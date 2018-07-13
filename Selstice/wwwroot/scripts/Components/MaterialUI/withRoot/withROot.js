import * as React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import CssBaseline from '@material-ui/core/CssBaseline';
const theme = createMuiTheme({
    palette: {
        primary: purple,
        secondary: green,
    },
});
function withRoot(Component) {
    function WithRoot(props) {
        return (React.createElement(MuiThemeProvider, { theme: theme },
            React.createElement(CssBaseline, null),
            React.createElement(Component, Object.assign({}, props))));
    }
    return WithRoot;
}
export default withRoot;
