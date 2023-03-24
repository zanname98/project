import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouters } from './routers';
import DefaultLayout from './components/Layouts/DefaultLayout';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRouters.map((router, index) => {
                        const Layout = DefaultLayout;
                        const Page = router.component;
                        return (
                            <Route
                                key={index}
                                path={router.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
