import React from 'react';
import { Link } from 'react-router-dom';
function Battle() {
    const style = {
        fontWeight: 'bolder',
        fontSize: '28px'
    }
    return (
        <div style = {{ padding: '5px 20px' }}>
            <p style = { style }>Battle page</p>
            <Link 
                to = "/battle/result"
            >To Battle Result</Link>
        </div>
    )
}

export default Battle;