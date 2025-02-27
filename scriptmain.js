javascript:(function() {
    function createMenu() {
        let button = document.createElement("button");
        button.innerText = "☰";
        button.style.position = "fixed";
        button.style.top = "10px";
        button.style.left = "10px";
        button.style.padding = "5px 10px";
        button.style.border = "none";
        button.style.background = "rgba(0, 0, 0, 0.7)";
        button.style.color = "white";
        button.style.cursor = "pointer";
        button.style.borderRadius = "5px";
        button.style.zIndex = "1000";
        button.onmouseover = function() { button.style.background = "rgba(39, 82, 176, 0.7)"; };
        button.onmouseout = function() { button.style.background = "rgba(0, 0, 0, 0.7)"; };
        document.body.appendChild(button);

        let menu = document.createElement("div");
        menu.style.position = "fixed";
        menu.style.top = "10px";
        menu.style.left = "10px";
        menu.style.display = "none";
        menu.style.flexDirection = "column";
        menu.style.gap = "5px";
        menu.style.zIndex = "1000";
        menu.style.background = "rgba(0, 0, 0, 0.7)";
        menu.style.padding = "10px";
        menu.style.borderRadius = "5px";
        document.body.appendChild(menu);

        let closeButton = document.createElement("button");
        closeButton.innerText = "✖";
        closeButton.style.padding = "5px 10px";
        closeButton.style.border = "none";
        closeButton.style.background = "#dc3545";
        closeButton.style.color = "white";
        closeButton.style.cursor = "pointer";
        closeButton.style.borderRadius = "5px";
        closeButton.onmouseover = function() { closeButton.style.background = "#c82333"; };
        closeButton.onmouseout = function() { closeButton.style.background = "#dc3545"; };
        menu.appendChild(closeButton);

        let buttons = [
            { name: "Open Nebula Mini", action: function() {
                let s = document.createElement('script');
                s.src = 'https://woodpecker4w00d.github.io/Nebula-Mini/runminibrowser.js';
                document.body.appendChild(s);
            }},
            { name: "Hack Menu", action: function() {
                let s = document.createElement('script');
                s.src = 'https://woodpecker4w00d.github.io/Nebula-Mini/newhackmenu.js';
                s.onload = function() { console.log("HEHEHHE"); };
                document.body.appendChild(s);
            }},
            { name: "Services", action: function() { alert('Services section!'); }},
            { name: "Contact", action: function() { alert('Contact section!'); }}
        ];

        buttons.forEach(({ name, action }) => {
            let menuButton = document.createElement("button");
            menuButton.innerText = name;
            menuButton.style.padding = "10px 20px";
            menuButton.style.border = "none";
            menuButton.style.background = "#03085b";
            menuButton.style.color = "white";
            menuButton.style.cursor = "pointer";
            menuButton.style.borderRadius = "5px";
            menuButton.onmouseover = function() { menuButton.style.background = "#2752b0"; };
            menuButton.onmouseout = function() { menuButton.style.background = "#03085b"; };
            menuButton.addEventListener("click", action);
            menu.appendChild(menuButton);
        });

        button.addEventListener("click", function () {
            button.style.display = "none";
            menu.style.display = "flex";
        });

        closeButton.addEventListener("click", function () {
            menu.style.display = "none";
            button.style.display = "block";
        });
    }

    createMenu();
})();
