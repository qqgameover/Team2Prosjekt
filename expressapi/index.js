import * as dotenv from 'dotenv'
dotenv.config();
import express from "express"
import cors from "cors"
import client from "ssh2-sftp-client"
import fs from "fs"
import papa from "papaparse"
import path from "path"

class SFTPClient {
    client;
    constructor() {
        this.client = new client();
    }

    async connect(options) {
        console.log(`Connecting to ${options.host}:${options.port}`);
        try {
            await this.client.connect(options)
        } catch (err) {
            console.error(err)
        }
    }

    async disconnect() {
        await this.client.end();
    }
    async listFiles(remoteDir, fileGlob) {
        console.log(`Listing ${remoteDir} ...`);
        let fileObjects;
        try {
            fileObjects = await this.client.list(remoteDir, fileGlob);
        } catch (err) {
            console.log('Listing failed:', err);
        }

        const fileNames = [];

        for (const file of fileObjects) {
            if (file.type === 'd') {
                console.log(`${new Date(file.modifyTime).toISOString()} PRE ${file.name}`);
            } else {
                console.log(`${new Date(file.modifyTime).toISOString()} ${file.size} ${file.name}`);
            }

            fileNames.push(file.name);
        }
        return fileNames;
    }
    async downloadDirLoc() {
        return await this.client.downloadDir("./SKOWoW", "./datafiles")
    }
}






const app = express();
const dirArray = [];
const pathArr = [];
const jsonArr = []

app.use(cors());

app.get("/", (req, res) => {
    res.send(jsonArr);
});


(async () => { 
    const parsedURL = new URL(process.env.SFTPURL);
    const port = parsedURL.port || 22;
    const dirPath = "datafiles"
    const { host, username, password } = parsedURL;

    //* Open the connection
    const client = new SFTPClient();
    await client.connect({ host, port, username, password });

    const getFilePaths = (cb) => {
        dirArray.forEach((dirName) => {
            const absolutePath = path.resolve(dirPath, dirName);
            fs.readdir(absolutePath, cb);
        })
    } 
    const createJSON = (filePath) => {
        const file = fs.createReadStream(filePath)
        papa.parse(file, {
            worker: true,
            header: true,
            complete: (results, file) => {
                jsonArr.push(results.data);
            }
        })
    }
    let __cb = async (_err, files) => {
        files.forEach(file => {
            let absolutePath;
            if(file.includes("8")) {
                console.log(file);
                absolutePath = path.resolve((dirPath + "/Trinn 8"), file)
                if(absolutePath) {
                    pathArr.push(absolutePath);
                    createJSON(absolutePath)
                    return
                }
            }
            if(file.includes("5")) {
                absolutePath = path.resolve((dirPath + "/Trinn 5"), file)
                if(absolutePath) {
                    pathArr.push(absolutePath);
                    createJSON(absolutePath)
                    return
                }
            }
            if(file.includes("larere")) {
                absolutePath = path.resolve((dirPath + "/Trinn larere"), file)
                if(absolutePath) {
                    pathArr.push(absolutePath);
                    createJSON(absolutePath)
                    return
                }
            }
        })
    }

    let _cb = async (_err, files) => {
        if(files.length === 0) await client.downloadDirLoc() 
        else {
            files.forEach(file => {
                const absolutePath = path.resolve(dirPath , file);
                dirArray.push(absolutePath);
            });
            getFilePaths(__cb);
        }
    } 

    fs.readdir(dirPath, _cb)
    
    //* Close the connection
    await client.disconnect();
})();



app.listen(3000, () => console.log('Port 3000 open'));


