import './Card.css'
const Card = (props) => {
    const classes = 'card ' + props.className; 
    return <div className={classes}>{props.children}</div>
}

export default Card;

//  className={classes}  {props.children}