@if (isset($detail))
<div class="input-group">
    <p class="m-auto p-2">ブランド : </p>
    <select class="custom-select" id="brand" name="brand" aria-label="Example select with button addon">
        <option @if ($brand === 'adidas') selected @endif value="adidas">Adidas</option>
        <option @if ($brand === 'nike') selected @endif value="nike">Nike</option>
        <option @if ($brand === 'yonex') selected @endif value="yonex">Yonex</option>
        <option @if ($brand === 'asics') selected @endif value="asics">Asics</option>
        <option @if ($brand === 'diadora') selected @endif value="diadora">Diadora</option>
        <option @if ($brand === 'prince') selected @endif value="prince">Prince</option>
        <option @if ($brand === 'fila') selected @endif value="fila">FILA</option>
        <option @if ($brand === 'underarmour') selected @endif value="underarmour">Underarmour</option>
        <option @if ($brand === 'ellesse') selected @endif value="ellesse">ellesse</option>
        <option @if ($brand === 'babolat') selected @endif value="babolat">babolat</option>
        <option @if ($brand === 'hydrogen') selected @endif value="hydrogen">Hydrogen</option>
        <option @if ($brand === 'lecoq') selected @endif value="lecoq">ellesse</option>
        <option @if ($brand === 'lacoste') selected @endif value="lacoste">lacoste</option>
        <option @if ($brand === 'yuuchan') selected @endif value="yuuchan">yuuchan</option>
        <option @if ($brand === 'ralosso') selected @endif value="ralosso">ralosso</option>
        <option @if ($brand === 'marc_de_paw') selected @endif value="marc_de_paw">Marc De Paw</option>
        <option @if ($brand === 'tenez') selected @endif value="tenez">10EZ</option>
        <option @if ($brand === 'yoxoi') selected @endif value="yoxoi">YOXOI</option>
    </select>
</div>
@else
<div class="input-group">
    <p class="m-auto p-2">ブランド : </p>
    <select class="custom-select" id="brand" name="brand" aria-label="Example select with button addon">
        <option @if (\Request::get('brand') === 'adidas') selected @elseif (old('brand')=='adidas') selected @endif value="adidas">Adidas</option>
        <option @if (\Request::get('brand') === 'nike') selected @elseif (old('brand')=='nike') selected @endif value="nike">Nike</option>
        <option @if (\Request::get('brand') === 'yonex') selected @elseif (old('brand')=='yonex') selected @endif value="yonex">Yonex</option>
        <option @if (\Request::get('brand') === 'asics') selected @elseif (old('brand')=='asics') selected @endif value="asics">Asics</option>
        <option @if (\Request::get('brand') === 'diadora') selected @elseif (old('brand')=='diadora') selected @endif value="diadora">Diadora</option>
        <option @if (\Request::get('brand') === 'prince') selected @elseif (old('brand')=='prince') selected @endif value="prince">Prince</option>
        <option @if (\Request::get('brand') === 'fila') selected @elseif (old('brand')=='fila') selected @endif value="fila">FILA</option>
        <option @if (\Request::get('brand') === 'underarmour') selected @elseif (old('brand')=='underarmour') selected @endif value="underarmour">Underarmour</option>
        <option @if (\Request::get('brand') === 'ellesse') selected @elseif (old('brand')=='ellesse') selected @endif value="ellesse">ellesse</option>
        <option @if (\Request::get('brand') === 'babolat') selected @elseif (old('brand')=='babolat') selected @endif value="babolat">babolat</option>
        <option @if (\Request::get('brand') === 'hydrogen') selected @elseif (old('brand')=='hydrogen') selected @endif value="hydrogen">Hydrogen</option>
        <option @if (\Request::get('brand') === 'lecoq') selected @elseif (old('brand')=='lecoq') selected @endif value="lecoq">ellesse</option>
        <option @if (\Request::get('brand') === 'lacoste') selected @elseif (old('brand')=='lacoste') selected @endif value="lacoste">lacoste</option>
        <option @if (\Request::get('brand') === 'yuuchan') selected @elseif (old('brand')=='yuuchan') selected @endif value="yuuchan">yuuchan</option>
        <option @if (\Request::get('brand') === 'ralosso') selected @elseif (old('brand')=='ralosso') selected @endif value="ralosso">ralosso</option>
        <option @if (\Request::get('brand') === 'marc_de_paw') selected @elseif (old('brand')=='marc_de_paw') selected @endif value="marc_de_paw">Marc De Paw</option>
        <option @if (\Request::get('brand') === 'tenez') selected @elseif (old('brand')=='tenez') selected @endif value="tenez">10EZ</option>
        <option @if (\Request::get('brand') === 'yoxoi') selected @elseif (old('brand')=='yoxoi') selected @endif value="yoxoi">YOXOI</option>
    </select>
</div>
@endif