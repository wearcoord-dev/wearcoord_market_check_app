 <div class="input-group">
     <p class="m-auto p-2">カテゴリー : </p>
     <select class="custom-select" id="category" name="category" aria-label="Example select with button addon">
         <optgroup label="Caps"></optgroup>
         <option @if (\Request::get('category') === '506269') selected @endif value="506269">キャップス（506269）</option>
         <optgroup label="Tops">Tops</optgroup>
         <option value="508759" @if (\Request::get('category') == '508759') selected @endif>半袖（508759）</option>
         <option value="565925" @if (\Request::get('category') == '565925') selected @endif>アウター（565925）</option>
         <optgroup label="Pants">Pants</optgroup>
         <option value="508772" @if (\Request::get('category') == '508772') selected @endif>ショート（508772）</option>
         <option value="565926" @if (\Request::get('category') == '565926') selected @endif>ロング（565926）</option>
         <optgroup label="Shoes">Shoes</optgroup>
         <option value="208025" @if (\Request::get('category') == '208025') selected @endif>シューズ（208025）</option>
     </select>
 </div>
