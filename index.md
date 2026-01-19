---
layout: base.njk
title: Bem-vindo ao meu blog!
---

# Bem-vindo ao meu blog!
Opa, meu nome é Leonardo e esse é o meu blog pessoal.
Eu criei faz alguns meses para documentar minha vida na programação e no TI.
Eu não tenho nenhum motivo para manter esse site, mas mesmo assim, eu faço.

## Posts

{% for post in collections.posts | reverse %}
- [{{ post.data.title }}]({{ post.url | url }})
{% endfor %}

_Criado por Leo utilizando {{ eleventy.generator }}_
