function solution(numbers) {
    const result = []
    for (number of numbers) {
        let flag = true
        for (let n=3; n<50; n++) {
            const temp = 2**n
            if (number % temp == temp/2-1) {
                result.push(number+temp/4)
                flag = false
                break
            }
        }
        if (flag) result.push(number+1)
    }
    return result
    
    /*
    3 -> 5 (2)
    7 -> 11 (4)
    11 -> 13 (2)
    15 -> 23 (8)
    19 -> 21 (2)
    23 -> 27 (4)
    27 -> 29 (2)
    31 -> 47 (16)
    35 -> 37 (2)
    39 -> 43 (4)
    43 -> 45 (2)
    47 -> 55 (8)
    51 -> 53 (2)
    55 -> 59 (4)
    59 -> 61 (2)
    63 -> 95 (32)
    67 -> 69 (2)
    ...
    
    if (i%8 === 3) v[i] = i+2
    else if (i%16 === 7) v[i] = i+4
    else if (i%32 === 15) v[i] = i+8
    else if (i%64 === 31) v[i] = i+16
    */
}