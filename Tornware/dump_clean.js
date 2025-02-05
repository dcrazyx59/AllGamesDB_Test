import fs from 'fs';
import path from 'path';
import { tagNamesVariables } from './tags.js'; 
import { fileURLToPath } from 'url'; 

var ge = class {
    buffer;
    view;
    i = 0;
    constructor(t) {
        this.buffer = t,
        this.view = new DataView(t)
    }
    readByte() {
        return this.view.getUint8(this.i++)
    }
    readBytes(t) {
        let n = new Uint8Array(this.buffer,this.i,t);
        return this.i += t,
        n
    }
    readVarInt() {
        let t = 0;
        for (let n = 0; ; n += 7) {
            let r = this.view.getUint8(this.i++);
            if (t |= (r & 127) << n,
            !(r >> 7))
                break
        }
        return t
    }
    textDecoder = new TextDecoder;
    readString() {
        let t = this.readVarInt()
          , n = new Uint8Array(this.buffer,this.i,t);
        return this.i += t,
        this.textDecoder.decode(n)
    }
}


async function Xe() {
    // Fetching the binary data from the provided URL
    const buffer = fs.readFileSync('dump.br'); // Read the file synchronously

    // Convert the buffer to an ArrayBuffer
    const arrayBuffer = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
    
    let t = new ge(arrayBuffer);  // Create a new instance of the ge class with the fetched data
    
    if (t.readVarInt() === 4) {  // Check if the data starts with the expected identifier
        t.readVarInt();  // Read and discard the next value
        let r = t.readVarInt();  // Read the number of tag names
        let s = new Array(r);
        
        // Read the tag names
        for (let a = 0; a < r; a++) {
            s[a] = t.readString();  // Read each tag name as a string
        }
        
        $.tagNames = s;  // Store tag names globally or in a global object
        
        let i = t.readVarInt();  // Read the number of objects to process
        let d = new Array(i);
        
        // Read and create objects
        for (let a = 0; a < i; a++) {
            let v = t.readVarInt();  // Read an integer (possibly ID or identifier)
            let y = t.readString();  // Read a string (possibly a name or label)
            let E = t.readVarInt();  // Read another integer (maybe a category or some metric)
            let u = t.readVarInt();  // Another integer (perhaps a duration or period)
            let o = t.readVarInt();  // Another integer (perhaps a score or rating)
            let h = t.readVarInt();  // Another integer (could be a count or amount)
            let g = t.readVarInt();  // Another integer (likely a status flag or some indicator)
            
            // Check for certain flags and adjust accordingly
            let w = (g & 64) === 64 ? "" : void 0;
            if (w !== void 0) {
                // Read 20 bytes if the flag is set and convert to a hex string
                t.readBytes(20).forEach(k => w += k.toString(16).padStart(2, "0"));
            }
            
            // Read additional data based on flags
            let x = (g & 1048576) === 1048576 ? t.readVarInt() : -1;
            let D = t.readVarInt();  // Number of elements for the next collection
            let N = new Array(D);
            
            // Read a collection of integers
            for (let k = 0; k < D; k++) {
                N[k] = t.readVarInt();  // Populate the array with integers
            }
            
            // Create an object using the values we just read
            d[a] = new $(v, y, E, E + u, o, h, g, w, x, N);
        }
        
        return d;  // Return the array of objects
    } else {
        return [];  // Return an empty array if the expected identifier is not found
    }
}

// Example class constructor to match the object creation pattern
class game {
    constructor(v, y, E, sumE, o, h, g, w, x, N) {
        this.v = v;
        this.y = y;
        this.E = E;
        this.sumE = sumE;
        this.o = o;
        this.h = h;
        this.g = g;
        this.w = w;
        this.x = x;
        this.N = N;
    }
}


var $ = class e {
    static tagNames
    static metaTagNames = new Map([["VR", 3], ["VR Only", 2], ["Linux", 4], ["Mac", 8], ["Windows", 16], ["Adult Only", 32], ["Steam Deck Playable", 384], ["Steam Deck Verified", 256], ["Gamepad Preferred", 512], ["Full Controller Support", 1024], ["Steam Input API Support", 2048], ["Remote Play Together", 4096], ["Steam Workshop", 8192], ["Split Screen Co-op", 16384], ["LAN Co-op", 32768], ["Online Co-op", 65536], ["Split Screen PvP", 131072], ["LAN PvP", 262144], ["Online PvP", 524288], ["MMO", 2097152], ["Split Screen Multiplayer", 147456], ["LAN Multiplayer", 294912], ["Online Multiplayer", 2686976], ["Co-op", 114688], ["PvP", 917504], ["Multiplayer", 3129344]]);
    appID;
    name;
    positiveVotes;
    votes;
    release;
    price;
    metaTags;
    imageID;
    tempImageNumber;
    tags;
    score = 0;
    owned = !1;
    wishlisted = !1;
    ignored = !1;
    constructor(t, n, r, s, i, d, a, v, y, E) {
        this.appID = t,
        this.name = n,
        this.positiveVotes = r,
        this.votes = s,
        this.release = Ce(i),
        this.price = d * .01,
        this.metaTags = a,
        this.imageID = v,
        this.tempImageNumber = y,
        this.tags = E
    }
    hasMetaTag(t) {
        return (this.metaTags & (e.metaTagNames.get(t) ?? 0)) !== 0
    }
}

Xe().then(data => console.log(data)).catch(err => console.error(err));

function Ce(e) {
    return new Date((e - 719162) * 864e5 + 432e5)
}

async function saveDataToJson() {
    try {
        const data = await Xe(); // Fetch processed data
        
        if (data.length === 0) {
            console.log("No data found.");
            return;
        }

        // Use `import.meta.url` to get the current file's URL and derive the directory
        const __filename = fileURLToPath(import.meta.url); // Convert URL to file path
        const __dirname = path.dirname(__filename); // Get directory name

        const jsonPath = path.join(__dirname, 'output.json'); // Path to save the JSON file

        fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2)); // Write JSON data to file
        console.log(`Data successfully written to ${jsonPath}`);
        
    } catch (error) {
        console.error("Error saving data:", error);
    }
}

saveDataToJson();