import React, { useState } from 'react';

const ReaderCount = () => {
    const [ readsCount, setReadsCount ] = useState(0);

    const increaseReadsCount = () => setReadsCount(readsCount + 1);

    return (
        <>
        <p>There have been <span role="figure" id="reads">{readsCount}</span> reader(s)!</p>

        <button aria-label="Read story" onClick={increaseReadsCount}>I've read!</button>
        </>
    )
}

export default ReaderCount;