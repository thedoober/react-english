import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement={
    type :'a',
    props : {
        href: "https://google.com",
        target: '_blank'
    },
    children : 'Click me to visit google'
}

function MyApp(){
    return(
        <div>
            <h1>Custom React App hi Hlo</h1>
        </div>
    )
}
 const AnotherElement=(
    <a href="https://google.com" target='_blank'>Vist Google</a>
 )
 const areactElement=React.createElement(
    'a',
    {href:"https://google.com",target:"_blank"},
    "click to visit google"
 )

ReactDOM.createRoot(document.getElementById('root')).render(
    //   <MyApp/>
    // AnotherElement
//    areactElement
<App/>
  
)
