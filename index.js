

window.onload=function(){
    const toggle = document.getElementById('toggleDark');
    toggle.addEventListener('click', function(){
        this.classList.toggle('bi-moon');
        console.log(this.classList)
        if(this.classList.contains('bi-moon')){
            console.log("working")
            

            document.documentElement.style.setProperty('--bg','#e2d1f9')
            document.documentElement.style.setProperty('--nav','#317773')
            document.documentElement.style.setProperty('--txt','#555')
            document.documentElement.style.setProperty('--nav-d','#125f5c')
            document.documentElement.style.setProperty('--bd-d','#cbbce0')
            document.documentElement.style.setProperty('--nav--dd','#072422')
            document.documentElement.style.setProperty('--bgd','#fff')
            document.documentElement.style.setProperty('--ib','#73429e')
            document.documentElement.style.setProperty('--i1','#73429eb3')
            document.documentElement.style.setProperty('--i2','#715988')
            document.documentElement.style.setProperty('--form','#fff')
        }else{
            document.documentElement.style.setProperty('--bg','#317773')
            document.documentElement.style.setProperty('--nav','#e2d1f9')
            document.documentElement.style.setProperty('--txt','#e4e2e2')
            document.documentElement.style.setProperty('--nav-d','#cbbce0')
            document.documentElement.style.setProperty('--bd-d','#125f5c')
            document.documentElement.style.setProperty('--nav--dd','#6a5387')
            document.documentElement.style.setProperty('--bgd','rgb(41, 40, 40)')
            document.documentElement.style.setProperty('--ib','#4e9490')
            document.documentElement.style.setProperty('--i1','#4e9490e3')
            document.documentElement.style.setProperty('--i2','#52aeabe8')
            document.documentElement.style.setProperty('--form','#0b3937')
        }
    })
}



// --bg: #e2d1f9;
// --nav: #317773;
// --txt: #555;
// --nav-d: #125f5c;
// --bd-d: #cbbce0;
// --nav--dd: #072422;
// --bgd: #fff;

// --ib:#73429e ;
// --i1: #73429eb3;
// --i2: #715988;