import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import MyPost from './MyPost'
import MyDelete from './MyDelete'
import MyPatch from './MyPatch'
import MyAll from './MyAll'
import MyErrors from './MyErrors'
import MyAsyncAwait from './MyAsyncAwait'
import MyTransform from './MyTransform'
import MyInterceptor from './MyInterceptor'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <MyPost />
    <MyDelete />
    <MyPatch />
    <MyAll />
    <MyErrors />
    <MyAsyncAwait />
    <MyTransform />
    <MyInterceptor />
  </>
)