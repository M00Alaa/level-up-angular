var revapi266,
        tpj;
(function () {
    // if (!/loaded|interactive|complete/.test(document.readyState))
    //     document.addEventListener("DOMContentLoaded", onLoad);
    // else
    
    
    onLoad();
  
        function onLoad() {
        if (tpj === undefined) {
            tpj = jQuery;
            if ("off" == "on")
                tpj.noConflict();
        }
        if (tpj("#rev_slider_31_1").revolution == undefined) {
            revslider_showDoubleJqueryError("#rev_slider_31_1");
        } else{
            var revapi266,
                    tpj;
            (function () {
                if (!/loaded|interactive|complete/.test(document.readyState))
                    document.addEventListener("DOMContentLoaded", onLoad);
                else
                    onLoad();
                function onLoad() {
                    if (tpj === undefined) {
                        tpj = jQuery;
                        if ("off" == "on")
                            tpj.noConflict();
                    }
                    if (tpj("#rev_slider_32_1").revolution == undefined) {
                        revslider_showDoubleJqueryError("#rev_slider_32_1");
                    } else {
                        revapi266 = tpj("#rev_slider_32_1").show().revolution({
                            sliderType: "standard",
                            jsFileLocation: "revolution/js/",
                            sliderLayout: "fullscreen",
                            dottedOverlay: "none",
                            delay: 9000,
                            navigation: {
                                keyboardNavigation: "on",
                                keyboard_direction: "horizontal",
                                mouseScrollNavigation: "off",
                                mouseScrollReverse: "default",
                                onHoverStop: "off",
                                touch: {
                                    touchenabled: "on",
                                    touchOnDesktop: "on",
                                    swipe_threshold: 75,
                                    swipe_min_touches: 1,
                                    swipe_direction: "horizontal",
                                    drag_block_vertical: false
                                }
                            },
                            parallax: {
                                type: "mouse",
                                origo: "slidercenter",
                                speed: 2000,
                                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 46, 47, 48, 49, 50, 55],
                                type: "mouse",
                                disable_onmobile: "on"
                            },
                            responsiveLevels: [1240, 1025, 778, 480],
                            visibilityLevels: [1920, 1500, 1025, 768],
                            gridwidth: [1200, 1025, 778, 480],

                            lazyType: "none",
                            shadow: 0,
                            spinner: "spinner5",
                            stopLoop: "on",
                            stopAfterLoops: 0,
                            stopAtSlide: 1,
                            shuffle: "off",
                            autoHeight: "on",
                            fullScreenAutoWidth: "on",
                            fullScreenAlignForce: "on",
                            fullScreenOffsetContainer: "",
                            fullScreenOffset: "",
                            disableProgressBar: "on",
                            hideThumbsOnMobile: "off",
                            hideSliderAtLimit: 0,
                            hideCaptionAtLimit: 0,
                            hideAllCaptionAtLimit: 0,
                            debugMode: false,
                            fallbacks: {
                                simplifyAll: "off",
                                nextSlideOnWindowFocus: "off",
                                disableFocusListener: false,
                            }
                        });
                    }
                    ; /* END OF revapi call */
                }
                ; /* END OF ON LOAD FUNCTION */
            }()); /* END OF WRAPPING FUNCTION */
        }
        ; /* END OF revapi call */
    }
    ; /* END OF ON LOAD FUNCTION */
}()); /* END OF WRAPPING FUNCTION */