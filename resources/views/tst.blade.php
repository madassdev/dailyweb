<div>
@php
$paramsHtml = '<ul>receive mail';

    // foreach (request()->all() as $key => $value) {
    //     $paramsHtml .= '<li><strong>' . htmlspecialchars($key) . ':</strong> ' . htmlspecialchars($value) . '</li>';
    // }

    $paramsHtml .= '</ul>';
@endphp
New msg received
    {!! $paramsHtml !!}
</div>