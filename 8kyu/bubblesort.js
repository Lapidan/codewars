
// DESCRIPTION:
// #Bubbleing around

// Since everybody hates chaos and loves sorted lists we should implement some more sorting algorithms. Your task is to implement a Bubble sort (for some help look at https://en.wikipedia.org/wiki/Bubble_sort) and return a list of snapshots after each change of the initial list.

// e.g.

// If the initial list would be l=[1,2,4,3] my algorithm rotates l[2] and l[3] and after that it adds [1,2,3,4] to the result, which is a list of snapshots.

// [1,2,4,3] should return [ [1,2,3,4] ]
// [2,1,4,3] should return [ [1,2,4,3], [1,2,3,4] ]
// [1,2,3,4] should return []



// SOLUTION:





function bubble(arr) {
    const n = arr.length;
    const steps = [];



for (let i = 0; i < n; i++) {
    for (let j = 0; j < n-i-1; j++) {
        if (arr[j] > arr[j+1]) {
            const temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;

            steps.push(arr.slice());
        }
    }
}

return steps;

}
