window.addEventListener('load',
    () => {

        classes = ['green', 'red']
        turn = 0

        document.getElementById('board').addEventListener('click', (event) => {
            if (event.target.classList.contains('cell') & ((event.target.classList.contains('red')) || ((event.target.classList.contains('green'))))) { return }
            else {
                event.target.classList.add(classes[turn])
                turn = (turn + 1) % 2
                }
            })
        }
    )




function find_winner() {
    for (let player of classes) {
        const played = document.querySelectorAll('.${player}')
        let ids = []
        for (let div of played)
            ids.push(div.id.replace('case', ''))
        console.log('player ${player} has played', played)
    }
}