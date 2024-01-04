function Header (){
    return(
        <div>'
            <div style={{textAlign:"center" , display:"flex",flexDirection:"column", alignItem:"center" }}>
             <h1 style={{backgroundColor:"black", color:"white", fontSize:"40px" ,padding:"10px, 10px"}}>Warriors </h1>
              <h1 >Where Fitness Meets Fun and Results Are Achieved</h1>
              <p >Include an inspiring image or video that showcases your gym's energetic atmosphere, trainers, or members working out.</p>
              <div>

              </div>

           </div>
            <hr></hr>
            <hr></hr>
           <div style={{display:"grid", gridTemplate:"1fr 1fr 1fr / 1fr 1fr 1fr 1fr", gap:"25px", margin:"25px 75px"}}>
 
             <img style={{gridArea:"1 / 1 / 2 / 2", width:"100%", height:"100%"}} src="https://www.pixelstalk.net/wp-content/uploads/images6/Fitness-Desktop-Wallpaper.jpg" alt="img"/>
             <img style={{gridArea:"1 / 2  / 2 / 3", width:"100%", height:"100%" }} src="https://cutewallpaper.org/22/gym-lover-wallpapers/6000-c1f9d-best-3cce6-gym-d37e7-photos-249ba-%C2%B7-29648-100-5256b-free-b647c-download-844b8-%C2%B7---pexels---stock---photos.jpeg" alt="img"/>
             <img style={{gridArea:"1 / 3 / 3 / 5", width:"100%", height:"100%"}} src="https://wallpaperaccess.com/full/1087621.jpg" alt="img"/>            
             <img style={{gridArea:"2 / 1 / 4 / 3", width:"100%", height:"100%"}} src="https://i.ytimg.com/vi/gey73xiS8F4/maxresdefault.jpg" alt="img"/>
             <img style={{gridArea:"3 / 3 / 4 / 4", width:"100%", height:"100%"}} src="https://wallpapercave.com/wp/wp6331008.jpg" alt="img"/>
             <img style={{gridArea:"3 / 4 / 4 / 5", width:"100%", height:"100%"}} src="https://img.freepik.com/premium-photo/woman-training-gym_946657-755.jpg" alt="img"/>

           </div>


        </div>
    )
}

export default Header;