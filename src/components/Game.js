import './Game.css';

const Game = (verifyLetter,pickedword,pickedCategory,letters,guessedLetters,wrongLetters,guesses,score) => {
  return (
<div className ="game">
      <p className="points">
          <span>Pontuacao: {score}</span>
      </p>
      <h1>Advinhe a palavra:</h1>
      <h3 className="tip">
          Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Voce ainda tem {guesses} tentativas(s).</p>
      <div className="wordContainer">
            {letters.map((letter,i)=>
              guessedLetters.includes(letter) ? (
              <span key={i} className="letter">
              {letter}
              </span>    
              ):(
            <span key={i} className="blankSquare"></span>
              )
          )}


      </div>
      <div className="letterContainer">
        <p>Tente advinhar a letra da palavra:</p>
        <form>
          <input type="text"name="letter" maxLength="1"required/>
          <button>JOGAR!</button>
        </form>

      </div>
      <div className="wrongLettersContainer">
        <p>Letras ja utilizadas:</p>
        {wrongLetters.map((letter,i)=>(
          <span key={i}>{letter}, </span>
        ))}
    
          </div>
</div>
  )
}

export default Game