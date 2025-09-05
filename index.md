---
layout: base.njk
title: Bem-vindo ao Blog do Leo
---

# Bem-vindo ao Blog do Leo

Olá, eu sou o Leo, eu postava bizarrices no meu site e agora tô movendo para esse blog!  
Conheço muita gente, e talvez você seja uma delas. Se não, aqui estão algumas informações sobre mim:  
Eu uso Arch Linux, sou nerd de programação e gasto meu tempo jogando Operius DX (obrigado Mors)  
Sou um grande fã de Deltarune!

## Posts

{% for post in collections.posts | reverse %}
- [{{ post.data.title }}]({{ post.url | url }})
{% endfor %}

_Criado por Leo utilizando {{ eleventy.generator }}_
