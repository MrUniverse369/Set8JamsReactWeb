import './App.css'

function GC (){return(<div id="GalacticCrusade" className="GcCon" >

<div className="IframeCon">
 <iframe className="responsive-iframe" width="760" height="515" src="https://www.youtube.com/embed/R-9KaQuCV4w?si=XiKZov-O7NqvHJR3"
  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
   referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
   </div>
 <div className="GcImgsContainer">
        <div className="GcMultiImg">
          <img
              src="images/GcImg2.png"
            alt="SunnySummerPlatformLevel"
            className="ContainerImg"
          />
        </div>

        <div className="GcMultiImg">
          <img
             src="images/GcImg1.png"
            alt="SnowyPlatformLevel"
            className="ContainerImg"
          />
        </div>
  
        <div className="GcMultiImg">
          <img
              src="images/GcImg3.png"
            alt="ColdCavePlatformLevel"
            className="ContainerImg"
          />
        </div>
      </div> 

<div className="GcInfoBox">
<h1>GalacticCrusade</h1>
    <p>
          As humanity's first line of defense your Goal is to stop alien 
          invaders from reaching<br></br> planet earth and conquering. GC is a classic
          shoot 'em up where you use a <br></br>combination of power ups to get the
          highest score as the enemy waves get<br></br> more aggressive and step into the
          cockpit and see what levels you can reach.</p>
          <a className="btn" href="https://thamgamedevs.itch.io/galactic-crusade">PLAY</a>
</div>


</div>


)}

export default GC