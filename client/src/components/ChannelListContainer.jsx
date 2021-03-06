import React from "react"
import { ChannelList, useChatContext } from "stream-chat-react"
import Cookies from "universal-cookie"
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "./"
import hospitalIcon from "./../assets/hospital.png"
import logoutIcon from "./../assets/logout.png"
const Sidebar = () => {
  return (
    <div className="channel-list__sidebar">
      <div className="channel-list__sidebar__icon1">
        <div className="icon1__inner">
          <img src={hospitalIcon} alt="hospital" width="30" />
        </div>
      </div>
      <div className="channel-list__sidebar__icon2">
        <div className="icon1__inner">
          <img src={logoutIcon} alt="logout" width="30" />
        </div>
      </div>
    </div>
  )
}

const CompanyHeader = () => {
  return (
    <div className="channel-list__header">
      <p className="channel-list__header__text">Medical Pager</p>
    </div>
  )
}
const ChannelListContainer = () => {
  return (
    <>
      <Sidebar />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => <TeamChannelList {...listProps} type="team" />}
          Preview={(previewProps) => (
            <TeamChannelPreview {...previewProps} type="team" />
          )}
        />
      </div>
    </>
  )
}

export default ChannelListContainer
