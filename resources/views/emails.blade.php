@component('mail::message')
    #introduction

    body

    @component('mail::button', ['url' => ''])
        Button text
    @endcomponent

    Thanks,<br />
    {{ config('app.name') }}
@endcomponent
