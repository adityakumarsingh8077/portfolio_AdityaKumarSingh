import "./contact.scss"

const Contact = () => {
  return (
    <div className="contact">
        <div className="textContainer">
            <h1>Let's Word together</h1>
            <div className="item">
                <h2>Mail</h2>
                <span>singhaditya8077@gmail.com</span>
                </div>
            <div className="item">
                <h2>Address</h2>
                <span>Kharar Mohali,Punjab(India)</span>
                </div>
            <div className="item">
                <h2>Phone</h2>
                <span>+12345678</span>
            </div>
        </div>
        <div className="formContainer">
            <form>
                <input type="text" placeholder="Name"/>
                <input type="email" required placeholder="Email"/>
                <textarea rows="5" placeholder="Message"/>
                <button>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact