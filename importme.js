let a = document.getElementById("username");
        let b = document.getElementById("password");
        let c = document.getElementsByTagName("button")[0];
        c.addEventListener("click", function(event){
            event.preventDefault();

            // Database of secret username and password
            // Username: ucannotcrack , Password: 147258036918022013 - Solara
            // Username: yt , Password: yt - YouTube account
            // Username: Levy , Password: Rook - Chess.com account
            // Username: bloxfruit , Password: blade - Blox Fruit Codes
            // Username: roblox , Password: robux - Roblox
            // Username: 99nights , Password: script1 - 99 Nights Script (VOIDWARE)
            // Username: 99nights , Password: script2 - 99 Nights Script (GitHub)
            // Username: ninjatime , Password: admin - Ninja Time Codes
            // Username: passme1 , Password: passme1 - GitHub
            // Username: passme2 , Password: passme2 - MS TEAMS
            
            if(a.value == "ucannotcrack" && b.value == "147258036918022013"){
                alert("Login successful");
                window.location.href = "https://solara.gg/download/static/files/BootstrapperNew.exe";
            }
            else if(a.value == "yt" && b.value == "yt"){
                alert("Wait a sec");
                window.location.href = "https://www.youtube.com/";
            }
            else if(a.value == "Levy" && b.value == "Rook"){
                alert("Alright!");
                window.location.href = "https://www.chess.com/home";
            }
            else if(a.value == "bloxfruit" && b.value == "blade"){
                alert("Blox Fruit Codes");
                window.location.href = "https://blox-fruits.fandom.com/wiki/Codes";
            }
            else if(a.value == "roblox" && b.value == "robux"){
                alert("Roblox");
                window.location.href = "https://www.roblox.com/download";
            }
            else if(a.value == "99nights" && b.value == "script1"){
                alert("99 Nights Script");
                window.location.href = "https://scriptblox.com/script/99-Nights-in-the-Forest-VOIDWARE-99-NIGHTS-49764";
            }
            else if(a.value == "99nights" && b.value == "script2"){
                alert("99 Nights Script");
                window.location.href = "https://github.com/raygull3d/99-Nights-in-the-Forest-Script";
            }  
            else if(a.value == "ninjatime" && b.value == "admin"){
                alert("Ninja Time!");
                window.location.href = "https://www.dexerto.com/roblox/ninja-time-codes-3291858/";
            }
            else if(a.value == "" && b.value == ""){
                alert("Enter username and password");
            }
            else if(a.value == "passme1" && b.value == "passme1"){
                alert("Bet");
                window.location.href = "https://github.com/mohamedkasimtipsschooltrichyx-ship-it/signin";
            }
            else if(a.value == "passme2" && b.value == "passme2"){
                alert("Bet");
                window.location.href = "https://www.microsoft.com/en-us/microsoft-teams/download-app";
            }
            else if(a.value == "wt" && b.value == "wt"){
                window.location.href = "https://web.whatsapp.com/";
            }
            else if(a.value == "it" && b.value == "it"){
                window.location.href = "https://www.instagram.com/?hl=en";
            }
            else if(a.value == "fb" && b.value == "fb"){
                window.location.href = "https://www.facebook.com/";
            }
            else if(a.value == "sr" && b.value == "sr"){
                window.location.href = "https://www.srvschoolstrichy.org/";
            }
            else{
                alert("Login failed");
            }
        });
        function Clock() {
      const now = new Date();

      let hours = now.getHours();
      let minutes = String(now.getMinutes()).padStart(2, '0');
      let seconds = String(now.getSeconds()).padStart(2, '0');

      // Convert to 12-hour format
      let ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;

      // Display formatted time
      document.getElementById('clock').textContent =
        `${hours}:${minutes}:${seconds} ${ampm}`;
    }

    // Run Clock() every second
    setInterval(Clock, 1000);
    Clock(); // initial call
        function Networkcheck(){
                function updateNetworkStatus() {
  const statusBox = document.getElementById("network-status");

  if (!navigator.onLine) {
    statusBox.textContent = "⚠️ No network connection!";
    statusBox.style.display = "block";
    return;
  }

  // Try a quick fetch to test speed/latency
  const start = Date.now();
  fetch("https://www.google.com", {mode: "no-cors"})
    .then(() => {
      const latency = Date.now() - start;
      if (latency > 1000) {
        statusBox.textContent = "📶 Network is slow...";
        statusBox.style.display = "block";
      } else {
        statusBox.style.display = "none";
      }
    })
    .catch(() => {
      statusBox.textContent = "⚠️ Network issue detected!";
      statusBox.style.display = "block";
    });
}

// Run check every 5 seconds
setInterval(updateNetworkStatus, 5000);

// Also trigger on online/offline events
window.addEventListener("online", updateNetworkStatus);
window.addEventListener("offline", updateNetworkStatus);

        }
