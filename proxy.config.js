const PROXY_CONFIG = [
    {
        context: [
            "/css_colors.asp",
            "/css_howto.asp",
            "/css_syntax.asp",
            "/css_intro.asp",
            "/default.asp"
        ],
        target: "https://www.w3schools.com/css",
        secure: false
    }
]

module.exports = PROXY_CONFIG;