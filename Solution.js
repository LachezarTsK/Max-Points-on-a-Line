
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
    if (points.length <= 2) {
        return points.length;
    }

    let maxPointsOnLine = 0;
    for (let indexFirstPoint = 0; indexFirstPoint < points.length; ++indexFirstPoint) {
        const slopeFrequency = new Map();// Map<number, number>

        for (let indexSecondPoint = 0; indexSecondPoint < points.length; ++indexSecondPoint) {
            if (indexFirstPoint !== indexSecondPoint) {
                let slope = calculateLineSlope(points[indexFirstPoint], points[indexSecondPoint]);
                slopeFrequency.set(slope, (slopeFrequency.get(slope) ? slopeFrequency.get(slope) : 1) + 1);
                maxPointsOnLine = Math.max(maxPointsOnLine, slopeFrequency.get(slope));
            }
        }

    }

    return maxPointsOnLine;
};


/**
 * @param {number[][]} firstPoint
 * @param {number[][]} secondPoint
 * @return {number}
 */
function  calculateLineSlope(firstPoint, secondPoint) {
    if (firstPoint[0] === secondPoint[0]) {
        return Number.POSITIVE_INFINITY;
    }
    return (firstPoint[1] - secondPoint[1]) / (firstPoint[0] - secondPoint[0]);
}
