@if (isset($detail))
    <div class="input-group">
        <p class="m-auto p-2">色 : </p>
        <select class="custom-select" id="color" name="color" aria-label="Example select with button addon">
            <option @if ($color === 'black') selected @endif value="black">black</option>
            <option @if ($color === 'white') selected @endif value="white">white</option>
            <option @if ($color === 'blue') selected @endif value="blue">blue</option>
            <option @if ($color === 'red') selected @endif value="red">red</option>
            <option @if ($color === 'green') selected @endif value="green">green</option>
            <option @if ($color === 'yellow') selected @endif value="yellow">yellow</option>
            <option @if ($color === 'navy') selected @endif value="navy">navy</option>
            <option @if ($color === 'pink') selected @endif value="pink">pink</option>
            <option @if ($color === 'orange') selected @endif value="orange">orange</option>
            <option @if ($color === 'purple') selected @endif value="purple">purple</option>
            <option @if ($color === 'gray') selected @endif value="gray">gray</option>
        </select>
    </div>
@else
    <div class="input-group">
        <p class="m-auto p-2">色 : </p>
    <select class="custom-select" id="color" name="color" aria-label="Example select with button addon">
        <option @if (\Request::get('color') === 'black') selected @elseif (old('color')=='black') selected @endif value="black">black</option>
        <option @if (\Request::get('color') === 'white') selected @elseif (old('color')=='white') selected @endif value="white">white</option>
        <option @if (\Request::get('color') === 'blue') selected @elseif (old('color')=='blue') selected @endif value="blue">blue</option>
        <option @if (\Request::get('color') === 'red') selected @elseif (old('color')=='red') selected @endif value="red">red</option>
        <option @if (\Request::get('color') === 'green') selected @elseif (old('color')=='green') selected @endif value="green">green</option>
        <option @if (\Request::get('color') === 'yellow') selected @elseif (old('color')=='yellow') selected @endif value="yellow">yellow</option>
        <option @if (\Request::get('color') === 'navy') selected @elseif (old('color')=='navy') selected @endif value="navy">navy</option>
        <option @if (\Request::get('color') === 'pink') selected @elseif (old('color')=='pink') selected @endif value="pink">pink</option>
        <option @if (\Request::get('color') === 'orange') selected @elseif (old('color')=='orange') selected @endif value="orange">orange</option>
        <option @if (\Request::get('color') === 'purple') selected @elseif (old('color')=='purple') selected @endif value="purple">purple</option>
        <option @if (\Request::get('color') === 'gray') selected @elseif (old('color')=='gray') selected @endif value="gray">gray</option>
    </select>
    </div>
@endif
