let URL = Java.type("java.net.URL")
let HttpURLConnection = Java.type("java.net.HttpURLConnection")
let OutputStreamWriter = Java.type("java.io.OutputStreamWriter")
let BufferedReader = Java.type("java.io.BufferedReader")
let InputStreamReader = Java.type("java.io.InputStreamReader")

let sessionToken = null
register("command", (username, password) => {
    if (!username || !password) {
        ChatLib.chat("&cUsage: /palogin <username> <password>")
        return
    }
    try {
    let url = new URL("http://localhost:8080/auth/login")
    let conn = url.openConnection()
        conn.setRequestMethod("POST")
        conn.setRequestProperty("Content-Type", "application/json")
        conn.setDoOutput(true)

        let json = JSON.stringify({
            username: username,
            password: password
        })

    let writer = new OutputStreamWriter(conn.getOutputStream())
        writer.write(json)
        writer.flush()
        writer.close()

    let responseCode = conn.getResponseCode()
    let response = ""
        try {
            let reader = new BufferedReader(new InputStreamReader(conn.getInputStream()))
            let line
            while ((line = reader.readLine()) !== null) response += line
            reader.close()
        } catch (error) {
            console.log("&cLogin failed: " + error)
            
        }
    let cookieHeader = conn.getHeaderField("Set-Cookie")
        if (cookieHeader && cookieHeader.indexOf("PURPLE-AUTH=") !== -1) {
            sessionToken = cookieHeader.match(/PURPLE-AUTH=([^;]+)/)[1]
            ChatLib.chat("&aLogin successful!")
        } else {
            ChatLib.chat("&cLogin failed: No session token received.")
        }
    } catch (e) {
        console.log("&cLogin error: " + error)
    }
}).setName("palogin")

function isAuthenticated() {
    if (!sessionToken) return false
    try {
    let url = new URL("http://localhost:8080/users/staff")
    let conn = url.openConnection()
        conn.setRequestProperty("Cookie", "PURPLE-AUTH=" + sessionToken)
        conn.connect()
        return conn.getResponseCode() === 200
    } catch (error) {
        return false
    }
}

// test command
register("command", () => {
    if (!sessionToken) {
        ChatLib.chat("&cYou must login to use this command!")
        return
    }
    if (!isAuthenticated()) {
        ChatLib.chat("&cYour session is invalid or expired. Please log in again.")
        return
    }

    ChatLib.chat("&aYou have access to the test command!")

}).setName("testcmd")