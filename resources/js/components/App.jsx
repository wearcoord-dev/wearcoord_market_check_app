import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './providers/UserProvider';
import { MainRouter } from './router/MainRouter';

function App() {
    return (
        <div>
            <UserProvider>
                <BrowserRouter>
                    <MainRouter />
                </BrowserRouter>
            </UserProvider>
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
