
import java.util.HashMap;
import java.util.Map;

public class Solution {

    public int maxPoints(int[][] points) {
        if (points.length <= 2) {
            return points.length;
        }

        int maxPointsOnLine = 0;
        for (int indexFirstPoint = 0; indexFirstPoint < points.length; ++indexFirstPoint) {
            Map<Double, Integer> slopeFrequency = new HashMap<>();

            for (int indexSecondPoint = 0; indexSecondPoint < points.length; ++indexSecondPoint) {
                if (indexFirstPoint != indexSecondPoint) {
                    double slope = calculateLineSlope(points[indexFirstPoint], points[indexSecondPoint]);
                    slopeFrequency.put(slope, slopeFrequency.getOrDefault(slope, 1) + 1);
                    maxPointsOnLine = Math.max(maxPointsOnLine, slopeFrequency.get(slope));
                }
            }
        }

        return maxPointsOnLine;
    }

    private double calculateLineSlope(int[] firstPoint, int[] secondPoint) {
        if (firstPoint[0] == secondPoint[0]) {
            return Double.POSITIVE_INFINITY;
        }
        return ((double) firstPoint[1] - secondPoint[1]) / (firstPoint[0] - secondPoint[0]);
    }
}
