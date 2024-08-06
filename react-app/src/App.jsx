import './App.css'
import Button from './components/Button'
import Message from './components/Message'
import Post from './components/Post'

function App() {

  return (
    <>
      {/* <Message />
      <Button text="upvote" /> */}

      <div className='w-screen h-screen flex justify-center items-start bg-gray-950 overflow-x-hidden'>
        <Post />
      </div>


    </>
  )
}

export default App
