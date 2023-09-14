let language = ''
exports.getLanguage = () => {
    return language
}

exports.setLanguage = (value) => {
    localStorage.setItem('lang', JSON.stringify(value));
    window.dispatchEvent(new Event("storage"));
    language = value
}
