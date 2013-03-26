---
layout: default
title: Home
slug: home
---

<article class="posts">
<h2>Recent posts</h2>
<p>I frequently post about what I am currently working on. See my post recent posts below, or check out the <a href='/archives'>Archives</a>.</p>
	<ul>
		{% for post in site.posts limit:2 %}
		<li>
			<div class="content">
							<hgroup>
								<h4><a href="{{ post.url }}">{{ post.title }}</a></h4>
								<p><em>{{ post.date | date:"%d %b" }}</em></p>
							</hgroup>
						</div>
					<p>{{ post.description }}</p>			
		</li>
		{% endfor %}
	</ul>
</article>
