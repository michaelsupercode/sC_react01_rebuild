import trainer from "../data/superCode.json"
console.log(trainer)

const Card = (props) => {
    return (
        <figure>
            <img src={props.img} alt="" />
            <figcaption>
                <h1>{props.name}</h1>
                <p>Alter: {props.age}</p>
            </figcaption>
        </figure>
    )
}
export default Card