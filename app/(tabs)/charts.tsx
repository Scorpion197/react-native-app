import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Circle, Svg, Path } from "react-native-svg";
import { styles } from "../../styles/ChartStyle";
const ChartsScreen = () => {
  const [heartRate] = useState(78);
  const [isMonitoring, setIsMonitoring] = useState(false);

  const toggleMonitoring = () => {
    setIsMonitoring(!isMonitoring);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Heart Rate Monitor</Text>
      <Text style={styles.subHeader}>Tap the circle to start / stop</Text>

      <TouchableOpacity
        style={styles.circleContainer}
        onPress={toggleMonitoring}
      >
        <Svg height="200" width="200">
          <Circle
            cx="100"
            cy="100"
            r="90"
            stroke="#FF6B6B"
            strokeWidth="5"
            fill="none"
          />
        </Svg>
        <Text style={styles.heartRateText}>{heartRate}</Text>
        <Text style={styles.bpmText}>BPM</Text>
      </TouchableOpacity>

      <View style={styles.waveformContainer}>
        <Svg height="50" width="200">
          <Path
            d="M0 25 Q 25 10 50 25 T100 25 T150 25 T200 25"
            stroke="#FF6B6B"
            strokeWidth="3"
            fill="none"
          />
        </Svg>
      </View>
    </View>
  );
};

export default ChartsScreen;
