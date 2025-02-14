function minPlatforms(arr, dep) {
    //Converting time to numbers here.
    function timeToNum(time) {
        let [hours, minutes] = time.split(':').map(Number);
        return hours + minutes / 100;
    }

    let arrivals = arr.map(timeToNum).sort((a, b) => a - b);
    let departures = dep.map(timeToNum).sort((a, b) => a - b);

    let platforms = 0, maxPlatforms = 0;
    let i = 0, j = 0;

    while (i < arrivals.length) {
        if (arrivals[i] <= departures[j]) {
            platforms++; // Train arrives, need a platform.
            maxPlatforms = Math.max(maxPlatforms, platforms);
            i++;
        } else {
            platforms--; // Train departs, release a platform.
            j++;
        }
    }

    return maxPlatforms;
}


let arr1 = ["9:00", "9:40", "9:50", "11:00", "15:00", "18:00"];
let dep1 = ["9:10", "12:00", "11:20", "11:30", "19:00", "20:00"];
console.log(minPlatforms(arr1, dep1));

let arr2 = ["9:00", "9:40"];
let dep2 = ["9:10", "12:00"];
console.log(minPlatforms(arr2, dep2));
