import React, {useState} from 'react';

import {Button} from '@mui/material'

function Download({ url, name }) {
    const [fetching, setFetching] = useState(false);
    const [error, setError] = useState(false);

    const download = (url, name) => {
    if (!url) {
        throw new Error("Resource URL not provided! You need to provide one");
    }
    setFetching(true);
    fetch(url, { mode: 'no-cors'})
        .then(response => response.blob())
        .then(blob => {
            setFetching(false);
            const blobURL = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = blobURL;
            a.style = "display: none";

            if (name && name.length) a.download = name;
            document.body.appendChild(a);
            a.click();
        })
        .catch(() => setError(true));
    };

    return (
        <Button
            disabled={fetching}
            onClick={()=> download(url, name)}
            aria-label="download"
        >
        Descargar
        </Button>
    );
}

export default Download