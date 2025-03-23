const http = require('http')
const express = require('express')

const handlerFnV2 = express()

handlerFnV2.get('/', (req, res) => res.send('home page'))
handlerFnV2.get('/about', (req, res) => res.send('about page'))
handlerFnV2.get('/contact', (req, res) => res.send('contact page'))

function handlerFn (req, res) {
    switch (req.method) {
        case 'GET': 
            {
                if(req.url === '/') {
                    return res.end('home page')
                }
                if(req.url === '/contact') {
                    return res.end('contact page')
                }
                if(req.url === '/about') {
                    return res.end('about page')
                }
            }
            break;
    }
}

const server = http.createServer(handlerFnV2);  // that's how express makes life easier, at the end its createserver only

server.listen(8000);