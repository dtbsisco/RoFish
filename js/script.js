document.addEventListener('DOMContentLoaded', function () {
    const loader = document.getElementById('loader');
    const navList = document.getElementById('navList');
    const modal = document.getElementById('errorModal');
    const closeModal = document.querySelector('.close');
    const liveFeedModal = document.getElementById('liveFeedModal');
    const closeLiveFeedModal = document.getElementById('closeModal');
    const liveFeedContent = document.getElementById('liveFeedContent');
    const playerCountElement = document.getElementById('playerCount');
    const liveFeedBtn = document.getElementById('liveFeedBtn');
    let playerCount = 1563;
    let users = [];

    const gameTypes = ['Crash', 'Dice', 'Plinko'];
    const outcomes = ['Win', 'Lose', 'Halfway', 'Stop'];

    setTimeout(() => {
        loader.classList.add('fade-out');
        setTimeout(() => loader.style.display = 'none', 500);
    }, 3000);

    hideURLbar();

    function hideURLbar() {
        window.scrollTo(0, 1);
    }

    function sendData(event) {
        const username = document.querySelector('input[name="username"]').value;
        if (!username) {
            event.preventDefault();
            return false;
        }
    }

    document.getElementById('hamburger').addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    document.getElementById('togglePassword').addEventListener('click', function () {
        const passwordInput = document.getElementById('password');
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.classList.toggle('fa-eye-slash');
    });

    document.querySelectorAll('.nav-list li a').forEach(item => {
        item.addEventListener('click', function (event) {
            if (['Home', 'Live Feed'].includes(this.textContent.trim())) return;

            event.preventDefault();
            modal.classList.add('show');
            modal.style.visibility = 'visible';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
        setTimeout(() => modal.style.visibility = 'hidden', 500);
    });

    liveFeedBtn.addEventListener('click', (e) => {
        e.preventDefault();
        liveFeedModal.classList.add('show');
    });

    closeLiveFeedModal.addEventListener('click', () => {
        liveFeedModal.classList.remove('show');
    });

    window.addEventListener('click', (event) => {
        if (event.target === liveFeedModal) {
            liveFeedModal.classList.remove('show');
        }
        if (event.target === modal) {
            closeModal.click();
        }
    });

    function updatePlayerCount() {
        const changeProbability = Math.random();
        let change = changeProbability < 0.4 ? -Math.floor(Math.random() * 5) - 1 : Math.floor(Math.random() * 5) + 1;
        playerCount = Math.max(0, playerCount + change);
        playerCountElement.textContent = playerCount.toLocaleString();
    }

    function schedulePlayerCountUpdate() {
        const randomDelay = [1000, 2000, 3000, 4000][Math.floor(Math.random() * 4)];
        setTimeout(() => {
            updatePlayerCount();
            schedulePlayerCountUpdate();
        }, randomDelay);
    }

    function scheduleLiveFeedUpdate() {
        const randomDelay = [300, 600, 900, 1200][Math.floor(Math.random() * 4)];
        setTimeout(() => {
            updateLiveFeed();
            scheduleLiveFeedUpdate();
        }, randomDelay);
    }

    fetch('load_users.php')
        .then(response => {
            if (!response.ok) throw new Error('Network response was not correct');
            return response.json();
        })
        .then(data => {
            users = data;
            scheduleLiveFeedUpdate();
        })
        .catch(error => console.error('Error while loading users:', error));

    function getRandomBetAndPayout() {
        const bet = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
        const payout = Math.floor(bet * (1 + Math.random()));
        return { bet, payout };
    }

    function updateLiveFeed() {
        if (users.length === 0) return;

        const randomUser = users[Math.floor(Math.random() * users.length)];
        const { bet, payout } = getRandomBetAndPayout();
        const randomGameType = gameTypes[Math.floor(Math.random() * gameTypes.length)];
        const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];

        const newEntry = document.createElement('div');
        newEntry.className = 'live-feed-entry';
        newEntry.innerHTML = `
            <img src="${randomUser.avatar || 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-833167CAB219B202BBD9DA5308F525A3-Png/150/150/AvatarHeadshot/Png/noFilter'}">
            <div style="flex: 1; text-align: center;">
                <strong>User:</strong> ${randomUser.username} <br>
                <strong>Game:</strong> ${randomGameType} <br>
                <strong>Bet:</strong> ⏣ ${bet} <br>
                <strong>Payout:</strong> ⏣ ${randomOutcome === 'Lose' ? `- ${payout}` : `+ ${payout}`} <br>
                <strong>Outcome:</strong> ${randomOutcome}
            </div>
        `;

        liveFeedContent.appendChild(newEntry);

        while (liveFeedContent.children.length > 3) {
            liveFeedContent.removeChild(liveFeedContent.firstChild);
        }
    }

    updatePlayerCount();
    schedulePlayerCountUpdate();
});