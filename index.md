---
subject: Leo
---
# Bem vindo ao Blog do {{ subject }}
Olá, eu sou o Leo, eu postava bizarrices no meu site e agora tô movendo para esse blog! \
Conheço muita gente, e talvez você seja uma delas, se não, aqui está algumas informações sobre mim: \
Eu uso Arch Linux, sou nerd de programação e gasto meu tempo jogando Operius DX (obrigado Mors) \
Sou um grande fã de Deltarune!

## Posts

{%- for post in collections.posts %}
- [{{ post.data.title }}]({{ post.url}})
{%- endfor %}

_Criado por Leo utilizando {{ eleventy.generator }}_
