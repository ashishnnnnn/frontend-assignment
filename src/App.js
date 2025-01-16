import React from 'react';
import "./App.css"
import BounceLoader from 'react-spinners/BounceLoader';
import useFetch from '../customHooks/useFetch';
import RenderData from '../Components/renderData/renderData';

const App = () => {
    const { data, loading, error } = useFetch('https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json');
    
    return (
        <div className='app'>
            {loading && (
                <div 
                    className='loaderContainer' 
                    role="status" 
                    aria-live="polite" 
                    aria-describedby="loading-description"
                >
                    <BounceLoader color="#6029ab" size={90} />
                    <p id="loading-description" style={{ visibility: 'hidden' }}>
                        Data is being loaded, please wait.
                    </p>
                </div>
            )}
            
            {error && (
                <div 
                    className='error' 
                    role="alert" 
                    aria-live="assertive"
                >
                    There was an issue fetching the data. Please try again later.
                </div>
            )}
            
            {!loading && !error && <RenderData data={data} perPageData={5} />}
        </div>
    );
};

export default App;
