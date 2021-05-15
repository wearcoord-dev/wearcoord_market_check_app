export const useOpenBtnFunc = () => {

    const openBtnFunc = () => {
        const btnCaps = document.getElementById('btnCaps');
        const btnTops = document.getElementById('btnTops');
        const btnPants = document.getElementById('btnPants');
        const btnSocks = document.getElementById('btnSocks');
        const btnShoes = document.getElementById('btnShoes');
        const btnBand = document.getElementById('btnBand');
        const btnInner = document.getElementById('btnInner');
        const btnTitleCaps = document.getElementById('btnTitleCaps');
        const btnTitleTops = document.getElementById('btnTitleTops');
        const btnTitlePants = document.getElementById('btnTitlePants');
        const btnTitleSocks = document.getElementById('btnTitleSocks');
        const btnTitleShoes = document.getElementById('btnTitleShoes');
        const btnTitleBand = document.getElementById('btnTitleBand');
        const btnTitleInner = document.getElementById('btnTitleInner');

        function toggleDisplay() {

            if (btnCaps.open == false && btnTops.open == false && btnPants.open == false && btnSocks.open == false && btnShoes.open == false && btnBand.open == false && btnInner.open == false) {
                btnTitleCaps.classList.remove('displayNone');
                btnTitleTops.classList.remove('displayNone');
                btnTitlePants.classList.remove('displayNone');
                btnTitleSocks.classList.remove('displayNone');
                btnTitleShoes.classList.remove('displayNone');
                btnTitleBand.classList.remove('displayNone');
                btnTitleInner.classList.remove('displayNone');
            };

            if (btnTitleCaps.classList.contains('displayNone')) {
                btnTitleCaps.classList.remove('displayNone');
            } else {
                btnTitleCaps.classList.add('displayNone');

            }
            if (btnTitleTops.classList.contains('displayNone')) {
                btnTitleTops.classList.remove('displayNone');
            } else {
                btnTitleTops.classList.add('displayNone');

            }
            if (btnTitlePants.classList.contains('displayNone')) {
                btnTitlePants.classList.remove('displayNone');
            } else {
                btnTitlePants.classList.add('displayNone');

            }
            if (btnTitleSocks.classList.contains('displayNone')) {
                btnTitleSocks.classList.remove('displayNone');
            } else {
                btnTitleSocks.classList.add('displayNone');

            }
            if (btnTitleShoes.classList.contains('displayNone')) {
                btnTitleShoes.classList.remove('displayNone');
            } else {
                btnTitleShoes.classList.add('displayNone');

            }
            if (btnTitleBand.classList.contains('displayNone')) {
                btnTitleBand.classList.remove('displayNone');
            } else {
                btnTitleBand.classList.add('displayNone');
            }

            if (btnTitleInner.classList.contains('displayNone')) {
                btnTitleInner.classList.remove('displayNone');
            } else {
                btnTitleInner.classList.add('displayNone');
            }
        }

        btnCaps.onclick = function () {
            btnTops.open = false;
            btnPants.open = false;
            btnSocks.open = false;
            btnShoes.open = false;
            btnBand.open = false;
            btnInner.open = false;
            console.log('ok');
            toggleDisplay();
        }

        btnTops.onclick = function () {
            btnCaps.open = false;
            btnPants.open = false;
            btnSocks.open = false;
            btnShoes.open = false;
            btnBand.open = false;
            btnInner.open = false;
            toggleDisplay();
        }

        btnPants.onclick = function () {
            btnCaps.open = false;
            btnTops.open = false;
            btnSocks.open = false;
            btnShoes.open = false;
            btnBand.open = false;
            btnInner.open = false;
            toggleDisplay();
        }

        btnSocks.onclick = function () {
            btnCaps.open = false;
            btnTops.open = false;
            btnPants.open = false;
            btnShoes.open = false;
            btnBand.open = false;
            btnInner.open = false;
            toggleDisplay();
        }

        btnShoes.onclick = function () {
            btnCaps.open = false;
            btnTops.open = false;
            btnPants.open = false;
            btnSocks.open = false;
            btnBand.open = false;
            btnInner.open = false;
            toggleDisplay();
        }

        btnBand.onclick = function () {
            btnCaps.open = false;
            btnTops.open = false;
            btnPants.open = false;
            btnSocks.open = false;
            btnShoes.open = false;
            btnInner.open = false;
            toggleDisplay();
        }

        btnInner.onclick = function () {
            btnCaps.open = false;
            btnTops.open = false;
            btnPants.open = false;
            btnSocks.open = false;
            btnShoes.open = false;
            btnBand.open = false;
            toggleDisplay();
        }
    }

    return { openBtnFunc }
}