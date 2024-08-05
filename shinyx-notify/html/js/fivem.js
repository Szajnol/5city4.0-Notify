window.addEventListener('message', (event) => {
    if (event.data.action === 'Notify') {
        createNotify(event.data.desc);
    }
});

function createNotify(message) {
    const notifyHtml = `

        <div class="notify">
            <div class="data">
                <i class="fa-light fa-circle-info"></i>
                <div class="desc">${message}</div>
            </div>
            <div class="line">
                <div class="progress"><div class="fill"></div></div>
            </div>
        </div>
    `;
    
    let $notify = $(notifyHtml);
    $('.notify-container').append($notify);
    

    $notify.animate({ right: '0vw' }, 300);
    setTimeout(function() {
        $notify.animate({ right: '-20vw' }, 300);
        setTimeout(function() {
            $notify.remove();
        }, 500);
    }, 5000);
}
