import "./hero.scss"

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h2>Aditya Kumar Singh</h2>
          <h1>Web developer and UI designer</h1>
          <div className="buttons">
            <button>See the Latest Works</button>
            <button>Contack Me</button>
          </div>
          <img src="/scroll.png" alt="" />
      </div>
     </div>
        <div className="imageContainer">
            <img src="/my3.png" alt="" />
        </div>
    </div>
  )
}

export default Hero