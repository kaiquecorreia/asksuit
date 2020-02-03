exports.url =
  'https://myreservations.omnibees.com/chain.aspx?c=2983&lang=pt-br&ad=2&_ga=2.35420449.1094503460.1580646946-2046231073.1580646946&version=MyReservation&sid=68780cfa-ebd4-4a0b-b672-be767033c7f4#/hotel=&hotelname=&CheckIn=06032020&CheckOut=08032020&Code=&group_code=&loyality_card=&NRooms=1&ad=2&ch=0&ag=-';
exports.html = `
<div id="search_results">
<div class="filters">
<div class="nav">
<h4>Temos 3 Hotéis Disponíveis.</h4>
</div>
<div class="clear"></div>
<div id="packageSearchParameters">
<div class="packageSearchParametersForm">

<div class="info clearfix">
<div class="qs_checkin qs_field" id="qs_checkin_singleSearch">
<label>Check-in</label>
<input type="text" readonly="readonly" maxlength="10" name="qscheckin_1" id="qscheckin_1" value="06/03/2020" title="Check-in" class="hasDatepicker">
</div>
<div class="qs_checkout qs_field" id="qs_checkout_singleSearch">
<label>Check-out</label>
<input type="text" readonly="readonly" maxlength="10" name="qscheckout_1" id="qscheckout_1" value="08/03/2020" title="Check-out" class="hasDatepicker">
</div>
<div class="qs_NrRooms qs_field">
<span class="rooms">Apartamentos</span>
(<span class="roomsLabelNr" id="qs_NrRooms_label">1</span>)
<br>
<select id="selectRoomsNr" style="display: none;">
<option value="1" selected="selected">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
</select>
</div>
<div class="qs_NrAdults qs_field">
<span class="adults">Adultos</span>
(<span class="qs_NrAdults_label">1</span>)
<br>
<select class="qs_selectAdults" id="qs_selectAdults_1" style="display: none;">
<option value="1" selected="selected">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
</select>
</div>

<div style="float: left">
<div class="qs_childrens qs_field" id="qs_childrens_1">
<div class="children_button">
<span class="childrens">Crianças</span>
(<span class="qs_NrChildrens_label">0</span>)
</div>
</div>
<div class="qs_children_ages" id="qs_children_ages_1">
<input type="text" class="active txtAges" id="txtAges_1" readonly="readonly" value="-">
<div class="select_qs_children_ages" style="display: none;">
<div class="drops">
<div class="selectTotal">
<label for="advchild_1"><b>Nº DE CRIANÇAS</b></label>
<select name="children" onchange="changeQsChildrenNr(event);" id="qschildren_1">
<option value="0" selected="selected">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
</select>
</div>
</div>
<div class="clear"></div>
<div class="save"><a href="#" class="beBtnBkgColor beButtonTextColor">Salvar</a></div>
</div>
</div>
</div>

<div style="float: left">
<div class="qs_code qs_field">
<div class="code_button ">
<div class="codes" title="Cód. Promocional">Cód. Promocional</div>
</div>
</div>
<div class="qs_codes_select">
<div class="select_qs_codes" style="display: none;">
<div class="drops">
<div class="selectCode"></div>
<div class="inputCode"></div>
</div>
<div class="clear"></div>
<div class="save"><a href="#" class="beBtnBkgColor beButtonTextColor">Salvar</a></div>
</div>
</div>
</div>
</div>
<div class="searchHolder">
<div class="quickSearch">
<a id="btnQuickSearch" class="beBtnBkgColor beButtonTextColor" onclick="QuickSearchFired();  return false;">Buscar</a>
<div class="loadingAnimation">
<div class="uil-default-css">
<div style="top: 80px; left: 93px; width: 14px; height: 40px; background: #ffffff; -webkit-transform: rotate(0deg) translate(0,-60px); transform: rotate(0deg) translate(0,-60px); border-radius: 10px; position: absolute;"></div>
<div style="top: 80px; left: 93px; width: 14px; height: 40px; background: #ffffff; -webkit-transform: rotate(30deg) translate(0,-60px); transform: rotate(30deg) translate(0,-60px); border-radius: 10px; position: absolute;"></div>
<div style="top: 80px; left: 93px; width: 14px; height: 40px; background: #ffffff; -webkit-transform: rotate(60deg) translate(0,-60px); transform: rotate(60deg) translate(0,-60px); border-radius: 10px; position: absolute;"></div>
<div style="top: 80px; left: 93px; width: 14px; height: 40px; background: #ffffff; -webkit-transform: rotate(90deg) translate(0,-60px); transform: rotate(90deg) translate(0,-60px); border-radius: 10px; position: absolute;"></div>
<div style="top: 80px; left: 93px; width: 14px; height: 40px; background: #ffffff; -webkit-transform: rotate(120deg) translate(0,-60px); transform: rotate(120deg) translate(0,-60px); border-radius: 10px; position: absolute;"></div>
<div style="top: 80px; left: 93px; width: 14px; height: 40px; background: #ffffff; -webkit-transform: rotate(150deg) translate(0,-60px); transform: rotate(150deg) translate(0,-60px); border-radius: 10px; position: absolute;"></div>
<div style="top: 80px; left: 93px; width: 14px; height: 40px; background: #ffffff; -webkit-transform: rotate(180deg) translate(0,-60px); transform: rotate(180deg) translate(0,-60px); border-radius: 10px; position: absolute;"></div>
<div style="top: 80px; left: 93px; width: 14px; height: 40px; background: #ffffff; -webkit-transform: rotate(210deg) translate(0,-60px); transform: rotate(210deg) translate(0,-60px); border-radius: 10px; position: absolute;"></div>
<div style="top: 80px; left: 93px; width: 14px; height: 40px; background: #ffffff; -webkit-transform: rotate(240deg) translate(0,-60px); transform: rotate(240deg) translate(0,-60px); border-radius: 10px; position: absolute;"></div>
<div style="top: 80px; left: 93px; width: 14px; height: 40px; background: #ffffff; -webkit-transform: rotate(270deg) translate(0,-60px); transform: rotate(270deg) translate(0,-60px); border-radius: 10px; position: absolute;"></div>
<div style="top: 80px; left: 93px; width: 14px; height: 40px; background: #ffffff; -webkit-transform: rotate(300deg) translate(0,-60px); transform: rotate(300deg) translate(0,-60px); border-radius: 10px; position: absolute;"></div>
<div style="top: 80px; left: 93px; width: 14px; height: 40px; background: #ffffff; -webkit-transform: rotate(330deg) translate(0,-60px); transform: rotate(330deg) translate(0,-60px); border-radius: 10px; position: absolute;"></div>
</div>
</div>
</div>
<a class="check btnSearchPackage beBtnBkgColor beButtonTextColor" onclick="toggleSearch()">Alterar pesquisa</a>

</div>
</div>
</div>
<div class="clear"></div>
</div>
<div class="clear"></div>
<div id="filterTabsMain">
<div id="filterTabs" class="beBorderBtnBkgColor">
<div class="tab">
<a class="active beBtnBkgColor" id="tab_1" href="#">
<svg x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve"><use xlink:href="#icon-hotel"></use></svg>
HOTÉIS</a>
</div>
<div id="ctl01_tab_packages" class="tab">
<a class="show_map" id="tab_2" href="javascript:void();">
<svg style="margin: 12px 0 0 15px" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve"><use xlink:href="#icon-map"></use></svg>
Ver Mapa</a>
</div>
</div>
</div>
<div class="clear"></div>

<div class="wrap_map">
<div id="map">
</div>
</div>
<div class="clear"></div>
<div class="entries">
<div class="entry available">
<div class="thumb">
<div class="image">
<a name="/ToolTips/Photo.aspx?sz=400x275&amp;imageID=395849" class="image_tooltip fancybox-thumbs" data-fancybox-group="Magique Le Canton" href="/Handlers/ImageLoader.ashx?imageID=395849.jpg">
<img width="250" height="165" src="/Handlers/ImageLoader.ashx?sz=250x165&amp;imageID=395849.jpg">
</a>
</div>
<a class="fancybox-thumbs" href="/Handlers/ImageLoader.ashx?imageID=395850.jpg" data-fancybox-group="Magique Le Canton" style="display: none">
<img width="1" height="1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
</a>
<a class="fancybox-thumbs" href="/Handlers/ImageLoader.ashx?imageID=395851.jpg" data-fancybox-group="Magique Le Canton" style="display: none">
<img width="1" height="1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
</a>
<a class="fancybox-thumbs" href="/Handlers/ImageLoader.ashx?imageID=395852.jpg" data-fancybox-group="Magique Le Canton" style="display: none">
<img width="1" height="1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
 </a>
<a class="fancybox-thumbs" href="/Handlers/ImageLoader.ashx?imageID=395853.jpg" data-fancybox-group="Magique Le Canton" style="display: none">
<img width="1" height="1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
</a>
<a class="fancybox-thumbs" href="/Handlers/ImageLoader.ashx?imageID=395854.jpg" data-fancybox-group="Magique Le Canton" style="display: none">
<img width="1" height="1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
</a>
<a class="fancybox-thumbs" href="/Handlers/ImageLoader.ashx?imageID=395855.jpg" data-fancybox-group="Magique Le Canton" style="display: none">
<img width="1" height="1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
</a>
<a class="fancybox-thumbs" href="/Handlers/ImageLoader.ashx?imageID=395856.jpg" data-fancybox-group="Magique Le Canton" style="display: none">
<img width="1" height="1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
</a>
<a class="fancybox-thumbs" href="/Handlers/ImageLoader.ashx?imageID=395857.jpg" data-fancybox-group="Magique Le Canton" style="display: none">
<img width="1" height="1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
</a>
<a class="fancybox-thumbs" href="/Handlers/ImageLoader.ashx?imageID=395858.jpg" data-fancybox-group="Magique Le Canton" style="display: none">
<img width="1" height="1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
</a>
<a class="fancybox-thumbs" href="/Handlers/ImageLoader.ashx?imageID=395859.jpg" data-fancybox-group="Magique Le Canton" style="display: none">
<img width="1" height="1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
</a>
<a class="fancybox-thumbs" href="/Handlers/ImageLoader.ashx?imageID=395860.jpg" data-fancybox-group="Magique Le Canton" style="display: none">
<img width="1" height="1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
</a>
<a class="fancybox-thumbs" href="/Handlers/ImageLoader.ashx?imageID=395861.jpg" data-fancybox-group="Magique Le Canton" style="display: none">
<img width="1" height="1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
</a>
<div class="tabs">
<a class="active tab_1" href="#" title="Visão Geral">Visão Geral</a>
<a class="normal tab_2" href="#" title="Serviços">Serviços</a>
<a class="normal tab_3" href="#" title="Fotos">Fotos</a>
<a class="normal tab_4" href="#" onclick="javascript:updateMap('iframe_8795');" title="Mapa">Mapa</a>
</div>
</div>
<div class="description">
<div style="float: left; width: 700px; height: 165px;">
<div style="float: left; width: 530px">
<div style="float: left; width: 500px; height: 122px;">
<h5><a href="/default.aspx?q=8795&amp;lang=pt-BR&amp;sid=b252e2dc-dd55-4b06-8e55-87ba21712e2b#/diff=&amp;CheckIn=06032020&amp;CheckOut=08032020&amp;NRooms=1&amp;ad=1&amp;ch=0&amp;ag=-&amp;Code=&amp;group_code=&amp;loyality_card=" title="Magique Le Canton" class="stars_0">Magique Le Canton</a></h5>
 <p>O Hotel Magique</p>
<p>
<svg x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve" style="float: left;" class="beFillSvg">
<use xlink:href="#icon-map"></use>
</svg>
<span class="address">Rua Antonio Silva 300, Teresopolis, Brasil 25990150 Telefone: +55 21 40001150</span>
</p>
</div>
<div class="more_details"><a class="normal beBtnBorderColor beBtnTextColor" href="#" title="Detalhes">Detalhes</a></div>
</div>
<div style="float: left; width: 170px; height: 165px;">
<div class="price">
<div style="padding-top: 0px !important">
<div class="chainPriceHotelResult bestChainPriceBorderColor">
<p><span>A partir de</span></p>
<h5 class="bestChainPriceTextColor">R$ 1.002,25</h5>
<p>Por Noite</p>
</div>
<div class="clear"></div>
<a onclick="showSpecialModal('#mod_GeneralPageLoading');" href="/default.aspx?q=8795&amp;lang=pt-BR&amp;sid=b252e2dc-dd55-4b06-8e55-87ba21712e2b#/diff=&amp;CheckIn=06032020&amp;CheckOut=08032020&amp;NRooms=1&amp;ad=1&amp;ch=0&amp;ag=-&amp;Code=&amp;group_code=&amp;loyality_card=" title="Reserve Já">Reserve Já</a>
</div>
</div>
</div>
</div>
<div class="clear"></div>
<div class="clear"></div>
<div class="tabs_content">
<div class="tab_1 pane">
<p>O Hotel Magique description</p>
</div>
<div class="tab_2 pane">
<div class="amenities">
<h6>Serviços Gerais</h6>
<ul>
<li>- Serviços/Sala de Bagagem</li>
<li>- Berço disponivel a pedido</li>
<li>- Quartos para Deficientes</li>
<li>- Aceita os principais cartões de crédito</li>
<li>- Acessibilidade para Cadeira de Rodas</li>
<li>- Serviço de limpeza diário</li>
<li>- Internet Banda Larga</li>
<li>- Recepção 24 horas</li>
<li>- Estacionamento</li>
<li>- Estacionamento Gratuito</li>

<li>- Lojas/Shopping</li>
<li>- Free Wifi</li>
</ul>
</div>
<div class="amenities">
<h6>Restaurantes e Bares</h6>
<ul>
<li>- Serviço de Quarto 24 horas</li>
<li>- Bar</li>
<li>- Restaurante</li>
<li>- Bar de Piscina</li>
<li>- Restaurante Privado</li>
<li>- Restaurante Buffet</li>
</ul>
</div>
<div class="amenities">
<h6>Bem-estar e Lazer</h6>
<ul>
<li>- SPA</li>
<li>- Serviço de Massagens</li>
<li>- Piscina</li>
<li>- Piscina Interior</li>
<li>- Espaço Kids</li>
<li>- Campo de Ténis</li>
<li>- Sauna</li>
<li>- Academia de ginástica gratuita</li>
</ul>
</div>
<div class="amenities">
<h6>Eventos &amp; Conferências</h6>
<ul>
<li>- Salas de Reuniões</li>
<li>- Sala de Reuniões</li>
</ul>
</div>
<div class="clear"></div>
</div>
<div class="tab_3 pane">
<ul>
<li class="gallery">
<ul class="big_preview">
<li><a href="#">
<img alt="Title" title="Title" src="/Handlers/ImageLoader.ashx?imageID=395849&amp;sz=400x266"></a></li>
</ul>
<ul class="small_preview">
<li>
<img width="90" rel="0" src="/Handlers/ImageLoader.ashx?imageID=395849&amp;sz=400x266" name="/Handlers/ImageLoader.ashx?imageID=395849&amp;sz=400x266">
<img width="90" rel="1" src="/Handlers/ImageLoader.ashx?imageID=395850&amp;sz=400x266" name="/Handlers/ImageLoader.ashx?imageID=395850&amp;sz=400x266">
<img width="90" rel="2" src="/Handlers/ImageLoader.ashx?imageID=395851&amp;sz=400x266" name="/Handlers/ImageLoader.ashx?imageID=395851&amp;sz=400x266">
<img width="90" rel="3" src="/Handlers/ImageLoader.ashx?imageID=395852&amp;sz=400x266" name="/Handlers/ImageLoader.ashx?imageID=395852&amp;sz=400x266">
<img width="90" rel="4" src="/Handlers/ImageLoader.ashx?imageID=395853&amp;sz=400x266" name="/Handlers/ImageLoader.ashx?imageID=395853&amp;sz=400x266">
<img width="90" rel="5" src="/Handlers/ImageLoader.ashx?imageID=395854&amp;sz=400x266" name="/Handlers/ImageLoader.ashx?imageID=395854&amp;sz=400x266">
<img width="90" rel="6" src="/Handlers/ImageLoader.ashx?imageID=395855&amp;sz=400x266" name="/Handlers/ImageLoader.ashx?imageID=395855&amp;sz=400x266">
<img width="90" rel="7" src="/Handlers/ImageLoader.ashx?imageID=395856&amp;sz=400x266" name="/Handlers/ImageLoader.ashx?imageID=395856&amp;sz=400x266">
<img width="90" rel="8" src="/Handlers/ImageLoader.ashx?imageID=395857&amp;sz=400x266" name="/Handlers/ImageLoader.ashx?imageID=395857&amp;sz=400x266">
<img width="90" rel="9" src="/Handlers/ImageLoader.ashx?imageID=395858&amp;sz=400x266" name="/Handlers/ImageLoader.ashx?imageID=395858&amp;sz=400x266">
<img width="90" rel="10" src="/Handlers/ImageLoader.ashx?imageID=395859&amp;sz=400x266" name="/Handlers/ImageLoader.ashx?imageID=395859&amp;sz=400x266">
<img width="90" rel="11" src="/Handlers/ImageLoader.ashx?imageID=395860&amp;sz=400x266" name="/Handlers/ImageLoader.ashx?imageID=395860&amp;sz=400x266">
<img width="90" rel="12" src="/Handlers/ImageLoader.ashx?imageID=395861&amp;sz=400x266" name="/Handlers/ImageLoader.ashx?imageID=395861&amp;sz=400x266">
</li>
</ul>
</li>
</ul>
</div>
<div class="tab_4 pane">
<div class="wrap_embedmap">
<iframe id="iframe_8795" style="background-color: transparent;" height="265" frameborder="0" width="706" scrolling="no" src="/util/geoLocation.aspx?lat=-22.3852588&amp;lng=-42.8568151&amp;language=pt-BR" marginwidth="0" marginheight="0"></iframe>
</div>

</div>
</div>
</div>
<!--[if IE 7]><div class="clear"></div><![endif]-->
</div>

<div class="entry available">
<div class="thumb">
<div class="image">
<a name="/ToolTips/Photo.aspx?sz=400x275&amp;imageID=152248" class="image_tooltip fancybox-thumbs" data-fancybox-group="Hotel Village Le Canton" href="/Handlers/ImageLoader.ashx?imageID=152248.jpg">
<img width="250" height="165" src="/Handlers/ImageLoader.ashx?sz=250x165&amp;imageID=152248.jpg">
</a>
</div>
<a class="fancybox-thumbs" href="/Handlers/ImageLoader.ashx?imageID=152251.jpg" data-fancybox-group="Hotel Village Le Canton" style="display: none">
<img width="1" height="1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
</a>
<a class="fancybox-thumbs" href="/Handlers/ImageLoader.ashx?imageID=152252.jpg" data-fancybox-group="Hotel Village Le Canton" style="display: none">
<img width="1" height="1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
</a>
<a class="fancybox-thumbs" href="/Handlers/ImageLoader.ashx?imageID=152253.jpg" data-fancybox-group="Hotel Village Le Canton" style="display: none">
<img width="1" height="1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
</a>
<a class="fancybox-thumbs" href="/Handlers/ImageLoader.ashx?imageID=152254.jpg" data-fancybox-group="Hotel Village Le Canton" style="display: none">
<img width="1" height="1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
</a>
<a class="fancybox-thumbs" href="/Handlers/ImageLoader.ashx?imageID=152586.jpg" data-fancybox-group="Hotel Village Le Canton" style="display: none">
<img width="1" height="1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
</a>
<a class="fancybox-thumbs" href="/Handlers/ImageLoader.ashx?imageID=152589.jpg" data-fancybox-group="Hotel Village Le Canton" style="display: none">
<img width="1" height="1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
</a>
<a class="fancybox-thumbs" href="/Handlers/ImageLoader.ashx?imageID=152590.jpg" data-fancybox-group="Hotel Village Le Canton" style="display: none">
<img width="1" height="1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
</a>
<a class="fancybox-thumbs" href="/Handlers/ImageLoader.ashx?imageID=152591.jpg" data-fancybox-group="Hotel Village Le Canton" style="display: none">
<img width="1" height="1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
</a>
<a class="fancybox-thumbs" href="/Handlers/ImageLoader.ashx?imageID=191219.jpg" data-fancybox-group="Hotel Village Le Canton" style="display: none">
<img width="1" height="1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
</a>
<div class="tabs">
<a class="active tab_1" href="#" title="Visão Geral">Visão Geral</a>
<a class="normal tab_2" href="#" title="Serviços">Serviços</a>
<a class="normal tab_3" href="#" title="Fotos">Fotos</a>
<a class="normal tab_4" href="#" onclick="javascript:updateMap('iframe_5462');" title="Mapa">Mapa</a>
</div>
</div>
<div class="description">
<div style="float: left; width: 700px; height: 165px;">
<div style="float: left; width: 530px">
<div style="float: left; width: 500px; height: 122px;">
<h5><a href="/default.aspx?q=5462&amp;lang=pt-BR&amp;sid=b252e2dc-dd55-4b06-8e55-87ba21712e2b#/diff=&amp;CheckIn=06032020&amp;CheckOut=08032020&amp;NRooms=1&amp;ad=1&amp;ch=0&amp;ag=-&amp;Code=&amp;group_code=&amp;loyality_card=" title="Hotel Village Le Canton" class="stars_0">Hotel Village Le Canton</a></h5>
<p>Hotel VillageAconchegantes e requintados, nossos 161 apartamentos oferecem todas as comodidades para proporcionar a você uma estadia agradável. ...</p>
<p>
<svg x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve" style="float: left;" class="beFillSvg">
<use xlink:href="#icon-map"></use>
</svg>
<span class="address">Rua Antônio Silva, 300, Teresopolis, Brasil 25990-150 Telefone: 40001150</span>
</p>
</div>
<div class="more_details"><a class="normal beBtnBorderColor beBtnTextColor" href="#" title="Detalhes">Detalhes</a></div>
</div>
<div style="float: left; width: 170px; height: 165px;">
<div class="price">
<div style="padding-top: 0px !important">
<div class="chainPriceHotelResult bestChainPriceBorderColor">
<p><span>A partir de</span></p>
<h5 class="bestChainPriceTextColor">R$ 1.045,00</h5>
<p>Por Noite</p>
</div>
<div class="clear"></div>
<a onclick="showSpecialModal('#mod_GeneralPageLoading');" href="/default.aspx?q=5462&amp;lang=pt-BR&amp;sid=b252e2dc-dd55-4b06-8e55-87ba21712e2b#/diff=&amp;CheckIn=06032020&amp;CheckOut=08032020&amp;NRooms=1&amp;ad=1&amp;ch=0&amp;ag=-&amp;Code=&amp;group_code=&amp;loyality_card=" title="Reserve Já">Reserve Já</a>
</div>
</div>
</div>
</div>
<div class="clear"></div>
<div class="clear"></div>
<div class="tabs_content">
<div class="tab_1 pane">
<p>Hotel Village description</p>
</div>
<div class="tab_2 pane">
<div class="amenities">
<h6>Serviços Gerais</h6>
<ul>
<li>- Berço disponivel a pedido</li>
<li>- Quartos para Deficientes</li>
<li>- Aceita os principais cartões de crédito</li>
<li>- Acessibilidade para Cadeira de Rodas</li>
<li>- Serviço de limpeza diário</li>
<li>- Sala de tv</li>
<li>- Sala de Jogos</li>
<li>- Recepção 24 horas</li>
<li>- Estacionamento Gratuito</li>
<li>- Lojas/Shopping</li>
<li>- Free Wifi</li>
</ul>
</div>
<div class="amenities">
<h6>Restaurantes e Bares</h6>
<ul>
<li>- Bar</li>
<li>- Bar de Piscina</li>
<li>- Restaurante Buffet</li>
</ul>
</div>
<div class="amenities">
<h6>Bem-estar e Lazer</h6>
<ul>
<li>- SPA</li>
<li>- Serviço de Massagens</li>
<li>- Piscina</li>
<li>- Espaço Kids</li>
<li>- Mesa de Bilhar</li>
<li>- Parquinho</li>
<li>- Academia de ginástica gratuita</li>
</ul>
</div>
<div class="amenities">
<h6>Eventos &amp; Conferências</h6>
<ul>
<li>- Salas de Reuniões</li>
<li>- Sala de Reuniões</li>
</ul>
</div>
<div class="clear"></div>
</div>
<div class="tab_3 pane">
<ul>
<li class="gallery">
<ul class="big_preview">
<li><a href="#">
<img alt="Title" title="Title" src="/Handlers/ImageLoader.ashx?imageID=152248&amp;sz=400x266"></a></li>
</ul>
<ul class="small_preview">
<li>
<img width="90" rel="0" src="/Handlers/ImageLoader.ashx?imageID=152248&amp;sz=400x266" name="/Handlers/ImageLoader.ashx?imageID=152248&amp;sz=400x266">
<img width="90" rel="1" src="/Handlers/ImageLoader.ashx?imageID=152251&amp;sz=400x266" name="/Handlers/ImageLoader.ashx?imageID=152251&amp;sz=400x266">
<img width="90" rel="2" src="/Handlers/ImageLoader.ashx?imageID=152252&amp;sz=400x266" name="/Handlers/ImageLoader.ashx?imageID=152252&amp;sz=400x266">
<img width="90" rel="3" src="/Handlers/ImageLoader.ashx?imageID=152253&amp;sz=400x266" name="/Handlers/ImageLoader.ashx?imageID=152253&amp;sz=400x266">
<img width="90" rel="4" src="/Handlers/ImageLoader.ashx?imageID=152254&amp;sz=400x266" name="/Handlers/ImageLoader.ashx?imageID=152254&amp;sz=400x266">
<img width="90" rel="5" src="/Handlers/ImageLoader.ashx?imageID=152586&amp;sz=400x266" name="/Handlers/ImageLoader.ashx?imageID=152586&amp;sz=400x266">
<img width="90" rel="6" src="/Handlers/ImageLoader.ashx?imageID=152589&amp;sz=400x266" name="/Handlers/ImageLoader.ashx?imageID=152589&amp;sz=400x266">
<img width="90" rel="7" src="/Handlers/ImageLoader.ashx?imageID=152590&amp;sz=400x266" name="/Handlers/ImageLoader.ashx?imageID=152590&amp;sz=400x266">
<img width="90" rel="8" src="/Handlers/ImageLoader.ashx?imageID=152591&amp;sz=400x266" name="/Handlers/ImageLoader.ashx?imageID=152591&amp;sz=400x266">
<img width="90" rel="9" src="/Handlers/ImageLoader.ashx?imageID=191219&amp;sz=400x266" name="/Handlers/ImageLoader.ashx?imageID=191219&amp;sz=400x266">
</li>
</ul>
</li>
</ul>
</div>
<div class="tab_4 pane">
<div class="wrap_embedmap">
<iframe id="iframe_5462" style="background-color: transparent;" height="265" frameborder="0" width="706" scrolling="no" src="/util/geoLocation.aspx?lat=-22.3853285&amp;lng=-42.8561643&amp;language=pt-BR" marginwidth="0" marginheight="0"></iframe>
</div>

</div>
</div>
</div>
<!--[if IE 7]><div class="clear"></div><![endif]-->
</div>

<div class="entry not_available last">
<div class="thumb">
<div class="image">
<a name="/ToolTips/Photo.aspx?sz=400x275&amp;imageID=149597" class="image_tooltip fancybox-thumbs" data-fancybox-group="Hotel Fazenda Suíça Le Canton " href="/Handlers/ImageLoader.ashx?imageID=149597.jpg">
<img width="250" height="165" src="/Handlers/ImageLoader.ashx?sz=250x165&amp;imageID=149597.jpg">
</a>
</div>
<a class="fancybox-thumbs" href="/Handlers/ImageLoader.ashx?imageID=149598.jpg" data-fancybox-group="Hotel Fazenda Suíça Le Canton " style="display: none">
<img width="1" height="1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
</a>
<a class="fancybox-thumbs" href="/Handlers/ImageLoader.ashx?imageID=149599.jpg" data-fancybox-group="Hotel Fazenda Suíça Le Canton " style="display: none">
<img width="1" height="1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
</a>
<a class="fancybox-thumbs" href="/Handlers/ImageLoader.ashx?imageID=149600.jpg" data-fancybox-group="Hotel Fazenda Suíça Le Canton " style="display: none">
<img width="1" height="1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
</a>
<a class="fancybox-thumbs" href="/Handlers/ImageLoader.ashx?imageID=149601.jpg" data-fancybox-group="Hotel Fazenda Suíça Le Canton " style="display: none">
<img width="1" height="1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
</a>
<a class="fancybox-thumbs" href="/Handlers/ImageLoader.ashx?imageID=149602.jpg" data-fancybox-group="Hotel Fazenda Suíça Le Canton " style="display: none">
<img width="1" height="1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
</a>
<a class="fancybox-thumbs" href="/Handlers/ImageLoader.ashx?imageID=149603.jpg" data-fancybox-group="Hotel Fazenda Suíça Le Canton " style="display: none">
<img width="1" height="1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
</a>
<a class="fancybox-thumbs" href="/Handlers/ImageLoader.ashx?imageID=149604.jpg" data-fancybox-group="Hotel Fazenda Suíça Le Canton " style="display: none">
<img width="1" height="1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
</a>
<a class="fancybox-thumbs" href="/Handlers/ImageLoader.ashx?imageID=149605.jpg" data-fancybox-group="Hotel Fazenda Suíça Le Canton " style="display: none">
<img width="1" height="1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
</a>
<a class="fancybox-thumbs" href="/Handlers/ImageLoader.ashx?imageID=149608.jpg" data-fancybox-group="Hotel Fazenda Suíça Le Canton " style="display: none">
<img width="1" height="1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
</a>
<a class="fancybox-thumbs" href="/Handlers/ImageLoader.ashx?imageID=149612.jpg" data-fancybox-group="Hotel Fazenda Suíça Le Canton " style="display: none">
<img width="1" height="1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
</a>
<a class="fancybox-thumbs" href="/Handlers/ImageLoader.ashx?imageID=149613.jpg" data-fancybox-group="Hotel Fazenda Suíça Le Canton " style="display: none">
<img width="1" height="1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
</a>
<a class="fancybox-thumbs" href="/Handlers/ImageLoader.ashx?imageID=149614.jpg" data-fancybox-group="Hotel Fazenda Suíça Le Canton " style="display: none">
<img width="1" height="1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
</a>
<a class="fancybox-thumbs" href="/Handlers/ImageLoader.ashx?imageID=189898.jpg" data-fancybox-group="Hotel Fazenda Suíça Le Canton " style="display: none">
<img width="1" height="1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
</a>
<a class="fancybox-thumbs" href="/Handlers/ImageLoader.ashx?imageID=189901.jpg" data-fancybox-group="Hotel Fazenda Suíça Le Canton " style="display: none">
<img width="1" height="1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
</a>
<a class="fancybox-thumbs" href="/Handlers/ImageLoader.ashx?imageID=189902.jpg" data-fancybox-group="Hotel Fazenda Suíça Le Canton " style="display: none">
<img width="1" height="1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
</a>
<a class="fancybox-thumbs" href="/Handlers/ImageLoader.ashx?imageID=189903.jpg" data-fancybox-group="Hotel Fazenda Suíça Le Canton " style="display: none">
<img width="1" height="1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
</a>
<a class="fancybox-thumbs" href="/Handlers/ImageLoader.ashx?imageID=189904.jpg" data-fancybox-group="Hotel Fazenda Suíça Le Canton " style="display: none">
<img width="1" height="1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
</a>
<a class="fancybox-thumbs" href="/Handlers/ImageLoader.ashx?imageID=189906.jpg" data-fancybox-group="Hotel Fazenda Suíça Le Canton " style="display: none">
<img width="1" height="1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
</a>
<a class="fancybox-thumbs" href="/Handlers/ImageLoader.ashx?imageID=189911.jpg" data-fancybox-group="Hotel Fazenda Suíça Le Canton " style="display: none">
<img width="1" height="1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">
</a>
<div class="tabs">
<a class="active tab_1" href="#" title="Visão Geral">Visão Geral</a>
<a class="normal tab_2" href="#" title="Serviços">Serviços</a>
<a class="normal tab_3" href="#" title="Fotos">Fotos</a>
<a class="normal tab_4" href="#" onclick="javascript:updateMap('iframe_5461');" title="Mapa">Mapa</a>
</div>
</div>
<div class="description">
<div style="float: left; width: 700px; height: 165px;">
<div style="float: left; width: 530px">
<div style="float: left; width: 500px; height: 122px;">
<h5><a href="/default.aspx?q=5461&amp;lang=pt-BR&amp;sid=b252e2dc-dd55-4b06-8e55-87ba21712e2b#/diff=&amp;CheckIn=06032020&amp;CheckOut=08032020&amp;NRooms=1&amp;ad=1&amp;ch=0&amp;ag=-&amp;Code=&amp;group_code=&amp;loyality_card=" title="Hotel Fazenda Suíça Le Canton " class="stars_0">Hotel Fazenda Suíça Le Canton </a></h5>
<p>Hotel Fazenda SuíçaReproduzindo a arquitetura dos campos suíços, o segundo hotel do complexo Le Canton oferece 34 apartamentos nas categorias ...</p>
<p>
<svg x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve" style="float: left;" class="beFillSvg">
<use xlink:href="#icon-map"></use>
</svg>
<span class="address"> Rua Antônio Silva, 300, Teresopolis, Brasil 25990-150 Telefone: 21 2741-4200</span>
</p>
</div>
<div class="more_details"><a class="normal beBtnBorderColor beBtnTextColor" href="#" title="Detalhes">Detalhes</a></div>
</div>
<div style="float: left; width: 170px; height: 165px;">
<div class="price">
<div style="padding-top: 0px !important">
<div class="notAvailableChainPrice">

<label>Indisponível para as datas selecionadas.</label>
</div>
<div class="clear"></div>
<a onclick="showSpecialModal('#mod_GeneralPageLoading');" href="/default.aspx?q=5461&amp;lang=pt-BR&amp;sid=b252e2dc-dd55-4b06-8e55-87ba21712e2b#/diff=&amp;CheckIn=06032020&amp;CheckOut=08032020&amp;NRooms=1&amp;ad=1&amp;ch=0&amp;ag=-&amp;Code=&amp;group_code=&amp;loyality_card=" title="Outras Datas" class="beBtnBkgColor">Outras Datas</a>
</div>
</div>
</div>
</div>
 <div class="clear"></div>
<div class="clear"></div>
<div class="tabs_content">
<div class="tab_1 pane">
<p>Hotel Fazenda Suíça description</p>
</div>
<div class="tab_2 pane">
<div class="amenities">
<h6>Serviços Gerais</h6>
<ul>
<li>- Serviços/Sala de Bagagem</li>
<li>- Berço disponivel a pedido</li>
<li>- Quartos para Deficientes</li>
<li>- Aceita os principais cartões de crédito</li>
<li>- Acessibilidade para Cadeira de Rodas</li>
<li>- Serviço de limpeza diário</li>
<li>- Internet Banda Larga</li>
<li>- Recepção 24 horas</li>
<li>- Estacionamento Gratuito</li>
<li>- Free Wifi</li>
</ul>
</div>
<div class="amenities">
<h6>Restaurantes e Bares</h6>
<ul>
<li>- Bar</li>
<li>- Restaurante</li>
<li>- Bar de Piscina</li>
<li>- Restaurante Buffet</li>
</ul>
</div>
<div class="amenities">
<h6>Bem-estar e Lazer</h6>
<ul>
<li>- Piscina</li>
<li>- Piscina Exterior</li>
<li>- Espaço Kids</li>
<li>- Sauna</li>
<li>- Parquinho</li>
<li>- Academia de ginástica gratuita</li>
</ul>
</div>
<div class="amenities">
<h6>Eventos &amp; Conferências</h6>
<ul>
<li>- Salas de Reuniões</li>
<li>- Serviço de Casamentos</li>
<li>- Centro de Conferências</li>
<li>- Sala de Reuniões</li>
</ul>
</div>
<div class="clear"></div>
</div>
<div class="tab_3 pane">
<ul>
<li class="gallery">
<ul class="big_preview">
<li><a href="#">
<img alt="Title" title="Title" src="/Handlers/ImageLoader.ashx?imageID=149597&amp;sz=400x266"></a></li>
</ul>
<ul class="small_preview">
<li>
<img width="90" rel="0" src="/Handlers/ImageLoader.ashx?imageID=149597&amp;sz=400x266" name="/Handlers/ImageLoader.ashx?imageID=149597&amp;sz=400x266">
<img width="90" rel="1" src="/Handlers/ImageLoader.ashx?imageID=149598&amp;sz=400x266" name="/Handlers/ImageLoader.ashx?imageID=149598&amp;sz=400x266">
<img width="90" rel="2" src="/Handlers/ImageLoader.ashx?imageID=149599&amp;sz=400x266" name="/Handlers/ImageLoader.ashx?imageID=149599&amp;sz=400x266">
<img width="90" rel="3" src="/Handlers/ImageLoader.ashx?imageID=149600&amp;sz=400x266" name="/Handlers/ImageLoader.ashx?imageID=149600&amp;sz=400x266">
<img width="90" rel="4" src="/Handlers/ImageLoader.ashx?imageID=149601&amp;sz=400x266" name="/Handlers/ImageLoader.ashx?imageID=149601&amp;sz=400x266">
<img width="90" rel="5" src="/Handlers/ImageLoader.ashx?imageID=149602&amp;sz=400x266" name="/Handlers/ImageLoader.ashx?imageID=149602&amp;sz=400x266">
<img width="90" rel="6" src="/Handlers/ImageLoader.ashx?imageID=149603&amp;sz=400x266" name="/Handlers/ImageLoader.ashx?imageID=149603&amp;sz=400x266">
<img width="90" rel="7" src="/Handlers/ImageLoader.ashx?imageID=149604&amp;sz=400x266" name="/Handlers/ImageLoader.ashx?imageID=149604&amp;sz=400x266">
<img width="90" rel="8" src="/Handlers/ImageLoader.ashx?imageID=149605&amp;sz=400x266" name="/Handlers/ImageLoader.ashx?imageID=149605&amp;sz=400x266">
<img width="90" rel="9" src="/Handlers/ImageLoader.ashx?imageID=149608&amp;sz=400x266" name="/Handlers/ImageLoader.ashx?imageID=149608&amp;sz=400x266">
<img width="90" rel="10" src="/Handlers/ImageLoader.ashx?imageID=149612&amp;sz=400x266" name="/Handlers/ImageLoader.ashx?imageID=149612&amp;sz=400x266">
<img width="90" rel="11" src="/Handlers/ImageLoader.ashx?imageID=149613&amp;sz=400x266" name="/Handlers/ImageLoader.ashx?imageID=149613&amp;sz=400x266">
<img width="90" rel="12" src="/Handlers/ImageLoader.ashx?imageID=149614&amp;sz=400x266" name="/Handlers/ImageLoader.ashx?imageID=149614&amp;sz=400x266">
<img width="90" rel="13" src="/Handlers/ImageLoader.ashx?imageID=189898&amp;sz=400x266" name="/Handlers/ImageLoader.ashx?imageID=189898&amp;sz=400x266">
<img width="90" rel="14" src="/Handlers/ImageLoader.ashx?imageID=189901&amp;sz=400x266" name="/Handlers/ImageLoader.ashx?imageID=189901&amp;sz=400x266">
<img width="90" rel="15" src="/Handlers/ImageLoader.ashx?imageID=189902&amp;sz=400x266" name="/Handlers/ImageLoader.ashx?imageID=189902&amp;sz=400x266">
<img width="90" rel="16" src="/Handlers/ImageLoader.ashx?imageID=189903&amp;sz=400x266" name="/Handlers/ImageLoader.ashx?imageID=189903&amp;sz=400x266">
<img width="90" rel="17" src="/Handlers/ImageLoader.ashx?imageID=189904&amp;sz=400x266" name="/Handlers/ImageLoader.ashx?imageID=189904&amp;sz=400x266">
<img width="90" rel="18" src="/Handlers/ImageLoader.ashx?imageID=189906&amp;sz=400x266" name="/Handlers/ImageLoader.ashx?imageID=189906&amp;sz=400x266">
<img width="90" rel="19" src="/Handlers/ImageLoader.ashx?imageID=189911&amp;sz=400x266" name="/Handlers/ImageLoader.ashx?imageID=189911&amp;sz=400x266">
</li>
</ul>
</li>
</ul>
</div>
<div class="tab_4 pane">
<div class="wrap_embedmap">
<iframe id="iframe_5461" style="background-color: transparent;" height="265" frameborder="0" width="706" scrolling="no" src="/util/geoLocation.aspx?lat=-22.3853285&amp;lng=-42.8561643&amp;language=pt-BR" marginwidth="0" marginheight="0"></iframe>
</div>

</div>
</div>
</div>
<!--[if IE 7]><div class="clear"></div><![endif]-->
</div>


</div>

<div class="clear"></div>
</div>
`;
