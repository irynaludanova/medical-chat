import { StreamChat } from "stream-chat"
import { Chat } from "stream-chat-react"
import Cookies from "universal-cookie"
import "./App.css"
import { ChannelContainer, ChannelListContainer } from "./components"

const apiKey = process.env.KEY

const client = StreamChat.getInstance(apiKey)

function App() {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer />

        <ChannelContainer />
      </Chat>
    </div>
  )
}

export default App
