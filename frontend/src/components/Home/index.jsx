import React from 'react';

function Home() {
    return (
        <div className="text-center">
            <h1>Welcome</h1>
            <a className="px-3" href="https://www.linkedin.com/in/brianmahlstedt">
                <img height="64" width="64" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg" />
            </a>
            <a className="px-3 mt-5" href="https://github.com/brianmahlstedt">
                <img height="64" width="64" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" />
            </a>
        </div>
    );
}

export default Home;
