// src/pages/Media.jsx
import React from 'react';

function Media() {
    return (
        <div className="media-page">
            <h1>Media</h1>
            <p>Watch the latest media coverage and interviews related to our school:</p>
            <ul>
                <li>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">School Documentary</a>
                </li>
                <li>
                    <a href="https://news.com" target="_blank" rel="noopener noreferrer">Recent News Article</a>
                </li>
            </ul>
        </div>
    );
}

export default Media;
