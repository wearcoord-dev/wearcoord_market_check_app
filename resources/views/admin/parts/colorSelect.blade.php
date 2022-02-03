<div class="input-group">
    <p class="m-auto p-2">色 : </p>
    <select class="custom-select" id="color" name="color" aria-label="Example select with button addon">
        <option @if (\Request::get('color') === 'black') selected @endif value="black">black</option>
        <option @if (\Request::get('color') === 'white') selected @endif value="white">white</option>
        <option @if (\Request::get('color') === 'blue') selected @endif value="blue">blue</option>
        <option @if (\Request::get('color') === 'red') selected @endif value="red">red</option>
        <option @if (\Request::get('color') === 'green') selected @endif value="green">green</option>
        <option @if (\Request::get('color') === 'yellow') selected @endif value="yellow">yellow</option>
        <option @if (\Request::get('color') === 'navy') selected @endif value="navy">navy</option>
        <option @if (\Request::get('color') === 'pink') selected @endif value="pink">pink</option>
        <option @if (\Request::get('color') === 'orange') selected @endif value="orange">orange</option>
        <option @if (\Request::get('color') === 'purple') selected @endif value="purple">purple</option>
        <option @if (\Request::get('color') === 'gray') selected @endif value="gray">gray</option>
    </select>
</div>
