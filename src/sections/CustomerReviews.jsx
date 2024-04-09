import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

const CustomReviews = () => {
  return (
    <section className="max-container ">
      <h3 className="font-palanquin text-center text-4xl font-bold ">
        <span className="text-blue-700">От команды Алексея Навального  </span>     
      </h3>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
       {reviews.map((review, index) => (
        <ReviewCard 
          key={index}
          imgURL={review.imgURL}
          customerName={review.customerName}
          rating={review.rating}
          feedback={review.feedback}
        />
       ))} 

      </div>
    
    </section>
  )
}

export default CustomReviews