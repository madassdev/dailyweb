<div>
@php
$paramsHtml = '<ul>xxx';

    // foreach (request()->all() as $key => $value) {
    //     $paramsHtml .= '<li><strong>' . htmlspecialchars($key) . ':</strong> ' . htmlspecialchars($value) . '</li>';
    // }

    $paramsHtml .= '</ul>';
@endphp
New msg received
    {!! $paramsHtml !!}
</div>