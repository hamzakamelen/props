function CardComponent(prop){

    return(
        <div id="all">
            <img src={prop.info.image} />
            <h3>{prop.info.title}</h3>
            <h4>Rs: {prop.info.price}</h4>
        </div>
    )
}
export default CardComponent