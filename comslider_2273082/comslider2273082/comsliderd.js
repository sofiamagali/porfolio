if ((typeof cmsGGI2273082 !== 'undefined') && (cmsGGI2273082 != null) && (typeof cmsGGI2273082.Destroy !== 'undefined')){cmsGGI2273082.Destroy();}function comSlider2273082() { 
var self = this; 
var g_HostRoot = "";
var jssor_slider2273082 = null;cmsGGI2273082 = this;this.Destroy = function(){ if (self.jssor_slider2273082 != null) { self.jssor_slider2273082.$Destroy(); self.jssor_slider2273082 = null;} };  	this.jssor_slider2273082_starter = function (containerId) { 
            var _SlideshowTransitions = [ 
{$Duration:700,$Opacity:2,$Brother:{$Duration:1000,$Opacity:2}}];
			
					var options = {
										$AutoPlay: true,                                   //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
										$Idle: 0,
										$LazyLoading: 1,
										$PlayOrientation: 1,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, default value is 1
										$DragOrientation: 1,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)
										$FillMode: 2,										//[Optional] The way to fill image in slide, 0: stretch, 1: contain (keep aspect ratio and put all inside slide), 2: cover (keep aspect ratio and cover whole slide), 4: actual size, 5: contain for large image and actual size for small image, default value is 0 
										$Loop: 1,										//[Optional] Enable loop(circular) of carousel or not, 0: stop, 1: loop, 2 rewind, default value is 1 
										$PauseOnHover: 0, 							//[Optional] Whether to pause when mouse over if a slider is auto playing, 0: no pause, 1: pause for desktop, 2: pause for touch device, 3: pause for desktop and touch device, 4: freeze for desktop, 8: freeze for touch device, 12: freeze for desktop and touch device, default value is 1 
										$StartIndex: 0,	//[Optional] Index of slide to display when initialize, default value is 0 
 
									$SlideshowOptions: {                                //[Optional] Options to specify and enable slideshow or not
										$Class: $JssorSlideshowRunner$,                 //[Required] Class to create instance of slideshow
										$Transitions: _SlideshowTransitions,            //[Required] An array of slideshow transitions to play slideshow
										$TransitionsOrder: 0,       //[Optional] The way to choose transition to play slide, 1 Sequence, 0 Random
									}										
									
					, $ArrowNavigatorOptions: {
						$Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
						$ChanceToShow: 1       //[Required] 0 Never, 1 Mouse Over, 2 Always
					}
				, $ThumbnailNavigatorOptions: {
						$Class: $JssorThumbnailNavigator$,              //[Required] Class to create thumbnail navigator instance
						$ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always

						$ActionMode: 1,                                 //[Optional] 0 None, 1 act by click, 2 act by mouse hover, 3 both, default value is 1
						$AutoCenter: 1,                                 //[Optional] Auto center thumbnail items in the thumbnail navigator container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 3
						$Rows: 1,                                      //[Optional] Specify lanes to arrange thumbnails, default value is 1
						$SpacingX: 10,                                   //[Optional] Horizontal space between each thumbnail in pixel, default value is 0
						$SpacingY: 10,                                   //[Optional] Vertical space between each thumbnail in pixel, default value is 0
						$Cols: 16,                              //[Optional] Number of pieces to display, default value is 1
						$ParkingPosition: 182,                          //[Optional] The offset position to park thumbnail
						$Orientation: 1,                                //[Optional] Orientation to arrange thumbnails, 1 horizental, 2 vertical, default value is 1
						$NoDrag: false                            //[Optional] Disable drag or not, default value is false
					}						
									};

									self.jssor_slider2273082 = new $JssorSlider$(containerId, options);										
									
										}; 
							
									//responsive code begin
									//you can remove responsive code if you do not want the slider scales while window resizes
									this.ScaleSlider = function() {		
										var  parentWidth = jqCS2273082("#comSContainer2273082_").parent().width();
										if (parentWidth) {
											self.jssor_slider2273082.$ScaleWidth(Math.min(parentWidth, 440));
										}
										else
											window.setTimeout(self.ScaleSlider, 30);											
									};
				
					this.scriptLoaded = function(options)
					{
				   jqCS2273082 = jQuery2273082.noConflict(false);jqCS2273082("#comslider_in_point_2273082").html('<div id="comSContainer2273082_" name="comSContainer2273082_" style="display: inline-block; text-align: left;  border:0px; width:440px; height:340px; position: relative; top: 0px; left: 0px;"><div data-u="slides" style="position: absolute; left: 0px; top: 0px; width:440px; height:340px; overflow: hidden;"><div idle="10000" id="imgidle_2273082_1334307"><img class="cmskb_image_0" data-u="image" imgw="682" imgh="340" src2="comslider2273082/img/210705153718101.png?ot=1625510930"></img><img data-u="thumb" src="comslider2273082/imgnav/210705153718101.png?timstamp=1625510939"></img></div><div idle="10000" id="imgidle_2273082_1334308"><img class="cmskb_image_1" data-u="image" imgw="440" imgh="591" src2="comslider2273082/img/210705153718102.png?ot=1625510930"></img><img data-u="thumb" src="comslider2273082/imgnav/210705153718102.png?timstamp=1625510939"></img></div><div idle="10000" id="imgidle_2273082_1334309"><img class="cmskb_image_2" data-u="image" imgw="696" imgh="340" src2="comslider2273082/img/210705153718103.png?ot=1625510930"></img><img data-u="thumb" src="comslider2273082/imgnav/210705153718103.png?timstamp=1625510939"></img></div><div idle="10000" id="imgidle_2273082_1334310"><img class="cmskb_image_3" data-u="image" imgw="684" imgh="340" src2="comslider2273082/img/210705153718104.png?ot=1625510930"></img><img data-u="thumb" src="comslider2273082/imgnav/210705153718104.png?timstamp=1625510939"></img></div><div idle="10000" id="imgidle_2273082_1334311"><img class="cmskb_image_4" data-u="image" imgw="685" imgh="340" src2="comslider2273082/img/210705153718105.png?ot=1625510930"></img><img data-u="thumb" src="comslider2273082/imgnav/210705153718105.png?timstamp=1625510939"></img></div><div data-u="any" class="cmspu" style="display:block; position:absolute; top:10px; left:10px;"><a target="_blank" href="https://www.comslider.com" title="Powered by comSlider &#013;&#013;Use premium version to remove this watermark."><img alt="powered by comSlider" src="comslider2273082/imgstatic/cmswatermark.png?v=6"/></a></div></div>                <!-- ThumbnailNavigator Skin Begin -->    <div data-u="thumbnavigator" class="jssort2273082" style="position: absolute; width: 430px; height: 16px; bottom: 17px; left: 10px;">        <!-- Thumbnail Item Skin Begin -->        <style>           /* jssor slider thumbnail navigator skin 2273082 css */            /*            .jssort2273082 .p            (normal)            .jssort2273082 .p:hover      (normal mouseover)            .jssort2273082 .pav          (active)            .jssort2273082 .pav:hover    (active mouseover)            .jssort2273082 .pdn          (mousedown)            */            .jssort2273082 .w            {                position: absolute;                width: 12px;                height: 12px;                box-sizing:content-box;            }            .jssort2273082 .wsub            {                position: absolute;                width: 16px;                height: 16px;            }            .jssort2273082 .pav .wsub, .jssort2273082 .p:hover .wsub            {                position: absolute;                width: 16px;                height: 16px;                top: 0px;                left: 0px;            }            .jssort2273082 .w            {                margin: 0px !important;                border: #FFFFFF 2px solid;            }            .jssort2273082 .p:hover .w,            .jssort2273082 .pav .w, .jssort2273082 .pav:hover .w            {                border: #FFFFFF 2px solid !important;                margin: 0px !important;            }            .jssort2273082 .c            {                width: 16px;                height: 16px;                filter: alpha(opacity=40);                opacity: 0.4;                -moz-transition: opacity .6s;                -webkit-transition: opacity .6s;                -o-transition: opacity .6s;                margin: 0px !important;                background-color: #none;            }            .jssort2273082 .p:hover .c,            .jssort2273082 .pav .c, .jssort2273082 .pav:hover .c            {                 filter: alpha(opacity=40);                 opacity: 0.4;                 background-color: #FFFFFF;             }            .jssort2273082 .pav .c            {                margin: 0px !important;            }                         .jssort2273082 .p:hover .c            {                transition: none;                -moz-transition: none;                -webkit-transition: none;                -o-transition: none;                margin: 0px !important;            }            .jssort2273082 .w, .jssort2273082 .p:hover .w, .jssort2273082 .pav .w, .jssort2273082 .pav:hover .w            {                filter: alpha(opacity=90);                opacity: 0.9;            }        </style>        <div data-u="slides" style="left: 0px; bottom: 0px;">            <div data-u="prototype" class="p" style="position: absolute; width: 16px; height: 16px; top: 0; left: 0;">                <div class="w">                    <thumbnailtemplate style="width: 12px; height: 12px; border: none; position: absolute; top: 0; left: 0;"></thumbnailtemplate>                </div>                <div class="wsub" style="overflow:hidden;">                	<div class="c" style="position: absolute; top: 0; left: 0"></div>                </div>            </div>        </div>        <!-- Thumbnail Item Skin End -->   </div><!-- Arrow Navigator Skin Begin --><style>/* jssor slider arrow navigator skin 02 css *//*.jssora2273082l              (normal).jssora2273082r              (normal).jssora2273082l:hover        (normal mouseover).jssora2273082r:hover        (normal mouseover).jssora2273082ldn            (mousedown).jssora2273082rdn            (mousedown)*/.jssora2273082l, .jssora2273082r, .jssora2273082ldn, .jssora2273082rdn{		filter: alpha(opacity=80);		opacity: 0.8;	position: absolute;	cursor: pointer;	display: block;    overflow:hidden;}.jssora_back_2273082 { filter: alpha(opacity=80);opacity: 0.8; background-repeat: no-repeat;  background-position: center; position:absolute; background-image: url("data:image/svg+xml;utf8,<svg version=\'1.1\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\' x=\'0px\' y=\'0px\' width=\'22px\' height=\'22px\' viewBox=\'0 0 59.414 59.414\' style=\'enable-background:new 0 0 59.414 59.414;\' xml:space=\'preserve\'><g> <polygon style=\'fill:%23FFFFFF;\' points=\'43.854,59.414 14.146,29.707 43.854,0 45.268,1.414 16.975,29.707 45.268,58  \'/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>");}.jssora_back_2273082:hover {cursor:pointer;  filter: alpha(opacity=100);opacity: 1; background-image: url("data:image/svg+xml;utf8,<svg version=\'1.1\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\' x=\'0px\' y=\'0px\' width=\'22px\' height=\'22px\' viewBox=\'0 0 59.414 59.414\' style=\'enable-background:new 0 0 59.414 59.414;\' xml:space=\'preserve\'><g> <polygon style=\'fill:%23FFFFFF;\' points=\'43.854,59.414 14.146,29.707 43.854,0 45.268,1.414 16.975,29.707 45.268,58  \'/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>");}.jssora_forward_2273082 { filter: alpha(opacity=80);opacity: 0.8; background-repeat: no-repeat;  background-position: center; position:absolute; background-image: url("data:image/svg+xml;utf8,<svg version=\'1.1\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\' x=\'0px\' y=\'0px\' width=\'22px\' height=\'22px\' viewBox=\'0 0 59.414 59.414\' style=\'enable-background:new 0 0 59.414 59.414;\' xml:space=\'preserve\'><g> <polygon style=\'fill:%23FFFFFF;\' points=\'15.561,59.414 14.146,58 42.439,29.707 14.146,1.414 15.561,0 45.268,29.707  \'/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>");}.jssora_forward_2273082:hover {cursor:pointer;  filter: alpha(opacity=100);opacity: 1; background-image: url("data:image/svg+xml;utf8,<svg version=\'1.1\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\' x=\'0px\' y=\'0px\' width=\'22px\' height=\'22px\' viewBox=\'0 0 59.414 59.414\' style=\'enable-background:new 0 0 59.414 59.414;\' xml:space=\'preserve\'><g> <polygon style=\'fill:%23FFFFFF;\' points=\'15.561,59.414 14.146,58 42.439,29.707 14.146,1.414 15.561,0 45.268,29.707  \'/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>");} </style><!-- Arrow Left --><div data-u="arrowleft" class="jssora_back_2273082" style="width:22px;height:22px;top:0px;left:0px;" data-autocenter="2" data-scale="0.75" data-scale-left="0.75"></div><!-- Arrow Right --><div data-u="arrowright" class="jssora_forward_2273082" style="width:22px;height:22px;top:0px;right:0px;" data-autocenter="2" data-scale="0.75" data-scale-left="0.75"></div></div>');
                    jqCS2273082("#comslider_in_point_2273082 a").bind('click',  function() { if ((this.name.length > 0) && (isNaN(this.name) == false)) {  self.switchToFrame(parseInt(this.name)); return false;} });
                
					self.jssor_slider2273082_starter("comSContainer2273082_");
							
						self.ScaleSlider();
						jqCS2273082(document).ready(function() {				
							self.ScaleSlider();
						});
						jqCS2273082(window).bind("load", self.ScaleSlider);
						jqCS2273082(window).bind("resize", self.ScaleSlider);
						jqCS2273082(window).bind("orientationchange", self.ScaleSlider);						
					
}
var g_CSIncludes = new Array();
var g_CSLoading = false;
var g_CSCurrIdx = 0; 
 this.include = function(src, last) 
                {
                    if (src != '')
                    {				
                            var tmpInclude = Array();
                            tmpInclude[0] = src;
                            tmpInclude[1] = last;					
                            //
                            g_CSIncludes[g_CSIncludes.length] = tmpInclude;
                    }            
                    if ((g_CSLoading == false) && (g_CSCurrIdx < g_CSIncludes.length))
                    {


                            var oScript = null;
                            if (g_CSIncludes[g_CSCurrIdx][0].split('.').pop().substring(0,3) == 'css')
                            {
                                oScript = document.createElement('link');
                                oScript.href = g_CSIncludes[g_CSCurrIdx][0];
                                oScript.type = 'text/css';
                                oScript.rel = 'stylesheet';

                                oScript.onloadDone = true; 
                                g_CSLoading = false;
                                g_CSCurrIdx++;								
                                if (g_CSIncludes[g_CSCurrIdx-1][1] == true) 
                                        self.scriptLoaded(); 
                                else
                                        self.include('', false);
                            }
                            else
                            {
                                oScript = document.createElement('script');
                                oScript.src = g_CSIncludes[g_CSCurrIdx][0];
                                oScript.type = 'text/javascript';

                                //oScript.onload = scriptLoaded;
                                oScript.onload = function() 
                                { 
                                        if ( ! oScript.onloadDone ) 
                                        {
                                                oScript.onloadDone = true; 
                                                g_CSLoading = false;
                                                g_CSCurrIdx++;								
                                                if (g_CSIncludes[g_CSCurrIdx-1][1] == true) 
                                                        self.scriptLoaded(); 
                                                else
                                                        self.include('', false);
                                        }
                                };
                                oScript.onreadystatechange = function() 
                                { 
                                        if ( ( "loaded" === oScript.readyState || "complete" === oScript.readyState ) && ! oScript.onloadDone ) 
                                        {
                                                oScript.onloadDone = true;
                                                g_CSLoading = false;	
                                                g_CSCurrIdx++;
                                                if (g_CSIncludes[g_CSCurrIdx-1][1] == true) 
                                                        self.scriptLoaded(); 
                                                else
                                                        self.include('', false);
                                        }
                                }
                                
                            }
                            //
                            document.getElementsByTagName("head").item(0).appendChild(oScript);
                            //
                            g_CSLoading = true;
                    }

                }
                

}
objcomSlider2273082 = new comSlider2273082();
objcomSlider2273082.include('comslider2273082/js/jquery-1.10.1.js?ts=1625510939', false);
objcomSlider2273082.include('comslider2273082/js/jquery-ui-1.10.3.effects.js?ts=1625510939', false);
objcomSlider2273082.include('comslider2273082/js/jssor.slider.min_27_5_0.js?ts=1625510939', false);
objcomSlider2273082.include('comslider2273082/js/jssorcap.min.js?ts=1625510939', true);
