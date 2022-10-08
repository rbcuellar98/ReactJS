import './Card.css';

function Card (props) {
    // eslint-disable-next-line no-lone-blocks
    {/**received by the classe name is added to that string*/}
    const classes = 'card ' + props.className;
    return (
        <div className = {classes}>{props.children}</div>
    );
}



export default Card;