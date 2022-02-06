@if (isset($detail))
    <div class="input-group">
        <p class="m-auto p-2">カテゴリー : </p>
        <select class="custom-select" id="category" name="category" aria-label="Example select with button addon">
            <optgroup label="Caps"></optgroup>
            <option @if ($detail->category == '565818') selected  @else disabled @endif value="565818">キャップス（565818）</option>
            <optgroup label="Tops">Tops</optgroup>
            <option value="508803" @if ($detail->category == '508803') selected  @else disabled @endif>半袖（508803）</option>
            <option value="565927" @if ($detail->category == '565927') selected  @else disabled @endif>アウター（565927）</option>
            <option value="500316" @if ($detail->category == '500316') selected  @else disabled @endif>ワンピース（500316）</option>
            <optgroup label="Pants">Pants</optgroup>
            <option value="508820" @if ($detail->category == '508820') selected  @else disabled @endif>ショート（508820）</option>
            <option value="565928" @if ($detail->category == '565928') selected  @else disabled @endif>ロング（565928）</option>
            <option value="565816" @if ($detail->category == '565816') selected  @else disabled @endif>スカート（565816）</option>
            <optgroup label="Shoes">Shoes</optgroup>
            <option value="565819" @if ($detail->category == '565819') selected  @else disabled @endif>シューズ（565819）</option>
        </select>
    </div>
    @else
        <div class="input-group">
            <p class="m-auto p-2">カテゴリー : </p>
            <select class="custom-select" id="category" name="category" aria-label="Example select with button addon">
                <optgroup label="Caps"></optgroup>
                <option @if (\Request::get('category') === '565818') selected @endif value="565818">キャップス（565818）</option>
                <optgroup label="Tops">Tops</optgroup>
                <option value="508803" @if (\Request::get('category') == '508803') selected @endif>半袖（508803）</option>
                <option value="565927" @if (\Request::get('category') == '565927') selected @endif>アウター（565927）</option>
                <option value="500316" @if (\Request::get('category') == '500316') selected @endif>ワンピース（500316）</option>
                <optgroup label="Pants">Pants</optgroup>
                <option value="508820" @if (\Request::get('category') == '508820') selected @endif>ショート（508820）</option>
                <option value="565928" @if (\Request::get('category') == '565928') selected @endif>ロング（565928）</option>
                <option value="565816" @if (\Request::get('category') == '565816') selected @endif>スカート（565816）</option>
                <optgroup label="Shoes">Shoes</optgroup>
                <option value="565819" @if (\Request::get('category') == '565819') selected @endif>シューズ（565819）</option>
            </select>
        </div>
    @endif
