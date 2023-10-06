import ImageCard from './ImageCard'

const ImageList = ({ images }) => {
  // console.log(images)
  if (!images) {
    return <h3>No images found...</h3>
  }
  return (
    <>
      <div className='images-list'>
        {images.map((item) => {
          return <ImageCard key={item.id} item={item} />
        })}
      </div>
    </>
  )
}
export default ImageList
