window.addEventListener('DOMContentLoaded', function () {

    // チェックボックスのHTML要素を取得
    var asics = document.querySelector("#asics");
    var label_asics = document.getElementById('label-asics');
    var adidas = document.querySelector("#adidas");
    var label_adidas = document.getElementById('label-adidas');
    var fila = document.querySelector("#fila");
    var label_fila = document.getElementById('label-fila');
    var nike = document.querySelector("#nike");
    var label_nike = document.getElementById('label-nike');
    var prince = document.querySelector("#prince");
    var label_prince = document.getElementById('label-prince');
    var diadora = document.querySelector("#diadora");
    var label_diadora = document.getElementById('label-diadora');
    var ellese = document.querySelector("#ellese");
    var label_ellese = document.getElementById('label-ellese');
    var babolat = document.querySelector("#babolat");
    var label_babolat = document.getElementById('label-babolat');
    var hydrogen = document.querySelector("#hydrogen");
    var label_hydrogen = document.getElementById('label-hydrogen');
    var lecoq = document.querySelector("#lecoq");
    var label_lecoq = document.getElementById('label-lecoq');

    changeBG();

    asics.addEventListener('change', function () {
        // console.log(this.checked); // 選択されたらtrue、選択解除はfalse
        changeBG();
    });

    adidas.addEventListener('change', function () {
        changeBG();
    });

    fila.addEventListener('change', function () {
        changeBG();
    });

    nike.addEventListener('change', function () {
        changeBG();
    });

    prince.addEventListener('change', function () {
        changeBG();
    });

    diadora.addEventListener('change', function () {
        changeBG();
    });

    ellese.addEventListener('change', function () {
        changeBG();
    });

    babolat.addEventListener('change', function () {
        changeBG();
    });

    hydrogen.addEventListener('change', function () {
        changeBG();
    });

    lecoq.addEventListener('change', function () {
        changeBG();
    });

    function changeBG(){
        if (asics.checked) {
            label_asics.classList.add('addBG');
        } else {
            label_asics.classList.remove('addBG');
        }

        if (adidas.checked) {
            label_adidas.classList.add('addBG');
        } else {
            label_adidas.classList.remove('addBG');
        }

        if (fila.checked) {
            label_fila.classList.add('addBG');
        } else {
            label_fila.classList.remove('addBG');
        }

        if (nike.checked) {
            label_nike.classList.add('addBG');
        } else {
            label_nike.classList.remove('addBG');
        }

        if (prince.checked) {
            label_prince.classList.add('addBG');
        } else {
            label_prince.classList.remove('addBG');
        }

        if (diadora.checked) {
            label_diadora.classList.add('addBG');
        } else {
            label_diadora.classList.remove('addBG');
        }

        if (ellese.checked) {
            label_ellese.classList.add('addBG');
        } else {
            label_ellese.classList.remove('addBG');
        }

        if (babolat.checked) {
            label_babolat.classList.add('addBG');
        } else {
            label_babolat.classList.remove('addBG');
        }

        if (hydrogen.checked) {
            label_hydrogen.classList.add('addBG');
        } else {
            label_hydrogen.classList.remove('addBG');
        }

        if (lecoq.checked) {
            label_lecoq.classList.add('addBG');
        } else {
            label_lecoq.classList.remove('addBG');
        }
    }

});