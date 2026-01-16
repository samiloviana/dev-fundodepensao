import https from "https"

import http from "http"

const PORTA = 10000


const server = http.createServer((req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type")

    if(req.method === "OPTIONS") {
        res.statusCode = 204
        return res.end()
    }


    if(req.method === "GET" && req.url === "/BBAS3") {
        https.get("https://brapi.dev/api/quote/BBAS3?token=w9kC7E7n7QPZVQxJxEqLje", (BBAS3) => {
            let body = ""
            BBAS3.on("data", (chunk) => { body += chunk})
            BBAS3.on("end", () => {
                const dataJSON = JSON.parse(body)
                res.statusCode = 200
                res.setHeader("Content-Type", "application/json")
                res.end(JSON.stringify(dataJSON))
            })
            
        })
        return
    }

    if(req.method === "GET" && req.url === "/ITUB4") {
        https.get("https://brapi.dev/api/quote/ITUB4?token=w9kC7E7n7QPZVQxJxEqLje", (ITUB4) => {
            let body = ""

            ITUB4.on("data", (chunk) => { body += chunk})
            ITUB4.on("end", () => {
                const dataJSON = JSON.parse(body)
                res.statusCode = 200
                res.setHeader("Content-Type", "application/json")
                res.end(JSON.stringify(dataJSON))
            })
            
        })
            
                return

    }


        if(req.method === "GET" && req.url === "/BBDC4") {
        https.get("https://brapi.dev/api/quote/BBDC4?token=w9kC7E7n7QPZVQxJxEqLje", (BBDC4) => {
            let body = ""

            BBDC4.on("data", (chunk) => { body += chunk})
            BBDC4.on("end", () => {
                const dataJSON = JSON.parse(body)
                res.statusCode = 200
                res.setHeader("Content-Type", "application/json")
                res.end(JSON.stringify(dataJSON))
            })
            
        })
            
                return

    }

        if(req.method === "GET" && req.url === "/SANB11") {
        https.get("https://brapi.dev/api/quote/SANB11?token=w9kC7E7n7QPZVQxJxEqLje", (SANB11) => {
            let body = ""

            SANB11.on("data", (chunk) => { body += chunk})
            SANB11.on("end", () => {
                const dataJSON = JSON.parse(body)
                res.statusCode = 200
                res.setHeader("Content-Type", "application/json")
                res.end(JSON.stringify(dataJSON))
            })
            
        })
            
        return

    }
    res.statusCode = 404
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify("Pagina não encontrada"))

})


server.listen(PORTA)