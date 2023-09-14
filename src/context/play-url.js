import React from "react"

const defaultState = {
  language: 'th',
}
const PlayUrlContext = React.createContext(defaultState)

class PlayUrlProvider extends React.Component {
  state = {
    language: 'th',
  }
  setLanguage = (language) => {
    this.setState({ language })
  }

  render() {
    const { children } = this.props
    const { language } = this.state
    return (
      <PlayUrlContext.Provider
        value={{
          language,
        }}
      >
        {children}
      </PlayUrlContext.Provider>
    )
  }
}
export default PlayUrlContext
export { PlayUrlProvider }
