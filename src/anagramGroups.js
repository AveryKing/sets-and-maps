/**
 * Return a grouping of words by whether they are anagrams of each other or not
 * @param {array} words to be grouped
 */

function anagramGroups(words) {
    if (!words || words.length === 1) return [];

    const wordMap = new Map();

    for(let word of words) {
        let sortedWord = word.split('').sort().join('');
        if(!wordMap.has(sortedWord)) {
            wordMap.set(sortedWord, [word]);
        } else {
            wordMap.get(sortedWord).push(word);
        }
    }
    
    let mapIterator = wordMap.values();
    let result = [];
    mapIterator.forEach(item => {
        result.push(item);
    })
    console.log(result);
    return result;
}


module.exports = anagramGroups;
