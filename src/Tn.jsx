import './App.css'
function TN(){return(<div id="TrueNature" className="TnCon">
  <img
            src="images/TNimg1.jpg"
            alt=""
            className="TnMainImg"
          />

<div className="TnImgsContainer">

<div className="TnMultiImg">
<img src="images/TnImg3.png"  className="ContainerImg"></img>
</div>
<div className="TnMultiImg">
<img src="images/TnImg2.png"   className="ContainerImg"></img>
</div>
<div className="TnMultiImg">
<img src="images/TnImg1.png"  className="ContainerImg"></img>
</div>


</div>
    <div className="TnInfoBox">
    <h2 >True Nature</h2>
          <p>
          True nature takes you on an epic platform adventure. You will take the
          shoes of Insert Name The hero who is A warrior of the kingdom of
          Insert Name.New darkness now arises from an unknown force consuming
          the light that shun upon, Will you be the light that can’t be consumed
          or will you give the darkness its strength ?
        </p>
        <br></br>
        <a className="btn" href="https://thamgamedevs.itch.io/true-nature-demo" target="_blank">PLAY</a>
    </div>
</div>)
}

export default TN