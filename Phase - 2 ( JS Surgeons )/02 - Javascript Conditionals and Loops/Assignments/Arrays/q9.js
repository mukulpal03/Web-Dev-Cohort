// A new VIP guest arrives at the club and should be at the front of the queue. add them to the beginning of the list.

// create a function that adds a VIP guest to the front of the queue and returns the updated list.

function addVIP (queue, vipGuest) {
    queue.unshift(vipGuest)
    return queue;
}