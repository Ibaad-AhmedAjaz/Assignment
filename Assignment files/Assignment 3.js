function colorSorting(arr) {
    let low = 0, mid = 0, high = arr.length - 1;

    while (mid <= high) {
        if (arr[mid] === 'B') {
            
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
        } else if (arr[mid] === 'G') {
            
            mid++;
        } else if (arr[mid] === 'R') {
            
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }

    return arr;
}


const input = ['R', 'G', 'B', 'G', 'G', 'R', 'B', 'B', 'G'];
const sortedArray = colorSorting(input);
console.log(`[${sortedArray.join(',')}]`);

