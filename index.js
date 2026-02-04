var weather = prompt (`select your favourite season?
    1:WINTER
2:SUMMER
3:AUTUMN
4:SPRING
5:MONSOON
6.Snowy
7.Thunderstorm`).toLowerCase();

//summer//
if(weather==="summer"){
    document.writeln(`
<div class="summer-season d-flex align-items-center justify-content-center" style="height: 100vh;overflow: hidden;
width: 100vw;background-image: url(./images/summer-season-background.jpg);background-repeat: no-repeat;background-size: cover;">
    
<div class="card animate__animated animate__backInLeft" style="width:300px;height: 300px;">
  <img src="./images/summer-.gif" class="card-img-top" alt="summer card">
  <div class="card-body " style="background: #fd551d;
background: linear-gradient(90deg, rgba(253, 85, 29, 1) 0%, rgba(252, 176, 69, 1) 100%);">
    <h1 class="card-text text-light" >SUMMER SEASON</h1>
  </div>
</div>
    </div>
 `);
}
else if(weather==="winter"){
        document.writeln(`
<div class="winter-season d-flex align-items-center justify-content-center" style="height: 100vh;overflow: hidden;
width: 100vw;background-image: url(./images/winter-season-backgroundimage.jpg);background-repeat: no-repeat;background-size: cover;">
    
<div class="card animate__animated animate__backInLeft" style="width:300px;height:300px;">
  <img src="./images/winter-season.gif" class="card-img-top" alt="winter card">

  </div>
</div>
    </div>
 `);
}
else if(weather==="autumn"){
    document.writeln(`<div class="winter-season d-flex align-items-center justify-content-center" style="height: 100vh;overflow: hidden;
width: 100vw;background-image: url(./images/autumn-season-backgrounimage.jpg);background-repeat: no-repeat;background-size: cover;">
    
<div class="card animate__animated animate__backInLeft" style="width:300px;height:300px;">
  <img src="./images/fall.gif" class="card-img-top" alt="winter card">

  </div>
</div>
    </div>`)
}
else if(weather==="spring"){
document.writeln(`<div class="winter-season d-flex align-items-center justify-content-center" style="height: 100vh;overflow: hidden;
width: 100vw;background-image: url(./images/spring-season-background.jpg);background-repeat: no-repeat;background-size: cover;">
    
<div class="card animate__animated animate__backInLeft" style="width:300px;height:300px;">
  <img src="./images/spring.gif" class="card-img-top" alt="winter card">

  </div>
</div>
    </div>`)
}
else if(weather==="monsoon"){
    document.writeln(`
    <div class="winter-season d-flex align-items-center justify-content-center" style="height: 100vh;overflow: hidden;
width: 100vw;background-image: url(./images/moonsoon-season-backgroundimage.jpg);background-repeat: no-repeat;background-size: cover;">
    
<div class="card animate__animated animate__backInLeft" style="width:300px;height:300px;">
  <img src="./images/monsoon.jpg" class="card-img-top" alt="winter card">

  </div>
</div>
    </div>`)

}
else if(weather==="snowy"){
    document.writeln(`<div class="winter-season d-flex align-items-center justify-content-center" style="height: 100vh;overflow: hidden;
width: 100vw;background-image: url(./images/snow-season-backgroundimage.jpg);background-repeat: no-repeat;background-size: cover;">
    
<div class="card animate__animated animate__backInLeft" style="width:300px;height:300px;">
  <img src="./images/snowy.gif" class="card-img-top" alt="winter card">

  </div>
</div>
    </div>`)
}
else if(weather==="Thunderstorm"){
    document.writeln(`<div class="winter-season d-flex align-items-center justify-content-center" style="height: 100vh;overflow: hidden;
width: 100vw;background-image: url(./images/thunderstorm-season-backgroundimages.jpg);background-repeat: no-repeat;background-size: cover;">
    
<div class="card animate__animated animate__backInLeft" style="width:300px;height:300px;">
  <img src="./images/thunderstorm.jpg" class="card-img-top" alt="winter card">

  </div>
</div>
    </div>
`)
}
else{
    document.writeln(`
        <div class="winter-season d-flex align-items-center justify-content-center" style="height: 100vh;overflow: hidden;
width: 100vw;background-image: url(./images/emogy.jpg);background-repeat: no-repeat;background-size:100% 100%;background-position:center;">
    
<div class="card animate__animated animate__backInLeft" style="width:300px;height:300px;">
  <img src="./images/emogy-gif.gif" class="card-img-top" alt="winter card">

  </div>
</div>
    </div>
`)
}