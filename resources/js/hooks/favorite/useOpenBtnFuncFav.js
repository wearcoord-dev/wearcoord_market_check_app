export const useOpenBtnFuncFav = () => {

    const openBtnFuncFav = () => {
        const btnCaps = document.getElementById('btnCaps');
        const btnTops = document.getElementById('btnTops');
        const btnPants = document.getElementById('btnPants');
        // const btnSocks = document.getElementById('btnSocks');
        const btnShoes = document.getElementById('btnShoes');
        const btnCapsSummary = document.getElementById('btnSummaryCaps');
        const btnTopsSummary = document.getElementById('btnSummaryTops');
        const btnPantsSummary = document.getElementById('btnSummaryPants');
        const btnShoesSummary = document.getElementById('btnSummaryShoes');
        // const btnBand = document.getElementById('btnBand');
        // const btnInner = document.getElementById('btnInner');
        const btnTitleCaps = document.getElementById('btnTitleCaps');
        const btnTitleTops = document.getElementById('btnTitleTops');
        const btnTitlePants = document.getElementById('btnTitlePants');
        // const btnTitleSocks = document.getElementById('btnTitleSocks');
        const btnTitleShoes = document.getElementById('btnTitleShoes');
        // const btnTitleBand = document.getElementById('btnTitleBand');
        // const btnTitleInner = document.getElementById('btnTitleInner');

        function toggleDisplay() {

            if (btnCaps.open == false && btnTops.open == false && btnPants.open == false &&  btnShoes.open == false ) {
                btnTitleCaps.classList.remove('displayNone');
                btnTitleTops.classList.remove('displayNone');
                btnTitlePants.classList.remove('displayNone');
                btnTitleShoes.classList.remove('displayNone');
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
            if (btnTitleShoes.classList.contains('displayNone')) {
                btnTitleShoes.classList.remove('displayNone');
            } else {
                btnTitleShoes.classList.add('displayNone');

            }
        }

        btnCapsSummary.onclick = function () {
            btnTops.open = false;
            btnPants.open = false;
            btnShoes.open = false;
            toggleDisplay();
        }

        btnTopsSummary.onclick = function () {
            btnCaps.open = false;
            btnPants.open = false;
            btnShoes.open = false;
            toggleDisplay();
        }

        btnPantsSummary.onclick = function () {
            btnCaps.open = false;
            btnTops.open = false;
            btnShoes.open = false;
            toggleDisplay();
        }

        btnShoesSummary.onclick = function () {
            btnCaps.open = false;
            btnTops.open = false;
            btnPants.open = false;
            toggleDisplay();
        }
    }

    return { openBtnFuncFav }
}