

let letterCount = function (paragraph) {
    let splitArray = paragraph.split('')
    let uniqueObj = {}

    for (let i = 0; i < splitArray.length; i++) {

        if (!uniqueObj[splitArray[i]]) {
            uniqueObj[splitArray[i]] = 1
        } else {
            uniqueObj[splitArray[i]]++
        }
    }

    return uniqueObj
}

