
export default function Meme() {
    return (
        <div className="container">
            <form action="">
                <input type="text" placeholder="Top text" className="form--input"/>
                <input type="text" placeholder="Button text" className="form--input"/>
            </form>
            <button className="meme--button">Get a new meme image  🖼</button>
        </div>
    )
}