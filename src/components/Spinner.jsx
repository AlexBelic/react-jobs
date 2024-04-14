import ClipLoader from "react-spinners/ClipLoader"

const override = {
    display: 'block',
    margin: '10px auto'
}

let color = '#4338ca'

const Spinner = ({ loading }) => {
  return (
    <ClipLoader
              color={ color }
              loading={ loading }
              cssOverride={ override }
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
    />
  )
}

export default Spinner