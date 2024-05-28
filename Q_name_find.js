var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

function longestName(names) {
    return names.reduce((longest, cur) => cur.length > longest.length ? cur : longest, '');
}

console.log(longestName(friends)); 