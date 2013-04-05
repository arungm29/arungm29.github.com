---
layout: post
title: "Character Encodings in HTML"
description: "An observation"
category: notes
tags: []
---

Here's something I don't get in HTML. Say we have this code:
<code>
<!DOCTYPE html>
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="utf-8"&gt;
</code>
This is how most HTML documents begin. We've specified the character encoding in the fourth line. But in which encoding does the browser parse this code itself? I presume it just reads upto this line in utf-8 (or some other encoding) hoping it won't encounter any special character till that line. It still sounds like a sloppy way to do it. Does anyway actually know how the browser parses this code?
