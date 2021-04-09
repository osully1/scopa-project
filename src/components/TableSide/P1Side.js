import P1Hand from '../PlayerHand/P1Hand'
import Player1Tally from '../PlayerTally/Player1Tally'
import styles from './TableSide.module.css'

const P1Side = (props) => {
    return(
        <>
        <div className={styles.P1Side}>
            <P1Hand
                deckData={props.deckData}
                player1Hand={props.player1Hand}
                p1Tally={props.p1Tally}
                setP1Tally={props.setP1Tally}
                p1Turn={props.p1Turn}
                setP1Turn={props.setP1Turn}
            />
        </div>
        <Player1Tally
            p1Tally={props.p1Tally}
            setP1Tally={props.setP1Tally}
            p1Turn={props.p1Turn}
            setP1Turn={props.setP1Turn}
        />
        </>
    )
}

export default P1Side