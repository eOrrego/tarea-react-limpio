import React from 'react'

const Loading = ({ isLoading, children }) => {
    return (
        <>{isLoading ? (
            <div className="spinner-grow text-info vh-100 vw-100" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        ) : (
            children
        )
        }
        </>
    )
}

export default Loading