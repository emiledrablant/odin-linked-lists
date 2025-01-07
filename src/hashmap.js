
class HashMap {
    constructor() {
        this.loadFactor = 0.75;
        this.capacity = 0;
        this.sizeOfMap = 16;
        this.size = 0;
        this.data = [];
        this.populateData(this.sizeOfMap);
    }

    calculateCapacity() {
        let currentLoad = this.sizeOfMap * this.loadFactor;
        if (this.capacity > currentLoad) {
            this.grow();
        }
    }

    populateData(currentSize) {
        for (let i = 0; i < currentSize; i++) {
            this.data.push([]);
        }
    }

    grow() {
        let previousData = this.data.slice(0);
        this.sizeOfMap *= 2;
        this.populateData(this.sizeOfMap / 2);
        this.clear();
        for (let row of previousData) {
            for (let element of row) {
                this.set(element.key, element.value);
            }
        }
    }

    hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.sizeOfMap;
        }

        return this.data[hashCode];
    }

    checkBucket(bucket, key) {
        for (let item of bucket) {
            if (item.key === key) {
                return item;
            }
        }
        return null;
    }
    
    set(key, value) {
        let bucketAdress = this.hash(key);
        let keyInBucket = this.checkBucket(bucketAdress, key);
        if (keyInBucket) {
            keyInBucket.value = value;
            return;
        }
        bucketAdress.push({key, value});
        this.capacity++;
        this.calculateCapacity();
    }

    get(key) {
        let bucketAdress = this.hash(key);
        for (let element of bucketAdress) {
            if (element.key === key) {
                return element.value;
            }
        }
        return null;
    }

    has(key) {
        let bucketAdress = this.hash(key);
        for (let element of bucketAdress) {
            if (element.key === key) {
                return true;
            }
        }
        return false;
    }

    remove(key) {
        let bucketAdress = this.hash(key);
        for (let element of bucketAdress) {
            if (element.key === key) {
                bucketAdress.splice(bucketAdress.indexOf(element), 1);
            }
        }
    }

    length() {
        return this.size;
    }

    clear() {
        for (let row of this.data) {
            row.splice(0, row.length);
        }
    }

    keys() {
        let result = [];
        for (let row of this.data) {
            for (let element of row) {
                result.push(element.key);
            }
        }
        return result;
    }

    values() {
        let result = [];
        for (let row of this.data) {
            for (let element of row) {
                result.push(element.value);
            }
        }
        return result;
    }

    entries() {
        let result = [];
        for (let row of this.data) {
            for (let element of row) {
                result.push([element.key, element.value]);
            }
        }
        return result;
    }
     
}

export { HashMap }

/*
if (index < 0 || index >= buckets.length) {
    throw new Error("Trying to access index out of bounds");
}
*/