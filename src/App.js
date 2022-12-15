import { useSelector } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';

// ==============================|| APP ||============================== //
const clientId = process.env.REACT_APP_AUTH_CLIENT_ID;
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const App = () => {
    const customization = useSelector((state) => state.customization);

    return (
        <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={themes(customization)}>
                    <CssBaseline />
                    <NavigationScroll>
                        <Routes />
                    </NavigationScroll>
                </ThemeProvider>
            </StyledEngineProvider>
        </Auth0Provider>
    );
};

export default App;
