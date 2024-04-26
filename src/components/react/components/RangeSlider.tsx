type Props = {
  rangeValue: number
  setRangeValue: React.Dispatch<React.SetStateAction<number>>
  min: number
  max: number
}

const styling = `
  input.rangeSlider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border: 3px solid black;
    border-radius: 50%;
    cursor: pointer;
    background: #fff;
  }
`

export default function RangeSlider({
  rangeValue,
  setRangeValue,
  min,
  max,
}: Props) {
  return (
    <>
      <style>{styling}</style>
      <div className="w-full">
        <label htmlFor="range-slider" className="sr-only">
          Default range
        </label>
        <input
          id="range-slider"
          type="range"
          min={min}
          max={max}
          value={rangeValue}
          onChange={(e) => setRangeValue(+e.target.value)}
          className="rangeSlider h-2 w-full cursor-pointer appearance-none rounded-lg border-2 border-black bg-white"
        />
      </div>
    </>
  )
}
