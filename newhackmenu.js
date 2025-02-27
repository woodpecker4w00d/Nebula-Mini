javascript:(function(){
    if (document.getElementById('customOverlay')) return;
    
    let overlay = document.createElement('div');
    overlay.id = 'customOverlay';
    overlay.style = 'position: fixed; top: 50px; left: 50px; width: 220px; background: rgba(0, 0, 0, 0.8); border-radius: 8px; padding: 15px; box-shadow: 2px 2px 10px rgba(0,0,0,0.5); z-index: 10000; color: white; font-family: Arial, sans-serif;';
    
    let closeButton = document.createElement('button');
    closeButton.innerText = '✖';
    closeButton.style = 'display: block; width: 100%; margin: 5px 0; padding: 8px; border: none; background: red; color: white; border-radius: 5px; cursor: pointer; font-size: 14px;';
    closeButton.onclick = () => document.body.removeChild(overlay);
    overlay.appendChild(closeButton);
    
    let buttonList = [
        { label: 'Edit Page ON', action: () => { document.body.contentEditable = 'true'; document.designMode = 'on'; } },
        { label: 'Edit Page OFF', action: () => { document.body.contentEditable = 'false'; document.designMode = 'off'; } },
        { label: 'Spaceship Game', action: () => { let s = document.createElement('script'); s.src = 'https://hi.kickassapp.com/kickass.js'; document.body.appendChild(s); } },
        { label: 'Tab Close Blocker', action: () => { window.onbeforeunload = () => 'Are you sure you want to leave?'; } },
        { label: 'Custom Tab Name/Logo', action: () => { document.title=prompt('Tab Cloak\n\nEnter new Tab Title:'); var icon=document.querySelector('link[rel="icon"]'); switch(prompt('Choose new tab icon:\n\n[1] Google Search\n[2] Google Drive\n[3] Custom URL')){case'1':icon.setAttribute('href','https://www.google.com/favicon.ico');break;case'2':icon.setAttribute('href','https://ssl.gstatic.com/images/branding/product/2x/hh_drive_96dp.png');break;case'3':icon.setAttribute('href',prompt('Enter Custom Tab Icon URL:'))} } },
        { label: 'PAIN', action: () => { function a(e){var n=e.childNodes;for(var i in n){a(n[i]);if(n[i].style) n[i].style.backgroundImage='url(https://i.chzbgr.com/full/5759452672/h934FBF16/my-eyes-my-eyessssssssss)';}} a(document); } },
        { label: 'Shrekify', action: () => { let s = document.createElement('script'); s.src = 'https://raw.githubusercontent.com/woodpecker4w00d/Nebula-Mini/refs/heads/main/shrekify.js'; document.body.appendChild(s); } },
        { label: 'Screen Spin', action: () => { document.documentElement.style.transitionDuration='60s'; document.documentElement.style.transitionTimingFunction='ease-in'; document.documentElement.style.transform='rotate(360000deg)'; } },
        { label: 'Drug Screen', action: () => { setInterval(() => { document.body.style.filter = 'hue-rotate('+Math.random()*360+'deg)'; }, 500); } },
        { label: 'Autoclicker', action: () => { let s=document.createElement('script'); s.src='https://raw.githubusercontent.com/woodpecker4w00d/Nebula-Mini/main/autoclicker.js'; document.body.appendChild(s); } },
        { label: '3D Webpage', action: () => { let s = document.createElement('script'); s.src = 'http://www.websiteasteroids.com/asteroids.min.js'; document.body.appendChild(s); } },
        { label: 'Infinite Tabs', action: () => { alert('Use at your own risk.'); setInterval(() => { window.open('https://water.com'); }, 1000); } },
        { label: 'Annoying Ahh', action: () => { setInterval(() => { alert('POOPY'); }, 1000); } },
        { label: 'Move Anything', action: () => { /*dragon*/var b=X=Y=T=L=0;document.addEventListener("click",function(a){a.preventDefault()},!0);document.addEventListener("mousedown",c);document.addEventListener("touchstart",c);function c(a){a.preventDefault();a.target!==document.documentElement&&a.target!==document.body&&(b=Date.now(),a.target.setAttribute("data-drag",b),a.target.style.position="relative",T=a.target.style.top.split("px")[0]||0,L=a.target.style.left.split("px")[0]||0);X=a.clientX||a.touches[0].clientX;Y=a.clientY||a.touches[0].clientY}document.addEventListener("mousemove",d);document.addEventListener("touchmove",d);function d(a){if(""!==b){var e=document.querySelector('[data-drag="'+b+'"]');e.style.top=parseInt(T)+parseInt((a.clientY||a.touches[0].clientY)-Y)+"px";e.style.left=parseInt(L)+parseInt((a.clientX||a.touches[0].clientX)-X)+"px"}}document.addEventListener("mouseup",f);document.addEventListener("touchend",f);function f(){b=""}document.addEventListener("mouseover",g);function g(a){a.target.style.cursor="move";a.target.style.boxShadow="inset lime 0 0 1px,lime 0 0 1px"}document.addEventListener("mouseout",h);function h(a){a.target.style.cursor=a.target.style.boxShadow=""}; } }
        
    ];
    
    buttonList.forEach(btn => {
        let button = document.createElement('button');
        button.innerText = btn.label;
        button.style = 'display: block; width: 100%; margin: 5px 0; padding: 8px; border: none; background: #333; color: white; border-radius: 5px; cursor: pointer; font-size: 14px; transition: background 0.3s;';
        button.onmouseover = () => button.style.background = '#555';
        button.onmouseout = () => button.style.background = '#333';
        button.onclick = btn.action;
        overlay.appendChild(button);
    });
    
    document.body.appendChild(overlay);
    
    let offsetX, offsetY, isDragging = false;
    overlay.onmousedown = function(e) {
        isDragging = true;
        offsetX = e.clientX - overlay.offsetLeft;
        offsetY = e.clientY - overlay.offsetTop;
    };
    document.onmousemove = function(e) {
        if (isDragging) {
            overlay.style.left = e.clientX - offsetX + 'px';
            overlay.style.top = e.clientY - offsetY + 'px';
        }
    };
    document.onmouseup = () => isDragging = false;
})();
