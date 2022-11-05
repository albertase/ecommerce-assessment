import React, {useState} from 'react'

const ButtonSize = () => {
  const [size, setSize] = useState(false);
  const [size2, setSize2] = useState(false);
  const [size3, setSize3] = useState(false);
  const [size4, setSize4] = useState(false);


  const handleSize1 = () => {
    setSize(true)
  }

  const handleSize2 = () => {
    setSize2(true)
  }

  const handleSize3 = () => {
    setSize3(true)
  }

  const handleSize4 = () => {
    setSize4(true)
  }
  return (
    <div>
        <h3 className="sizes-text">Sizes</h3>
          <div className="sizes">
            <button className={`${size && 'size-active'}`} onClick={handleSize1}>XM</button>
            <button className={`${size2 && 'size-active'}`} onClick={handleSize2}>S</button>
            <button className={`${size3 && 'size-active'}`} onClick={handleSize3}>M</button>
            <button className={`${size4 && 'size-active'}`} onClick={handleSize4}>L</button>
          </div>
    </div>
  )
}

export default ButtonSize