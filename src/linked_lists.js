

class List {
    head = null;

    append(value) {
        if (this.head == null) {
            let newNode = createNode(value);
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            let newNode = createNode(value);
            currentNode.next = newNode;
        }
    }

    prepend(value) {
        let newNode = createNode(value);
        if (this.head == null) {
            this.head = newNode;
        } else {
            let previousNode = this.head;
            this.head = newNode;
            newNode.next = previousNode;
        }
    }

    size() {
        let count = 0;
        let currentNode = this.head;
        while (currentNode) {
            count++;
            currentNode = currentNode.next;
        }
        return count;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        return current;
    }

    at(index) {
        if(index > this.size()) {
            return "error: out of bounds.";
        }
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode.value;
    }

    pop() {
        let current = this.head;
        let previous;
        while (current.next) {
            previous = current;
            current = current.next;
        }
        current.value = null;
        previous.next = null;
    }

    clear() {
        this.head = null;
    }

    contains(value) {
        let currentNode = this.head;
        while (currentNode.next) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }

    find(value) {
        let currentNode = this.head;
        let count = 0;
        while (currentNode.next) {
            if (currentNode.value === value) {
                return count;
            }
            count++;
            currentNode = currentNode.next;
        }
        return "value not found";
    }

    toString() {
        let result = "";
        let currentNode = this.head;
        while (currentNode.next) {
            result += `( ${currentNode.value} ) => `;
            currentNode = currentNode.next;
            if (currentNode.next == null) {
                result += `( ${currentNode.value} ) => null`;
            }
        }
        return result;
    }

}

function createNode(value, next = null) {
    value = value;
    next = next;

    return { value, next };
}

export { List };