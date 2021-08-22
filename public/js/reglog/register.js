window.addEventListener('DOMContentLoaded', function () {

    // 男性

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

    // 女性

    // チェックボックスのHTML要素を取得
    var asics_female = document.querySelector("#asics_female");
    var label_asics_female = document.getElementById('label-asics_female');
    var adidas_female = document.querySelector("#adidas_female");
    var label_adidas_female = document.getElementById('label-adidas_female');
    var fila_female = document.querySelector("#fila_female");
    var label_fila_female = document.getElementById('label-fila_female');
    var nike_female = document.querySelector("#nike_female");
    var label_nike_female = document.getElementById('label-nike_female');
    var prince_female = document.querySelector("#prince_female");
    var label_prince_female = document.getElementById('label-prince_female');
    var diadora_female = document.querySelector("#diadora_female");
    var label_diadora_female = document.getElementById('label-diadora_female');
    var ellese_female = document.querySelector("#ellese_female");
    var label_ellese_female = document.getElementById('label-ellese_female');
    var babolat_female = document.querySelector("#babolat_female");
    var label_babolat_female = document.getElementById('label-babolat_female');
    // var hydrogen = document.querySelector("#hydrogen");
    // var label_hydrogen = document.getElementById('label-hydrogen');
    var lecoq_female = document.querySelector("#lecoq_female");
    var label_lecoq_female = document.getElementById('label-lecoq_female');

    changeBGFemale();

    asics_female.addEventListener('change', function () {
        // console.log(this.checked); // 選択されたらtrue、選択解除はfalse
        changeBGFemale();
    });

    adidas_female.addEventListener('change', function () {
        changeBGFemale();
    });

    fila_female.addEventListener('change', function () {
        changeBGFemale();
    });

    nike_female.addEventListener('change', function () {
        changeBGFemale();
    });

    prince_female.addEventListener('change', function () {
        changeBGFemale();
    });

    diadora_female.addEventListener('change', function () {
        changeBGFemale();
    });

    ellese_female.addEventListener('change', function () {
        changeBGFemale();
    });

    babolat_female.addEventListener('change', function () {
        changeBGFemale();
    });

    // hydrogen_female.addEventListener('change', function () {
    //     changeBGFemale();
    // });

    lecoq_female.addEventListener('change', function () {
        changeBGFemale();
    });

    function changeBGFemale(){
        if (asics_female.checked) {
            label_asics_female.classList.add('addBG');
        } else {
            label_asics_female.classList.remove('addBG');
        }

        if (adidas_female.checked) {
            label_adidas_female.classList.add('addBG');
        } else {
            label_adidas_female.classList.remove('addBG');
        }

        if (fila_female.checked) {
            label_fila_female.classList.add('addBG');
        } else {
            label_fila_female.classList.remove('addBG');
        }

        if (nike_female.checked) {
            label_nike_female.classList.add('addBG');
        } else {
            label_nike_female.classList.remove('addBG');
        }

        if (prince_female.checked) {
            label_prince_female.classList.add('addBG');
        } else {
            label_prince_female.classList.remove('addBG');
        }

        if (diadora_female.checked) {
            label_diadora_female.classList.add('addBG');
        } else {
            label_diadora_female.classList.remove('addBG');
        }

        if (ellese_female.checked) {
            label_ellese_female.classList.add('addBG');
        } else {
            label_ellese_female.classList.remove('addBG');
        }

        if (babolat_female.checked) {
            label_babolat_female.classList.add('addBG');
        } else {
            label_babolat_female.classList.remove('addBG');
        }

        // if (hydrogen_female.checked) {
        //     label_hydrogen_female.classList.add('addBG');
        // } else {
        //     label_hydrogen_female.classList.remove('addBG');
        // }

        if (lecoq_female.checked) {
            label_lecoq_female.classList.add('addBG');
        } else {
            label_lecoq_female.classList.remove('addBG');
        }
    }

});