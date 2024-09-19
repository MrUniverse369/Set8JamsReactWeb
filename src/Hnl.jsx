import './App.css'


function Hnl (){
    return(<>
    <div className="HnlCon">
        <div id='Hnl'>
          <img src="images/HNLimg2.png" alt="2d platform view of harvey exploring a temple" className="HnlImg"></img>
        </div>
      <div className="HnlImgsContainer">
        <div className="HnlMultiImg">
          <img
             src="images/HNLimg2.png"
            alt="harvey exploring a secition of the tomb"
            className="ContainerImg"
          />
        </div>

        <div className="HnlMultiImg">
          <img
            src="images/HNLimg1.png"
            alt="harvey exploring a secition of the tomb"
            className="ContainerImg"
          />
        </div>
  
        <div className="HnlMultiImg">
          <img
          src="images/HNLimg3.png"
            alt="harvey exploring a secition of the tomb"
            className="ContainerImg"
          />
        </div>
      </div> 
      <div>
          <div className="HnlInfoBox">
            <h2> Harvey's Nine Lives </h2>
            <p>
              Embark on a thrilling archaeological adventure as a nimble feline explorer with a penchant for all things shiny. 
              Navigate through <br></br> ancient tombs brimming with traps and mysterious artifacts, each guarded by intricate mechanisms
              and perilous obstacles. <br></br> Your mission is to uncover hidden treasures, but be wary of the cursed elements that protect these precious items.
           </p>
           <br></br>
           <a className="btn" href="https://thamgamedevs.itch.io/haveys-nine-lives-feb16">PLAY</a>
          </div>
        </div>
      </div>
      </>)
}


export default Hnl