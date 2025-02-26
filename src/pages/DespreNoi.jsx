import React, { useState, useEffect } from 'react';
import '../App.css';  // Correct import path

function DespreNoi() {
    const [text, setText] = useState('');

    useEffect(() => {
        fetch('/assets/despre-noi.txt')  // Assuming the text file is in public/assets
            .then(response => response.text())
            .then(data => setText(data))
            .catch(error => console.error('Error loading the text file:', error));
    }, []);

    const formatText = (rawText) => {
        const lines = rawText.split('\n');
        const formattedText = [];

        lines.forEach((line, index) => {
            if (index === 0) {
                // For the first sentence, add a tab (indentation) and bold text
                formattedText.push(
                    <p key={index} style={{ fontWeight: 'bold', fontSize: '1.2rem', paddingLeft: '20px' }}>
                        {line}
                    </p>
                );
            } else if (line.startsWith('-')) {
                // For bullet points, render the list item
                formattedText.push(
                    <li key={index} style={{ marginTop: '20px' }}>
                        {line.slice(1).trim()}
                    </li>
                );
                // Only add a line break after the bullet point if the next line is a paragraph
                if (lines[index + 1] && !lines[index + 1].startsWith('-')) {
                    formattedText.push(<br key={`br-${index}`} />);
                }
            } else {
                formattedText.push(
                    <p key={index} style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                        {line}
                    </p>
                );
            }
        });

        return formattedText;
    };

    return (
        <div className="despre-noi-container">
            <div className="island">
                <h1>Despre Noi</h1>
                <br />
                <div className="text-content">
                    {formatText(text)}
                </div>
            </div>
        </div>
    );
}

export default DespreNoi;
