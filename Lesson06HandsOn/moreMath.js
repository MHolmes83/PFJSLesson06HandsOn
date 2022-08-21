exports.average = function(x, y, z) {
    return (x + y + z) / 3;
};

exports.smallest = function(x, y, z) {
    if (x < y && x < z) {
        return x;
    } else if (y < x && y < z) {
        return y;
    } else
    {
        return z;
    }
};

exports.isEven = function(x, y, z) {
    let allEven = [];
    if (x % 2 == 0) {
        allEven.push(x);        
    }
    if (y % 2 == 0) {
        allEven.push(y);        
    }
    if (z % 2 == 0) {
        allEven.push(z); 
    }
    return allEven;
};