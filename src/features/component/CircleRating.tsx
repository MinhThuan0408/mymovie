
interface IProps {
  rating?: number,
  position?: string
}

const CircleRating = (props: IProps) => {
  const { rating, position } = props
  return (
    <div className={`circle percentage-${rating} ${position} ${rating! > 70 ? 'green' : 'yellow'}`}>
      <span>{rating}%</span>
      <div className="percentage-bar"></div>
    </div>
  )
}
export default CircleRating