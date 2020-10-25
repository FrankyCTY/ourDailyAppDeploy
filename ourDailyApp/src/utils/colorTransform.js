const ColorTransform = {};

ColorTransform.hexToRgb = (hex) => {
        if (!hex || hex === undefined || hex === '') {
            return undefined;
          }
      
          const result =
                /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      
          return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
          } : undefined;
    }

ColorTransform.rgbToYIQ = ({r, g, b}) => {
        return ((r * 299) + (g * 587) + (b * 114)) / 1000;
    }

ColorTransform.contrast = (colorHex, threshold = 128) => {
        if (colorHex === undefined) {
          return '#fff';
        }
    
        const rgb = ColorTransform.hexToRgb(colorHex);
        console.log({rgb: ColorTransform.hexToRgb(colorHex)})
    
        if (rgb === undefined) {
          return '#fff';
        }

        console.log({YIQ: ColorTransform.rgbToYIQ(rgb)})
    
        return ColorTransform.rgbToYIQ(rgb) >= threshold ? '#fff' : '#000';
}

export default ColorTransform;

