# Tumblr Evil Detector

## Description

This is a simple TamperMonkey script that does one thing: warn you if
you're about to reblog a post with a script in it.  Malicious users will
often hide javascript tags in the caption of a photograph which detects
when you're actually looking at the page (through mouse or keyboard
actions) and redirects you a site full of malware, spam, or porn.  This
script is intended to help prevent that, and make your follower's
reading experience more pleasant.

## Installation

You will need Tampermonkey installed in your browser, then install the
Javascript file found in this directory into Tampermonkey.

## Behavior

The URL filter currently only identifies pages on Tumblr that are POST
pages.  If the user has a custom DNS, sadly we can't detect them, but
few if any spammers go to those lengths to snare people.  The current
behavior is that, if a post on the page contains malicious javascript,
that post entry will be decorated with a new border and the footer of
the post will contain a black box with the words "SCRIPT DETECTED."

That's all it does.  It just *tells* you, it doesn't fix anything for
you.  It's very short.  But it's also very effective.

## LICENSE:

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

## AUTHOR:

Me, Elf M. Sternberg <elf.sternberg@gmail.com>
