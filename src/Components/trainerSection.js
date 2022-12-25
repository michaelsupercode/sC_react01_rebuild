import Card from "./trainerCard"
import superCode from "../data/superCode.json"

const TrainerSection = () => {
    return ( 
<section >
<h2>Supertrainer</h2>
         {
            superCode.map((singleTrainer) =>
                <
                Card name = { singleTrainer.name }
                age = { singleTrainer.age }
                img = { singleTrainer.img }
                />
            )
        } 
</section>
    )
}

export default TrainerSection