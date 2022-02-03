<div class="input-group">
    <p class="m-auto p-2">ブランド : </p>
    <select class="custom-select" id="brand" name="brand" aria-label="Example select with button addon">
        <option @if (\Request::get('brand') === null) selected @endif value="0">全て</option>
        <option @if (\Request::get('brand') === 'adidas') selected @endif value="adidas">Adidas</option>
        <option @if (\Request::get('brand') === 'nike') selected @endif value="nike">Nike</option>
        <option @if (\Request::get('brand') === 'yonex') selected @endif value="yonex">Yonex</option>
        <option @if (\Request::get('brand') === 'asics') selected @endif value="asics">Asics</option>
        <option @if (\Request::get('brand') === 'diadora') selected @endif value="diadora">Diadora</option>
        <option @if (\Request::get('brand') === 'prince') selected @endif value="prince">Prince</option>
        <option @if (\Request::get('brand') === 'fila') selected @endif value="fila">FILA</option>
        <option @if (\Request::get('brand') === 'underarmour') selected @endif value="underarmour">Underarmour</option>
        <option @if (\Request::get('brand') === 'ellesse') selected @endif value="ellesse">ellesse</option>
        <option @if (\Request::get('brand') === 'babolat') selected @endif value="babolat">babolat</option>
        <option @if (\Request::get('brand') === 'hydrogen') selected @endif value="hydrogen">Hydrogen</option>
        <option @if (\Request::get('brand') === 'lecoq') selected @endif value="lecoq">ellesse</option>
        <option @if (\Request::get('brand') === 'lacoste') selected @endif value="lacoste">lacoste</option>
        <option @if (\Request::get('brand') === 'yuuchan') selected @endif value="yuuchan">yuuchan</option>
        <option @if (\Request::get('brand') === 'ralosso') selected @endif value="ralosso">ralosso</option>
        <option @if (\Request::get('brand') === 'marc_de_paw') selected @endif value="marc_de_paw">Marc De Paw</option>
        <option @if (\Request::get('brand') === 'tenez') selected @endif value="tenez">10EZ</option>
        <option @if (\Request::get('brand') === 'yoxoi') selected @endif value="yoxoi">YOXOI</option>
    </select>
</div>
