#!/usr/bin/env node

const exec = require('child_process').exec;
const commend = 'lsof -i tcp:8080';
const async_exec = (command) => {
    return new Promise((reslove, reject) => {
        exec(command, (err, stdout) => {
            if (err) reject(err);
            else reslove(stdout)
        })
    })
}

async_exec(commend).then(
    (stdout) => {
        console.log(stdout);
        let port = 0;
        const line = stdout.split('\n').find((line) => {
            [, port] = line.trim().split(/\s+/);
            return !isNaN(Number(port))
        });
        console.log(stdout);
        [, port] = (line.trim().split(/\s+/));
        port = Number(port);
        async_exec(`kill -9 ${port}`).then((killstrout) => {
            console.log(killstrout)
        })
    }
).catch((err) => {
    console.log(err)
    console.log(1)
})
