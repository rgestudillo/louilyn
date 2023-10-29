// Fetch the configuration file
fetch('config.json')
    .then(response => response.json())
    .then(config => {
        // Set the names based on the configuration
        document.querySelector(".boy label").textContent = config.boy;
        document.querySelector(".girl label").textContent = config.girl;
    })
    .catch(error => {
        console.log('Error fetching config:', error);
    });

// Your original logic, updated for new class and name attributes
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");
let winner;
let boySelection;
let girlSelection;

let boyHeads = document.querySelector('input[name="boy"][value="Heads"]');
let boyTails = document.querySelector('input[name="boy"][value="Tails"]');
let girlHeads = document.querySelector('input[name="girl"][value="Heads"]');
let girlTails = document.querySelector('input[name="girl"][value="Tails"]');

boyHeads.addEventListener("change", () => {
    girlTails.checked = true;
});

boyTails.addEventListener("change", () => {
    girlHeads.checked = true;
});

girlHeads.addEventListener("change", () => {
    boyTails.checked = true;
});

girlTails.addEventListener("change", () => {
    boyHeads.checked = true;
});

flipBtn.addEventListener("click", () => {
    boySelection = document.querySelector('input[name="boy"]:checked');
    girlSelection = document.querySelector('input[name="girl"]:checked');
    document.querySelector("#winner").textContent = ``;
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";

    if (boySelection == null || girlSelection == null) {
        document.querySelector("#winner").textContent = `Please select Heads or Tails`;
    } else {
        if (i) {
            setTimeout(function () {
                coin.style.animation = "spin-heads 3s forwards";
            }, 100);
            if (boySelection.value == 'Heads') {
                winner = document.querySelector(".boy label").textContent;
            } else {
                winner = document.querySelector(".girl label").textContent;
            }
        } else {
            setTimeout(function () {
                coin.style.animation = "spin-tails 3s forwards";
            }, 100);
            if (boySelection.value == 'Tails') {
                winner = document.querySelector(".boy label").textContent;
            } else {
                winner = document.querySelector(".girl label").textContent;
            }
        }

        // if(boySelection.value == 'Heads'){
        //     setTimeout(function () {
        //         coin.style.animation = "spin-heads 3s forwards";
        //     }, 100);
        //     winner = document.querySelector(".boy label").textContent;
        // }else{
        //     setTimeout(function () {
        //         coin.style.animation = "spin-tails 3s forwards";
        //     }, 100);
        //     winner = document.querySelector(".boy label").textContent;
        // }

        setTimeout(updateStats, 3000);
        disableButton();
    }
});

function updateStats() {
    document.querySelector("#winner").textContent = `Winner is: ${winner}`;
}

function disableButton() {
    flipBtn.disabled = true;
    setTimeout(function () {
        flipBtn.disabled = false;
    }, 3000);
}

resetBtn.addEventListener("click", () => {
    coin.style.animation = "none";
    document.querySelector("#winner").textContent = ``;

    let boyRadioButtons = document.querySelectorAll('input[name="boy"]');
    let girlRadioButtons = document.querySelectorAll('input[name="girl"]');
    boyRadioButtons.forEach(button => {
        button.checked = false;
    });
    girlRadioButtons.forEach(button => {
        button.checked = false;
    });
})
