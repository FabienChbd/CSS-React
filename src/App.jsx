import './style.scss';


function App() {

  return (
    <div className="app">
      <h1>MON PORTFOLIO</h1>
      <div className="card">
        <div className="title">
          <h2>Mon premier site</h2>
        </div>
        <p>Vous trouverez ici mon premier site, qui je l'espère précédera de nombreux autres...</p>
        <a className="link" href="#">Lien vers le site</a>
        <div className='rating'><p>Votre avis :<br />
          <span className="star">☆</span><span className="star">☆</span><span className="star">☆</span><span className="star">☆</span><span className="star">☆</span></p></div>
      </div>
    </div >
  )
}

export default App
