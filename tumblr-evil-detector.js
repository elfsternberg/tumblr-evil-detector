// ==UserScript==
// @name         TumblrEvilDetector
// @namespace    http://elfsternberg.com
// @version      0.1
// @description  Detect if a Tumblr post has an embedded script in it
// @author       Elf M. Sternberg <elf.sternberg@gmail.com>
// @match        http://*.tumblr.com/post/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

function tumblr_reblog_warning() {
    var post = document.querySelectorAll('.post-wrapper script');
    if (post.length > 0) {
        document.body.innerHTML += ('<div style="background-color: rgba(0,0,0,0.6);  float: right; position: absolute; top: 20px; width: 400px; color:limegreen; border: 4px solid limegreen">' +
                                    'SCRIPT DETECTED</div>');
    }
}

window.setTimeout(tumblr_reblog_warning, 500);
