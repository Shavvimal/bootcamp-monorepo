import React from 'react';
import { FaveButton } from '..';

const Headlines = ({ stories, handleSelect }) => {
    return (
        <ul>
            {
                stories.map(st =>  (
                    <li key={st.id} onClick={() => handleSelect(st.id)}>
                        <FaveButton /> <strong role="heading" aria-label="headline">{st.headline}</strong> {st.snippet}
                    </li>
                ))
            }
        </ul>
    )
}



export default Headlines;