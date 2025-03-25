import React, { useState } from 'react'
import { getDatabase, ref, set, push } from 'firebase/database'

function Write() {
const [response, setResponse] = useState('')

const handleSubmit = () => {
    const db = getDatabase()
    const responseListRef = ref(db, 'responses')
    const newResponseRef = push(responseListRef)
    set(newResponseRef, {
        response: response,
        timestamp: Date.now()
    })
    setResponse('')
}

return (
    <div>
        <textarea
            id="response-box"
            value={response}
            onChange={(e) => setResponse(e.target.value)}
        />
        <button onClick={handleSubmit}>
            <i className="paper-plane-icon"></i>
        </button>
    </div>
)
}

export default Write