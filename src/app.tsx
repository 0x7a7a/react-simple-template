import React from 'react'
import { Button, message } from 'antd'
import ReactDOM from 'react-dom'

const App = () => {
    return (
        <div>
            <Button
                onClick={() => {
                    message.success('Hello World')
                }}
            >
                Hello World!
            </Button>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
