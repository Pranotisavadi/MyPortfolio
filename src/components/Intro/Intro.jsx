import "./Intro.css"

const Intro  = () => {
    return ( 
        <div className="intro">
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h2 className="intro-greeting">Hi, I am</h2>
                    <h1 className="intro-name">Pranoti.</h1>
                        <div className="intro-title">
                            <div className="intro-title-wrapper">
                                <div className="intro-title-item">Web developer</div>
                                <div className="intro-title-item">Qulaity Engineer</div>
                                <div className="intro-title-item">Photographer</div>
                                <div className="intro-title-item">Content Developer</div>
                                <div className="intro-title-item">UI/UX designer</div>
                            </div>
                        </div>
                        <div className="intro-description">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus nobis necessitatibus nemo sequi ducimus animi ea fugiat minus ullam impedit maiores, in fuga tempore voluptas minima, laboriosam debitis itaque eaque.
                        </div>
                </div>
            </div>
            <div className="intro-right">Right</div>
        </div>
     );
}
 
export default Intro;