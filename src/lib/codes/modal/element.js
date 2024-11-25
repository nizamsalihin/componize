export default `
<button class="content-detail__button mt-auto" id="button-redeem-reward">Tukarkan Point</button>

<script>
let modalConfirmation = new Modal({
    title: 'Tukarkan Reward Sekarang?',
    body: 'Poin yang sudah ditukarkan tidak bisa dikembalikan. Pastikan Anda telah memilih reward dengan benar.',
    actionHTML: '<button class="button mt-20" data-modal-confirm>Tukarkan Sekarang</button>',
    onConfirm: () => {
        redeemReward()
    },
});

document.getElementById('button').addEventListener('click', () => {
    modalConfirmation.show();
});

</script>
`
