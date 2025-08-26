import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
// import App from './App.jsx'
import './index.css'
import router from './router.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <BrowserRouter>
  //     <App />
  //   </BrowserRouter>
  // </StrictMode>,

    <StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </StrictMode>,
)
