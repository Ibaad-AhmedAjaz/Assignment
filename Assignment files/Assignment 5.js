function byValue(inputMap) {
    
    const sortedMap = new Map([...inputMap.entries()].sort((a, b) => a[1].localeCompare(b[1])));

    
    let output = "Map: {";
    output += [...sortedMap].map(([key, value]) => `${key}=${value}`).join(", ");
    output += "}";

    console.log(output);
}


const inputMap = new Map([
    [101, "John Doe"],
    [102, "Jane Smith"],
    [103, "Peter Johnson"]
]);

byValue(inputMap);
