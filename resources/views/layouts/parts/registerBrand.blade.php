<div class="form-group row genderArea">
    <div class="genderText">好みのウェア<span class="material-icons-outlined helpIcon">help_outline</span><span
            class="descText">お探しのアイテムとイメージが近いコーディネートを一つ選んでください（選択したウェアがマネキンに着せられます。アイテムやインナー着脱は後ほど自由に変更できます）
        </span></div>

    <p class="subtext">※お探しのウェアに近いコーデを1つ選択してください</p>

    <div class="tabs">
        <input id="male" type="radio" name="tab_item" checked>
        <label class="tab_item" for="male">男性</label>
        <input id="female" type="radio" name="tab_item">
        <label class="tab_item" for="female">女性</label>

        {{-- 男性タブ内部 --}}

        <div class="tab_content" id="male_content">
            <div class="tab_content_description">

                {{-- 1.リストにブランドを追加
            2.コンテンツを追加してidとclassを修正
            3.CSS/JSに追加 --}}

                <div class="tabBrandList">
                    <label id="label-asics" for="asics">Asics</label>
                    <label id="label-adidas" for="adidas">Adidas</label>
                    <label id="label-fila" for="fila">FILA</label>
                    <label id="label-nike" for="nike">NIKE</label>
                    <label id="label-prince" for="prince">Prince</label>
                    <label id="label-diadora" for="diadora">Diadora</label>
                    <label id="label-ellese" for="ellese">ellese</label>
                    <label id="label-babolat" for="babolat">Babolat</label>
                    <label id="label-hydrogen" for="hydrogen">Hydrogen</label>
                    <label id="label-lecoq" for="lecoq">Lecoq</label>
                    <label id="label-lacoste" for="lacoste">Lacoste</label>
                    <label id="label-ralosso" for="ralosso">ralosso</label>
                </div>


                {{-- コーデ格納箇所 --}}
                <div class="hidden_box">

                    {{-- Asics --}}
                    {{-- <label for="asics">Asics</label> --}}
                    <input type="radio" id="asics" name="showbrand" checked />
                    <div class="hidden_show-asics hidden_show">
                        <!--非表示ここから-->
                        <p class="coordTitle">Asicsのコーデ</p>
                        <div class="coordWrapper">
                            <input type="radio" class="radioInput" id="9" value="9" name="coorditem" required>
                            <label class="genderRadiobox" for="9">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/9.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="10" value="10" name="coorditem" required>
                            <label class="genderRadiobox" for="10">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/10.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="11" value="11" name="coorditem" required>
                            <label class="genderRadiobox" for="11">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/11.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="12" value="12" name="coorditem" required>
                            <label class="genderRadiobox" for="12">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/12.png') }}" alt="">
                            </label>
                        </div>
                        <!--ここまで-->
                    </div>

                    {{-- Adidas --}}
                    {{-- <label for="adidas">Adidas</label> --}}
                    <input type="radio" id="adidas" name="showbrand" />
                    <div class="hidden_show-adidas hidden_show">
                        <!--非表示ここから-->
                        <p class="coordTitle">Adidasのコーデ</p>
                        <div class="coordWrapper">
                            <input type="radio" class="radioInput" id="13" value="13" name="coorditem" required>
                            <label class="genderRadiobox" for="13">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/13.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="14" value="14" name="coorditem" required>
                            <label class="genderRadiobox" for="14">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/14.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="15" value="15" name="coorditem" required>
                            <label class="genderRadiobox" for="15">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/15.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="16" value="16" name="coorditem" required>
                            <label class="genderRadiobox" for="16">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/16.png') }}" alt="">
                            </label>
                        </div>
                        <!--ここまで-->
                    </div>

                    {{-- Fila --}}
                    <input type="radio" id="fila" name="showbrand" />
                    <div class="hidden_show-fila hidden_show">
                        <!--非表示ここから-->
                        <p class="coordTitle">FILAのコーデ</p>
                        <div class="coordWrapper">
                            <input type="radio" class="radioInput" id="17" value="17" name="coorditem" required>
                            <label class="genderRadiobox" for="17">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/17.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="18" value="18" name="coorditem" required>
                            <label class="genderRadiobox" for="18">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/18.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="19" value="19" name="coorditem" required>
                            <label class="genderRadiobox" for="19">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/19.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="20" value="20" name="coorditem" required>
                            <label class="genderRadiobox" for="20">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/20.png') }}" alt="">
                            </label>
                        </div>
                        <!--ここまで-->
                    </div>

                    {{-- nike --}}
                    <input type="radio" id="nike" name="showbrand" />
                    <div class="hidden_show-nike hidden_show">
                        <!--非表示ここから-->
                        <p class="coordTitle">NIKEのコーデ</p>
                        <div class="coordWrapper">
                            <input type="radio" class="radioInput" id="21" value="21" name="coorditem" required>
                            <label class="genderRadiobox" for="21">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/21.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="22" value="22" name="coorditem" required>
                            <label class="genderRadiobox" for="22">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/22.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="23" value="23" name="coorditem" required>
                            <label class="genderRadiobox" for="23">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/23.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="24" value="24" name="coorditem" required>
                            <label class="genderRadiobox" for="24">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/24.png') }}" alt="">
                            </label>

                        </div>
                        <!--ここまで-->
                    </div>

                    {{-- prince --}}
                    <input type="radio" id="prince" name="showbrand" />
                    <div class="hidden_show-prince hidden_show">
                        <!--非表示ここから-->
                        <p class="coordTitle">Princeのコーデ</p>
                        <div class="coordWrapper">
                            <input type="radio" class="radioInput" id="29" value="29" name="coorditem" required>
                            <label class="genderRadiobox" for="29">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/29.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="30" value="30" name="coorditem" required>
                            <label class="genderRadiobox" for="30">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/30.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="31" value="31" name="coorditem" required>
                            <label class="genderRadiobox" for="31">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/31.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="32" value="32" name="coorditem" required>
                            <label class="genderRadiobox" for="32">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/32.png') }}" alt="">
                            </label>
                        </div>
                        <!--ここまで-->
                    </div>

                    {{-- diadora --}}
                    <input type="radio" id="diadora" name="showbrand" />
                    <div class="hidden_show-diadora hidden_show">
                        <!--非表示ここから-->
                        <p class="coordTitle">Diadoraのコーデ</p>
                        <div class="coordWrapper">
                            <input type="radio" class="radioInput" id="25" value="25" name="coorditem" required>
                            <label class="genderRadiobox" for="25">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/25.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="26" value="26" name="coorditem" required>
                            <label class="genderRadiobox" for="26">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/26.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="27" value="27" name="coorditem" required>
                            <label class="genderRadiobox" for="27">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/27.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="28" value="28" name="coorditem" required>
                            <label class="genderRadiobox" for="28">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/28.png') }}" alt="">
                            </label>

                        </div>
                        <!--ここまで-->
                    </div>

                    {{-- ellese --}}
                    <input type="radio" id="ellese" name="showbrand" />
                    <div class="hidden_show-ellese hidden_show">
                        <!--非表示ここから-->
                        <p class="coordTitle">elleseのコーデ</p>
                        <div class="coordWrapper">
                            <input type="radio" class="radioInput" id="33" value="33" name="coorditem" required>
                            <label class="genderRadiobox" for="33">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/33.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="34" value="34" name="coorditem" required>
                            <label class="genderRadiobox" for="34">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/34.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="35" value="35" name="coorditem" required>
                            <label class="genderRadiobox" for="35">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/35.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="36" value="36" name="coorditem" required>
                            <label class="genderRadiobox" for="36">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/36.png') }}" alt="">
                            </label>

                        </div>
                        <!--ここまで-->
                    </div>

                    {{-- babolat --}}
                    <input type="radio" id="babolat" name="showbrand" />
                    <div class="hidden_show-babolat hidden_show">
                        <!--非表示ここから-->
                        <p class="coordTitle">Babolatのコーデ</p>
                        <div class="coordWrapper">
                            <input type="radio" class="radioInput" id="37" value="37" name="coorditem" required>
                            <label class="genderRadiobox" for="37">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/37.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="38" value="38" name="coorditem" required>
                            <label class="genderRadiobox" for="38">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/38.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="39" value="39" name="coorditem" required>
                            <label class="genderRadiobox" for="39">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/39.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="40" value="40" name="coorditem" required>
                            <label class="genderRadiobox" for="40">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/40.png') }}" alt="">
                            </label>

                        </div>
                        <!--ここまで-->
                    </div>

                    {{-- hydrogen --}}
                    <input type="radio" id="hydrogen" name="showbrand" />
                    <div class="hidden_show-hydrogen hidden_show">
                        <!--非表示ここから-->
                        <p class="coordTitle">Hydrogenのコーデ</p>
                        <div class="coordWrapper">
                            <input type="radio" class="radioInput" id="41" value="41" name="coorditem" required>
                            <label class="genderRadiobox" for="41">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/41.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="42" value="42" name="coorditem" required>
                            <label class="genderRadiobox" for="42">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/42.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="43" value="43" name="coorditem" required>
                            <label class="genderRadiobox" for="43">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/43.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="44" value="44" name="coorditem" required>
                            <label class="genderRadiobox" for="44">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/44.png') }}" alt="">
                            </label>

                        </div>
                        <!--ここまで-->
                    </div>

                    {{-- lecoq --}}
                    <input type="radio" id="lecoq" name="showbrand" />
                    <div class="hidden_show-lecoq hidden_show">
                        <!--非表示ここから-->
                        <p class="coordTitle">Lecoqのコーデ</p>
                        <div class="coordWrapper">
                            <input type="radio" class="radioInput" id="45" value="45" name="coorditem" required>
                            <label class="genderRadiobox" for="45">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/45.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="46" value="46" name="coorditem" required>
                            <label class="genderRadiobox" for="46">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/46.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="47" value="47" name="coorditem" required>
                            <label class="genderRadiobox" for="47">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/47.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="48" value="48" name="coorditem" required>
                            <label class="genderRadiobox" for="48">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/48.png') }}" alt="">
                            </label>
                        </div>
                        <!--ここまで-->
                    </div>


                    {{-- lacoste --}}
                    <input type="radio" id="lacoste" name="showbrand" />
                    <div class="hidden_show-lacoste hidden_show">
                        <!--非表示ここから-->
                        <p class="coordTitle">Lacosteのコーデ</p>
                        <div class="coordWrapper">
                            <input type="radio" class="radioInput" id="79" value="79" name="coorditem" required>
                            <label class="genderRadiobox" for="79">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/79.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="80" value="80" name="coorditem" required>
                            <label class="genderRadiobox" for="80">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/80.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="81" value="81" name="coorditem" required>
                            <label class="genderRadiobox" for="81">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/81.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="82" value="82" name="coorditem" required>
                            <label class="genderRadiobox" for="82">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/82.png') }}" alt="">
                            </label>
                        </div>
                        <!--ここまで-->
                    </div>

                    {{-- ralosso --}}
                    <input type="radio" id="ralosso" name="showbrand" />
                    <div class="hidden_show-ralosso hidden_show">
                        <!--非表示ここから-->
                        <p class="coordTitle">ralossoのコーデ</p>
                        <div class="coordWrapper">
                            <input type="radio" class="radioInput" id="83" value="83" name="coorditem" required>
                            <label class="genderRadiobox" for="83">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/83.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="84" value="84" name="coorditem" required>
                            <label class="genderRadiobox" for="84">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/84.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="85" value="85" name="coorditem" required>
                            <label class="genderRadiobox" for="85">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/85.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="86" value="86" name="coorditem" required>
                            <label class="genderRadiobox" for="86">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/86.png') }}" alt="">
                            </label>
                        </div>
                        <!--ここまで-->
                    </div>


                </div>
            </div>
        </div>


        {{-- 女性タブ内 --}}


        <div class="tab_content" id="female_content">
            <div class="tab_content_description">

                <div class="tabBrandList">
                    <label id="label-asics_female" for="asics_female">Asics</label>
                    <label id="label-adidas_female" for="adidas_female">Adidas</label>
                    <label id="label-fila_female" for="fila_female">FILA</label>
                    <label id="label-nike_female" for="nike_female">NIKE</label>
                    <label id="label-prince_female" for="prince_female">Prince</label>
                    <label id="label-diadora_female" for="diadora_female">Diadora</label>
                    <label id="label-ellese_female" for="ellese_female">ellese</label>
                    <label id="label-babolat_female" for="babolat_female">Babolat</label>
                    <label id="label-hydrogen_female" for="hydrogen_female">Hydrogen</label>
                    <label id="label-lecoq_female" for="lecoq_female">Lecoq</label>
                </div>

                {{-- コーデ格納箇所 --}}
                <div class="hidden_box">

                    {{-- Asics --}}
                    <input type="radio" id="asics_female" name="showbrand_female" checked />
                    <div class="hidden_show-asics_female hidden_show">
                        <!--非表示ここから-->
                        <p class="coordTitle">Asicsのコーデ</p>
                        <div class="coordWrapper">
                            <input type="radio" class="radioInput" id="63" value="63" name="coorditem">
                            <label class="genderRadiobox" for="63">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/63.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="64" value="64" name="coorditem">
                            <label class="genderRadiobox" for="64">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/64.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="65" value="65" name="coorditem">
                            <label class="genderRadiobox" for="65">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/65.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="66" value="66" name="coorditem">
                            <label class="genderRadiobox" for="66">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/66.png') }}" alt="">
                            </label>

                        </div>
                        <!--ここまで-->
                    </div>

                    {{-- Adidas --}}
                    {{-- <label for="adidas">Adidas</label> --}}
                    <input type="radio" id="adidas_female" name="showbrand_female" />
                    <div class="hidden_show-adidas_female hidden_show">
                        <!--非表示ここから-->
                        <p class="coordTitle">Adidasのコーデ</p>
                        <div class="coordWrapper">
                            <input type="radio" class="radioInput" id="57" value="57" name="coorditem">
                            <label class="genderRadiobox" for="57">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/57.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="58" value="58" name="coorditem">
                            <label class="genderRadiobox" for="58">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/58.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="59" value="59" name="coorditem">
                            <label class="genderRadiobox" for="59">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/59.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="60" value="60" name="coorditem">
                            <label class="genderRadiobox" for="60">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/60.png') }}" alt="">
                            </label>

                        </div>
                        <!--ここまで-->
                    </div>

                    {{-- Fila --}}
                    <input type="radio" id="fila_female" name="showbrand_female" />
                    <div class="hidden_show-fila_female hidden_show">
                        <!--非表示ここから-->
                        <p class="coordTitle">FILAのコーデ</p>
                        <div class="coordWrapper">
                            <input type="radio" class="radioInput" id="53" value="53" name="coorditem">
                            <label class="genderRadiobox" for="53">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/53.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="54" value="54" name="coorditem">
                            <label class="genderRadiobox" for="54">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/54.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="55" value="55" name="coorditem">
                            <label class="genderRadiobox" for="55">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/55.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="56" value="56" name="coorditem">
                            <label class="genderRadiobox" for="56">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/56.png') }}" alt="">
                            </label>

                        </div>
                        <!--ここまで-->
                    </div>

                    {{-- nike --}}
                    <input type="radio" id="nike_female" name="showbrand_female" />
                    <div class="hidden_show-nike_female hidden_show">
                        <!--非表示ここから-->
                        <p class="coordTitle">NIKEのコーデ</p>
                        <div class="coordWrapper">
                            <input type="radio" class="radioInput" id="61" value="61" name="coorditem">
                            <label class="genderRadiobox" for="61">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/61.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="62" value="62" name="coorditem">
                            <label class="genderRadiobox" for="62">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/62.png') }}" alt="">
                            </label>
                        </div>
                        <!--ここまで-->
                    </div>

                    {{-- prince --}}
                    <input type="radio" id="prince_female" name="showbrand_female" />
                    <div class="hidden_show-prince_female hidden_show">
                        <!--非表示ここから-->
                        <p class="coordTitle">Princeのコーデ</p>
                        <div class="coordWrapper">
                            <input type="radio" class="radioInput" id="1" value="1" name="coorditem" required>
                            <label class="genderRadiobox" for="1">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/1.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="3" value="3" name="coorditem">
                            <label class="genderRadiobox" for="3">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/3.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="4" value="4" name="coorditem">
                            <label class="genderRadiobox" for="4">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/4.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="67" value="67" name="coorditem">
                            <label class="genderRadiobox" for="67">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/67.png') }}" alt="">
                            </label>
                        </div>
                        <!--ここまで-->
                    </div>

                    {{-- diadora --}}
                    <input type="radio" id="diadora_female" name="showbrand_female" />
                    <div class="hidden_show-diadora_female hidden_show">
                        <!--非表示ここから-->
                        <p class="coordTitle">Diadoraのコーデ</p>
                        <div class="coordWrapper">
                            <input type="radio" class="radioInput" id="2" value="2" name="coorditem">
                            <label class="genderRadiobox" for="2">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/2.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="5" value="5" name="coorditem">
                            <label class="genderRadiobox" for="5">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/5.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="6" value="6" name="coorditem">
                            <label class="genderRadiobox" for="6">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/6.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="7" value="7" name="coorditem">
                            <label class="genderRadiobox" for="7">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/7.png') }}" alt="">
                            </label>

                            {{-- <input type="radio"
                    class="radioInput" id="8" value="8" name="coorditem" >
                   <label class="genderRadiobox" for="8">
                       <img class="wearSet" src="{{asset('/img/firstcoord/8.png')}}" alt="">
                   </label> --}}
                        </div>
                        <!--ここまで-->
                    </div>

                    {{-- ellese --}}
                    <input type="radio" id="ellese_female" name="showbrand_female" />
                    <div class="hidden_show-ellese_female hidden_show">
                        <!--非表示ここから-->
                        <p class="coordTitle">elleseのコーデ</p>
                        <div class="coordWrapper">
                            <input type="radio" class="radioInput" id="49" value="49" name="coorditem">
                            <label class="genderRadiobox" for="49">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/49.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="50" value="50" name="coorditem">
                            <label class="genderRadiobox" for="50">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/50.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="51" value="51" name="coorditem">
                            <label class="genderRadiobox" for="51">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/51.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="52" value="52" name="coorditem">
                            <label class="genderRadiobox" for="52">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/52.png') }}" alt="">
                            </label>

                        </div>
                        <!--ここまで-->
                    </div>

                    {{-- babolat --}}
                    <input type="radio" id="babolat_female" name="showbrand_female" />
                    <div class="hidden_show-babolat_female hidden_show">
                        <!--非表示ここから-->
                        <p class="coordTitle">Babolatのコーデ</p>
                        <div class="coordWrapper">
                            <input type="radio" class="radioInput" id="68" value="68" name="coorditem">
                            <label class="genderRadiobox" for="68">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/68.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="69" value="69" name="coorditem">
                            <label class="genderRadiobox" for="69">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/69.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="70" value="70" name="coorditem">
                            <label class="genderRadiobox" for="70">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/70.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="71" value="71" name="coorditem">
                            <label class="genderRadiobox" for="71">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/71.png') }}" alt="">
                            </label>

                        </div>
                        <!--ここまで-->
                    </div>

                    {{-- lecoq --}}
                    <input type="radio" id="lecoq_female" name="showbrand_female" />
                    <div class="hidden_show-lecoq_female hidden_show">
                        <!--非表示ここから-->
                        <p class="coordTitle">Lecoqのコーデ</p>
                        <div class="coordWrapper">
                            <input type="radio" class="radioInput" id="72" value="72" name="coorditem">
                            <label class="genderRadiobox" for="72">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/72.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="73" value="73" name="coorditem">
                            <label class="genderRadiobox" for="73">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/73.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="74" value="74" name="coorditem">
                            <label class="genderRadiobox" for="74">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/74.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="75" value="75" name="coorditem">
                            <label class="genderRadiobox" for="75">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/75.png') }}" alt="">
                            </label>

                        </div>
                        <!--ここまで-->
                    </div>

                    {{-- hydrogen --}}
                    <input type="radio" id="hydrogen_female" name="showbrand_female" />
                    <div class="hidden_show-hydrogen_female hidden_show">
                        <!--非表示ここから-->
                        <p class="coordTitle">Hydrogenのコーデ</p>
                        <div class="coordWrapper">
                            <input type="radio" class="radioInput" id="76" value="76" name="coorditem">
                            <label class="genderRadiobox" for="76">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/76.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="77" value="77" name="coorditem">
                            <label class="genderRadiobox" for="77">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/77.png') }}" alt="">
                            </label>

                            <input type="radio" class="radioInput" id="78" value="78" name="coorditem">
                            <label class="genderRadiobox" for="78">
                                <img class="wearSet" src="{{ asset('/img/firstcoord/78.png') }}" alt="">
                            </label>

                        </div>
                        <!--ここまで-->
                    </div>


                </div>
            </div>
        </div>

    </div>
</div>
