
#include <vector>
#include <numeric>
#include <unordered_map>
using namespace std;

class Solution {
    
public:
    int maxPoints(const vector<vector<int>>& points) const {
        if (points.size() <= 2) {
            return points.size();
        }

        int maxPointsOnLine = 0;
        for (size_t indexFirstPoint = 0; indexFirstPoint < points.size(); ++indexFirstPoint) {
            unordered_map<double, int> slopeFrequency;

            for (size_t indexSecondPoint = 0; indexSecondPoint < points.size(); ++indexSecondPoint) {
                if (indexFirstPoint != indexSecondPoint) {
                    double slope = calculateLineSlope(points[indexFirstPoint], points[indexSecondPoint]);
                    ++slopeFrequency[slope];
                    maxPointsOnLine = max(maxPointsOnLine, slopeFrequency[slope] + 1);
                }
            }
        }

        return maxPointsOnLine;
    }

private:
    double calculateLineSlope(const vector<int>& firstPoint, const vector<int>& secondPoint) const {
        if (firstPoint[0] == secondPoint[0]) {
            return INFINITY;
        }
        return (static_cast<double> (firstPoint[1]) - secondPoint[1]) / (firstPoint[0] - secondPoint[0]);
    }
};
