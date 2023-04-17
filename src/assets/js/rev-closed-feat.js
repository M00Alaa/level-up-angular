
            var revapi263,
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
            if (tpj("#rev_slider_36_1").revolution == undefined) {
                revslider_showDoubleJqueryError("#rev_slider_36_1");
            } else {
                revapi263 = $("#rev_slider_36_1").show().revolution({
                    sliderType: "standard",
                    jsFileLocation: "revolution/js/",
                    sliderLayout: "fullscreen",
                    lazyType: "none",
                    scrolleffect: {
                        blur: "on",
                        maxblur: "20",
                        on_slidebg: "on",
                        direction: "top",
                        multiplicator: "2",
                        multiplicator_layers: "2",
                        tilt: "10",
                        disable_on_mobile: "off",
                    },
                    parallax: {
                        type: "scroll",
                        origo: "slidercenter",
                        speed: 400,
                        levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
                    },
                    shadow: 0,
                    spinner: "spinner3",
                    stopLoop: "off",
                    stopAfterLoops: -1,
                    stopAtSlide: -1,
                    shuffle: "off",
                    /* responsive */
                    responsiveLevels: [1240, 1025, 991, 767],
                    /* grid width and height */
                    gridwidth: [1700, 1024, 991, 767],
                    gridheight: [950, 768, 1200, 1224],
                    /* visibility for Device */
                    visibilityLevels: [1240, 1024, 1024, 480],
                    autoHeight: "off",
                    fullScreenAutoWidth: "off",
                    fullScreenAlignForce: "off",
                    fullScreenOffsetContainer: "",
                    fullScreenOffset: "0",
                    hideThumbsOnMobile: "off",
                    hideSliderAtLimit: 0,
                    hideCaptionAtLimit: 0,
                    hideAllCaptionAtLilmit: 0,
                    debugMode: false,
                    fallbacks: {
                        simplifyAll: "off",
                        nextSlideOnWindowFocus: "off",
                        disableFocusListener: false,
                    }
                });
            }
            ; /* END OF revapi call */
            BubbleMorphAddOn(jQuery, revapi263, false)
        }
        ; /* END OF ON LOAD FUNCTION */
    }());
