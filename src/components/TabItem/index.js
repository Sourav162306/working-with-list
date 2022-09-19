import './index.css'

const TabItem = props => {
  const {tabDetails, changeTab, isActive} = props
  const {displayText, tabId} = tabDetails

  const applyCss = isActive ? 'active-tab-btn' : ''

  const changeTabBtn = () => {
    changeTab(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        onClick={changeTabBtn}
        className={`tab-btn ${applyCss}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
