fetch("https://api.ipify.org?format=json")
    .then((res) => res.json())
    .then((res) => {
        const div = document.getElementById("div");
        const sentence = document.getElementById("sentence");
        const ipText = document.getElementById("ip");
        sentence.textContent = `your public IPv4:`;
        ipText.textContent = `${res.ip}`;

        div.appendChild(ipText);
    });
