// code your solution here
function superbowlWin(record) {
    for (const result of record) {
        console.log(result)

        if (result.result === "W") {
            return (result.year);
        }
    }
}

record.find(superbowlWin);