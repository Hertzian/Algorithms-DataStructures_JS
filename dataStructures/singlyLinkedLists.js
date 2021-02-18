/**
 * Objectives
 * Define what a singly linked list is.
 * Compare and contrast Linked Lists with Arrays.
 * Implement insertion,removal and traversal methods on Singly Linked Lists. 
 */

/**
 * What´s a linked list?
 * A data structure that contains a head, tail and length property.
 * Linked lists consist of nodes, and each node has a value and a pointer to another node or null.
 */

/**
 * Comparisons with arrays
 * 
 * List
 * Do not have indexes!
 * Connected via nodes with a next pointer.
 * Random access is not allowed
 * 
 * Arrays
 * Indexed in order!
 * Insertion and deletion can be expensive.
 * Canquickly be accessed at a specific index.
 */

// piece of data - val
// reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    traverse(){
        let current = this.head;
        while(current){
            console.log('traverse: ' + current.val);
            current = current.next;
        }
    }

    /**
     * This function should accept a value.
     * Create a new node using the value passed to the function.
     * If there´s no head property on the list, set the head and tail to be the newly created node.
     * Otherwise set the next property on the tail to be the new node and set the tail property on the listo to be the newly created node.
     * Increment the length by one.
     */
    push(val){
        let newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;

        // console.log(this);
        return this;
    }

    /**
     * If there are no nodes in the list, return undefined.
     * Loop through the list until you reach the tail.
     * Set the next property of the 2nd to last node to be null.
     * Set the tail to be the 2nd to last node.
     * Decrement the length of the list by 1.
     * Return the value of the node removed.
     * Check if the length === 0, then head and tail equals to null, the list is empty.
     */
    pop(){
        if(!this.head){
            return undefined;
        }

        let current = this.head;
        let newTail = current;

        while(current.next){
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        console.log(current);
        return current;
    }

    /**
     * If there are no nodes, return undefined.
     * Store the current head property in a variable.
     * Set the head property to be the current head´s next property.
     * Decrement length by 1.
     * Return the value of the node removed.
     */
    shift(){
        if(!this.head){
            return undefined;
        }

        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;

        if(this.length === 0){
            // this.head = null;
            this.tail = null;
        }

        console.log(currentHead);
        return currentHead;
    }
 
    /**
     * This function should accept a value.
     * Crete a new node using the value passed to the function.
     * If there is no head property on the list, set the head and tail to be the newly created node.
     * Otherwise set the newly created node´s next property to be the current head property on the list.
     * Set the head property on the list to be that newly created node.
     * Increment the length of the list by 1.
     * Return the linked list. 
     */
    unshift(val){
        let newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            newNode.next = this. head;
            this.head = newNode;
        }

        this.length++;

        console.log(this);
        return this;
    }

    /**
     * This function should accept an index.
     * If the index is less than zero or greater than or equal to the length of the list, return null.
     * Loop throught the list until you reach the index and return the node ath that specific index.
     */
    get(index){
        if(index < 0 || index >= this.length){
            console.log(null);
            return null;
        }

        let counter = 0;
        let current = this.head;

        while(counter !== index){
            current = current.next;
            counter++;
        }

        return current;
    }

    /**
     * Change the value of a node.
     * This function should accept a index and a value.
     * Use your get function to find the specific node.
     * If the node is not found, return false.
     * If the node is found, set the value of that node to be the value passed to the function and return true.
     */
    set(index, val){
        let foundNode = this.get(index);

        if(foundNode){
            foundNode.val = val;
            return true;
        }

        return false;
    }

    /**
     * If the index is less than zero or greater than the length, return false.
     * If the index is the same as the length, push a new node to the end of the list.
     * If the index is 0, unshift a new node to the start of the list.
     * Otherwise, using the get method, access the node at the index -1. 
     * Set next property on that node to be the new node.
     * Set the next property on the new node to be the previous next.
     * Increment the length.
     * Return true.
     */
    insert(index, val){
        if(index < 0 || index > this.length){
            return false;
        }

        if(index === this.length){
            return !!this.push(val);
        }

        if(index === 0){
            return !!this.unshift(val);
        }

        let prev = this.get(index - 1);
        let newNode = new Node(val);
        let temp = prev.next;
        prev.next = newNode.next;
        newNode.next = temp;
        this.length++;

        return true;
    }

    /**
     * If the index is less than zero or greater than the length, return undefined.
     * If the index is the same as the length -1, pop.
     * If the index is 0 shift.
     * Otherwise, using the get method, access the node at the index -1.
     * Set the next property on that node to be the next of the next node.
     * Decrement the length.
     * Return the value of the node removed.
     */
    remove(index){
        if(index < 0 || index >= this.length){
            return undefined;
        }

        if(index === 0){
            return this.shift();
        }

        if(index === this.length - 1){
            return this.pop();
        }

        let prev = this.get(index - 1);
        let removed = prev.next;
        prev.next = removed.next;
        this.length--;

        return removed;
    }

    /**
     * Swap the head and tail.
     * Create a variable called next.
     * Create a variable called prev.
     * Create a variable called node and initialize it to the head property.
     *  Loop through the list.
     * Set next to be the next property on whatever node is.
     * Set the next property on the node to be whatever prev is.
     * Set prev to be the value of the node variable.
     * Set the node variable to be the value of the next variable.
     */
    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;

        for(let i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        return this;
    }

    print(){
        let arr = [];
        let current = this.head;

        while(current){
            arr.push(current.val);
            current = current.next;
        }

        console.log(arr);
    }


}

// bad manner
// let first = new Node('hi');
// first.next = new Node('there');
// first.next.next = new Node('how');
// first.next.next.next = new Node('are');
// first.next.next.next.next = new Node('you');

let list = new SinglyLinkedList();
// list.push('Hi');
// list.push('you');
// list.push('I');
// list.push('<3');
// list.push(':)');
// console.log(list.head);
// console.log(list.head.next);
// console.log(list.head.next.next);
// console.log(list.set(40,'weee'));
// console.log(list.remove(1));
// console.log(list.remove(1));
// console.log(list.remove(1));
// console.log(list.remove(1));
list.push(100);
list.push(201);
list.push(250);
list.push(350);
list.push(999);



list.print();
list.reverse();
list.print();