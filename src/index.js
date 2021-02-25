
exports.min = function min (array) {
   if (!array || array.length===0) {
        return 0
    } else {
    let m=array[0]
    for (let item of array) {
        if (m > item) {
            m = item
        }
    }
        return m
    }
}

exports.max = function max (array) {
  if (!array || array.length===0) {
        return 0
    } else {
        let m=array[0]
        for (let item of array) {
            if (m < item) {
                m = item
            }
        }
        return m}
}

exports.avg = function avg (array) {
  if (!array || array.length===0) {
        return 0
  } else {
    let sum = 0 
        for (let item of array) {
            sum+=item
        }
    return sum / array.length
  }
}


