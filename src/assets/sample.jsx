export const Sample = ({ url, height, width, text, ...props }) => {
  return (
    <img
    // style={{backgroundColor:"#DCF5FF"}}
      src={url || `https://via.placeholder.com/${width}x${height}?text=${text}`}
      alt="course image"
      // height={height || 'auto'}
      // width={'100%'}
      {...props}
    />
  )
}
