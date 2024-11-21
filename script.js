(function() {
    var button = document.createElement('button');
    button.style.position = 'fixed';
    button.style.top = '0px';
    button.style.left = '0px';
    button.style.zIndex = '1000';
    button.style.color = 'white';
    button.style.background = 'black';
    button.style.opacity = '0.5';
    button.innerHTML = '≡';
    document.body.appendChild(button);
    var overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0px';
    overlay.style.left = '0px';
    overlay.style.width = '600px';
    overlay.style.height = '600px';
    overlay.style.background = 'white';
    overlay.style.border = '1px solid black';
    overlay.style.zIndex = '1000';
    overlay.style.display = 'none';
    document.body.appendChild(overlay);
    var navbar = document.createElement('div');
    navbar.style.width = '599px';
    navbar.style.height = '30px';
    navbar.style.background = 'gray';
    navbar.style.padding = '0px';
    navbar.innerHTML = 'Nebula Mini';
    navbar.style.color = 'white';
    overlay.appendChild(navbar);
    var closeButton = document.createElement('button');
    closeButton.innerHTML = 'Close';
    closeButton.style.float = 'right';
    closeButton.style.background = '#000C84FF';
    closeButton.style.color = 'white';
    closeButton.onclick = function() {
      overlay.style.display = 'none';
      button.style.display = 'block';
    };
    navbar.appendChild(closeButton);

    var hackButton=document.createElement('button');
hackButton.innerHTML='Hack Menu';
hackButton.style.background = '#000C84FF';
hackButton.style.color = 'white';
hackButton.style.float='right';
hackButton.style.marginRight='10px';
hackButton.onclick=function(){
  javascript: (function () {
    var overlay = document.createElement("div");
    overlay.style.position = "absolute";
    overlay.style.top = "50%";
    overlay.style.left = "50%";
    overlay.style.transform = "translate(-50%,-50%)";
    overlay.style.width = "130px";
    overlay.style.height = "500px";
    overlay.style.background = "#4D4D4DFF";
    overlay.style.color = "white";
    overlay.style.border = "1px solid #ccc";
    overlay.style.borderRadius = "5px";
    overlay.style.padding = "30px";
    overlay.style.overflow = "auto";
    overlay.style.zIndex = "1000";
    var navbar = document.createElement("div");
    navbar.style.position = "absolute";
    navbar.style.top = "0";
    navbar.style.left = "0";
    navbar.style.width = "100%";
    navbar.style.height = "30px";
    navbar.style.background = "black";
    navbar.style.color = "white";
    navbar.style.padding = "5px";
    navbar.style.textAlign = "center";
    var closeButton = document.createElement("button");
    closeButton.textContent = "Hide Menu";
    closeButton.style.cursor = "pointer";
    closeButton.style.backgroundColor = "#1A0E87FF";
    closeButton.style.color = "white";
    closeButton.onclick = function () {
        overlay.style.display = "none";
    };
    navbar.appendChild(closeButton);
    overlay.appendChild(navbar);
    var buttonList = document.createElement("div");
    buttonList.style.padding = "20px";
    var buttons = [
        { text: "Edit Page ON", bookmarklet: "javascript:document.body.contentEditable = 'true'; document.designMode='on'; void 0" },
        { text: "Edit Page OFF", bookmarklet: "javascript:document.body.contentEditable = 'false'; document.designMode='off'; void 0" },
        { text: "No Tab Close", bookmarklet: "javascript:(function () {window.onbeforeunload = function() { return 1; };})()" },
        {
            text: "Autoclicker",
            bookmarklet:
                'javascript:var DELAY = 1;var autoClickerStyleElement = document.createElement("style");autoClickerStyleElement.innerHTML="*{cursor: crosshair !important;}";document.body.appendChild(autoClickerStyleElement);function addClicker(e) {if(!e.isTrusted) {return;}if(e.target.classList.contains("auto-clicker-target")) {e.target.classList.remove("auto-clicker-target");} else {e.target.classList.add("auto-clicker-target");}document.body.removeChild(autoClickerStyleElement);document.body.removeEventListener("click", addClicker);e.preventDefault();autoClick(e.target);}function autoClick(element) {if(element.classList.contains("auto-clicker-target")) {element.click();setTimeout(function(){ autoClick(element); }, DELAY);}}document.body.addEventListener("click", addClicker, 0);',
        },
        {
            text: "PAIN",
            bookmarklet: 'javascript:function a(e){var n=e.childNodes;for(var i in n){a(n[i]);if(n[i].style) n[i].style.backgroundImage="url(https://i.chzbgr.com/full/5759452672/h934FBF16/my-eyes-my-eyessssssssss)";}} a(document);',
        },
    ];
    buttons.forEach(function (button) {
        var buttonElement = document.createElement("button");
        buttonElement.textContent = button.text;
        buttonElement.style.cursor = "pointer";
        buttonElement.style.background = "none";
        buttonElement.style.border = "none";
        buttonElement.style.padding = "10px 20px";
        buttonElement.style.borderRadius = "5px";
        buttonElement.style.color = "white";
        buttonElement.style.backgroundColor = "black";
        buttonElement.style.transition = "background 0.2s ease-in-out";
        buttonElement.onmouseover = function () {
            this.style.background = "#1F10A1FF";
        };
        buttonElement.onmouseout = function () {
            this.style.background = "black";
        };
        buttonElement.onclick = function () {
            eval(button.bookmarklet);
        };
        buttonList.appendChild(buttonElement);
    });
    overlay.appendChild(buttonList);
    var inputField = document.createElement("input");
    inputField.type = "text";
    inputField.placeholder = "Paste bookmarklet code here";
    inputField.style.width = "100%";
    inputField.style.height = "30px";
    inputField.style.padding = "10px";
    inputField.style.border = "1px solid #ccc";
    inputField.style.borderRadius = "5px";
    inputField.style.fontSize = "16px";
    inputField.onkeypress = function (e) {
        if (e.key === "Enter") {
            var code = inputField.value;
            if (code.startsWith("javascript:")) {
                eval(code);
            } else {
                alert('Please enter a valid bookmarklet code starting with "javascript:"');
            }
        }
    };
    overlay.appendChild(inputField);
    document.body.appendChild(overlay);
    var dragging = false;
    var startX, startY, startLeft, startTop;
    overlay.addEventListener("mousedown", function (event) {
        dragging = true;
        startX = event.clientX;
        startY = event.clientY;
        startLeft = overlay.offsetLeft;
        startTop = overlay.offsetTop;
    });
    document.addEventListener("mousemove", function (event) {
        if (dragging) {
            overlay.style.left = startLeft + event.clientX - startX + "px";
            overlay.style.top = startTop + event.clientY - startY + "px";
        }
    });
    document.addEventListener("mouseup", function () {
        dragging = false;
    });
})();

};
navbar.appendChild(hackButton);
    var copyButton = document.createElement('button');
    copyButton.innerHTML = 'Copy';
    copyButton.style.background = '#000C84FF';
    copyButton.style.color = 'white';
    copyButton.style.float = 'right';
    copyButton.style.marginRight = '10px';
    copyButton.onclick = function() {
      var newOverlay = document.createElement('div');
      newOverlay.style.position = 'fixed';
      newOverlay.style.top = '0px';
      newOverlay.style.left = '0px';
      newOverlay.style.width = '600px';
      newOverlay.style.height = '600px';
      newOverlay.style.background = 'white';
      newOverlay.style.border = '1px solid black';
      newOverlay.style.zIndex = '1000';
      document.body.appendChild(newOverlay);
      var newNavbar = document.createElement('div');
      newNavbar.style.width = '599px';
      newNavbar.style.height = '30px';
      newNavbar.style.background = 'gray';
      newNavbar.style.padding = '0px';
      newNavbar.innerHTML = 'Nebula Mini COPY';
      newOverlay.appendChild(newNavbar);
      var newCloseButton = document.createElement('button');
      newCloseButton.innerHTML = 'Close';
      newCloseButton.style.float = 'right';
      newCloseButton.style.background = '#000C84FF';
      newCloseButton.style.color = 'white';
      newCloseButton.onclick = function() {
        newOverlay.style.display = 'none';
      };
      newNavbar.appendChild(newCloseButton);
      var newIframe = document.createElement('iframe');
      newIframe.style.width = '100%';
      newIframe.style.height = '570px';
      newIframe.style.border = 'none';
      newIframe.src = 'https://woodpecker4w00d.github.io/Nebula-Mini/';
      newOverlay.appendChild(newIframe);
      var newStartX, newStartY, newStartLeft, newStartTop;
      newNavbar.addEventListener('mousedown', function(event) {
        newStartX = event.clientX;
        newStartY = event.clientY;
        newStartLeft = newOverlay.offsetLeft;
        newStartTop = newOverlay.offsetTop;
        document.addEventListener('mousemove', newDrag);
        document.addEventListener('mouseup', newStopDrag);
      });
  
      function newDrag(event) {
        newOverlay.style.left = (newStartLeft + event.clientX - newStartX) + 'px';
        newOverlay.style.top = (newStartTop + event.clientY - newStartY) + 'px';
      }
  
      function newStopDrag() {
        document.removeEventListener('mousemove', newDrag);
        document.removeEventListener('mouseup', newStopDrag);
      }
    };
    navbar.appendChild(copyButton);
 var hackbutton = document.createElement('button');
 hackbutton.innerHTML = 'Copy';
hackButton.style.background = '#000C84FF';
hackButton.style.color = 'white';
 hackbutton.style.float = 'right';
 hackbutton.style.marginRight = '10px';
 hackbutton.onclick = function() {
   var hackoverlay = document.createElement('div');
   hackoverlay.style.position = 'fixed';
   hackoverlay.style.top = '0px';
   hackoverlay.style.left = '0px';
   hackoverlay.style.width = '100px';
   hackoverlay.style.height = '600px';
   hackoverlay.style.background = 'white';
   hackoverlay.style.border = '1px solid black';
   hackoverlay.style.zIndex = '1000';
   document.body.appendChild(hackoverlay);
   var newNavbar = document.createElement('div');
   newNavbar.style.width = '599px';
   newNavbar.style.height = '30px';
   newNavbar.style.background = 'gray';
   newNavbar.style.padding = '0px';
   newNavbar.innerHTML = 'Nebula Mini COPY';
   hackoverlay.appendChild(newNavbar);
   var newCloseButton = document.createElement('button');
   newCloseButton.innerHTML = 'Close';
    newCloseButton.style.background = '#000C84FF';
    newCloseButton.style.color = 'white';
   newCloseButton.style.float = 'right';
   newCloseButton.onclick = function() {
     hackoverlay.style.display = 'none';
   };
   newNavbar.appendChild(newCloseButton);
var hackMenuDiv = document.createElement('div');
hackMenuDiv.style.width = '100%';
hackMenuDiv.style.height = '570px';
hackMenuDiv.style.overflow = 'auto';
hackMenuDiv.innerHTML = `
  <h1 style="font-family: Arial, sans-serif;">Hack Menu</h1>
  <ul style="list-style: none; padding: 0; margin: 0;">
    <li style="margin-bottom: 10px;"><button style="background-color: #4CAF50; color: #fff; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">Button 1</button></li>
    <li style="margin-bottom: 10px;"><button style="background-color: #4CAF50; color: #fff; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">Button 2</button></li>
    <li style="margin-bottom: 10px;"><button style="background-color: #4CAF50; color: #fff; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">Button 3</button></li>
    <li style="margin-bottom: 10px;"><button style="background-color: #4CAF50; color: #fff; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">Button 4</button></li>
    <li style="margin-bottom: 10px;"><button style="background-color: #4CAF50; color: #fff; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">Button 5</button></li>
  </ul>
`;
hackMenuOverlay.appendChild(hackMenuDiv);
   var newIframe = document.createElement('iframe');
   newIframe.style.width = '100%';
   newIframe.style.height = '570px';
   newIframe.style.border = 'none';
   newIframe.src = 'https://woodpecker4w00d.github.io/Nebula-Mini/';
   hackoverlay.appendChild(newIframe);

   var newStartX, newStartY, newStartLeft, newStartTop;
   newNavbar.addEventListener('mousedown', function(event) {
     newStartX = event.clientX;
     newStartY = event.clientY;
     newStartLeft = hackoverlay.offsetLeft;
     newStartTop = hackoverlay.offsetTop;
     document.addEventListener('mousemove', newDrag);
     document.addEventListener('mouseup', newStopDrag);
   });

   function newDrag(event) {
     hackoverlay.style.left = (newStartLeft + event.clientX - newStartX) + 'px';
     hackoverlay.style.top = (newStartTop + event.clientY - newStartY) + 'px';
   }

   function newStopDrag() {
     document.removeEventListener('mousemove', newDrag);
     document.removeEventListener('mouseup', newStopDrag);
   }
 };
 navbar.appendChild(hackbutton);
    var iframe = document.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.height = '570px';
    iframe.style.border = 'none';
    iframe.src = 'https://woodpecker4w00d.github.io/Nebula-Mini/';
    overlay.appendChild(iframe);
    var startX, startY, startLeft, startTop;
    navbar.addEventListener('mousedown', function(event) {
      startX = event.clientX;
      startY = event.clientY;
      startLeft = overlay.offsetLeft;
      startTop = overlay.offsetTop;
      document.addEventListener('mousemove', drag);
      document.addEventListener('mouseup', stopDrag);
    });
  
    function drag(event) {
        overlay.style.left = (startLeft + event.clientX - startX) + 'px';
        overlay.style.top = (startTop + event.clientY - startY) + 'px';
      }
      
      function stopDrag() {
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('mouseup', stopDrag);
      }
      
      button.onclick = function() {
        button.style.display = 'none';
        overlay.style.display = 'block';
      }
      
      })();
