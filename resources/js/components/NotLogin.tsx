import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './notLoginComponents/router/Router';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function NotLogin() {
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider>
                <BrowserRouter>
                    <Router></Router>
                </BrowserRouter>
            </ChakraProvider>
        </QueryClientProvider>
    );
}

export default NotLogin;

if (document.getElementById('notLogin')) {
    ReactDOM.render(<NotLogin />, document.getElementById('notLogin'));
}
