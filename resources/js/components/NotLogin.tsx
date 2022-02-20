import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './notLoginComponents/router/Router';

function NotLogin() {
    return (
        <ChakraProvider>
            <BrowserRouter>
                <Router>

                </Router>
            </BrowserRouter>
        </ChakraProvider>
    );
}

export default NotLogin;

if (document.getElementById('notLogin')) {
    ReactDOM.render(<NotLogin />, document.getElementById('notLogin'));
}
