import React from "react";
import { StyleSheet, View, Image, ViewStyle, ImageProps } from "react-native";

const styles = StyleSheet.create({
  container: {},
});

interface IProps extends Omit<ImageProps, "source"> {
  imageUrl: string;
  alt?: string;
  fixedDimension?: "width" | "height";
  containerStyle?: ViewStyle;
}

const FlexImage: React.FC<IProps> = ({
  imageUrl,
  alt,
  fixedDimension = "width",
  containerStyle = {},
  accessibilityRole = "image",
  accessible = true,
  accessibilityLabel,
}) => {
  const [fixedDimensionLength, setFixedDimensionLength] = React.useState(0);
  const [widthHeightRatio, setwidthHeightRatio] = React.useState(1);
  const [isError, setIsError] = React.useState(false);
  const [dimensionsLoading, setDimensionsLoading] = React.useState(true);
  const imageStyleMap = {
    width: {
      width: fixedDimensionLength,
      height: fixedDimensionLength / widthHeightRatio,
    },
    height: {
      height: fixedDimensionLength,
      width: fixedDimensionLength * widthHeightRatio,
    },
  };

  React.useEffect(() => {
    Image.getSize(
      imageUrl,
      (width, height) => {
        setwidthHeightRatio(width / height);
        setDimensionsLoading(false);
      },
      (error) => {
        console.log(error);
        setIsError(true);
        setDimensionsLoading(false);
      }
    );
  }, [imageUrl]);

  return (
    <View
      style={[
        styles.container,
        containerStyle,
        fixedDimension === "width" ? { flex: 1 } : { alignSelf: "stretch" },
      ]}
      onLayout={(event) =>
        setFixedDimensionLength(event.nativeEvent.layout[fixedDimension])
      }
    >
      {!isError && !dimensionsLoading && (
        <Image
          accessible={accessible}
          accessibilityRole={accessibilityRole}
          accessibilityLabel={alt || accessibilityLabel}
          source={{ uri: imageUrl }}
          style={imageStyleMap[fixedDimension]}
          onError={() => setIsError(true)}
        />
      )}
    </View>
  );
};

export default FlexImage;
