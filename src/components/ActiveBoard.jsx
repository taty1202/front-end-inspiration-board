import Card from './Card'
import PropTypes from 'prop-types'
// import './Card.css'
import './ActiveBoard.css'

  const ActiveBoard = (props) => {
    console.log('line 7 active board props:',props)
    const getActiveBoardCards = (cards) => {
      return cards.map((card) => {
        return (
            <Card
              key={card.id}
              id={card.id}
              boardId={props.ActiveBoard.id}
              owner={card.owner}
              message={card.message}
              likesCount={card.likesCount}
              handleDeleteCard={props.handleDeleteCard}
              handleLikeCard={props.handleLikeCard}
              handleEditCard={props.handleEditCard}
            />
        );
      });
  };
  return <section className ="active-board-container">
    <h1 className ="active-board-name">{props.ActiveBoard.title}</h1>
    <h3 className ="active-board-author"> {props.ActiveBoard.owner}</h3> 
    <ul className="ab-card-container">{getActiveBoardCards(props.ActiveBoard.cards)}</ul>
  </section>
  }


  ActiveBoard.propTypes= {
    ActiveBoard: PropTypes.shape({
      cards: PropTypes.arrayOf(
        PropTypes.shape({
          boardId: PropTypes.number.isRequired,
          id:PropTypes.number.isRequired,
          message: PropTypes.string.isRequired,
          likesCount: PropTypes.number.isRequired,
      }).isRequired,).isRequired,
      id: PropTypes.number.isRequired,
      owner: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
    handleDeleteCard: PropTypes.func.isRequired,
    handleLikeCard: PropTypes.func.isRequired,
    handleEditCard: PropTypes.func.isRequired,
    }
    
  export default ActiveBoard