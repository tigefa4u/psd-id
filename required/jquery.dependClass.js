/*
 * Depend Class v0.1b : attach class based on first class in list of current element
 * File: jquery.dependClass.js
 * Copyright (c) 2009 Egor Hmelyoff, hmelyoff@gmail.com
 */

(function(a){a.baseClass=function(b){b=a(b);return b.get(0).className.match(/([^ ]+)/)[1]};a.fn.addDependClass=function(b,d){var e={delimiter:d?d:"-"};return this.each(function(){var c=a.baseClass(this);c&&a(this).addClass(c+e.delimiter+b)})};a.fn.removeDependClass=function(b,d){var e={delimiter:d?d:"-"};return this.each(function(){var c=a.baseClass(this);c&&a(this).removeClass(c+e.delimiter+b)})};a.fn.toggleDependClass=function(b,d){var e={delimiter:d?d:"-"};return this.each(function(){var c=a.baseClass(this);
c&&(a(this).is("."+c+e.delimiter+b)?a(this).removeClass(c+e.delimiter+b):a(this).addClass(c+e.delimiter+b))})}})(jQuery);