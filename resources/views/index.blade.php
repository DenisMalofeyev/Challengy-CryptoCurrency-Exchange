@extends('layouts.app')

@section('content')
<div class="container">
  <div class="row">
    <div class="col-md-4 pull-right">
      <a href="​https://changelly.com/exchange/BTC/ETH/1?ref_id=1a226cd59eaa" class="btn btn-primary">Create New Account </a>
    </div>
  </div>
  <br>

  <div class="row">
    <div class="col-md-8 col-md-offset-2">
      <iframe src="https://changelly.com/widget/v1?auth=email&from=BTC&to=ETH&merchant_id=1a226cd59eaa&address=&amount=1&ref_id=1a226cd59eaa&color=00cf70" width="800" height="400" class="changelly" scrolling="no" style="overflow-y: hidden; border: none"> Can't load widget </iframe>
    </div>
  </div>
</div>
@endsection
