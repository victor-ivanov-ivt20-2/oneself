<style>
.array {
    color: #CE915B;
}
.array:hover {
    color: #CE915B;
}
p {
    text-indent: 25px;
}
code {
  font-family: Consolas,"courier new";
  font-size: 110%;
}
</style>

<h1 align="center">Руководство по <a href="https://vitejs.dev/guide/"><img src="https://camo.githubusercontent.com/61e102d7c605ff91efedb9d7e47c1c4a07cef59d3e1da202fd74f4772122ca4e/68747470733a2f2f766974656a732e6465762f6c6f676f2e737667" height="32px"/> Vite</a>  + <a href="https://ru.reactjs.org/docs/getting-started.html" target="_blank">React <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" height="32px"/></a></h1>
<p align="center">В этом репозитории используется инструмент Vite, а также JS-библиотека React.</p>
<br>
<p>
Vite.js - это один из инструментов для настройки сред разработки. Он не является отдельным фреймворком, а скорее удобным инструментом для автоматизации рабочих процессов внутри проекта, а также взаимодействия с серверной частью. <a href="https://liquidhub.ru/blogs/blog/vite-js">Подробнее вы можете почитать о vite на этом сайте</a>.<br> 
</p>

<p> 
Если вы хотите узнать больше про React, то рекомендую вам [<a class="array" href="https://youtu.be/GNrdg3PzpJQ"> "React JS фундаментальный ютуб курс от А до Я" </a>, <a class="array" href="https://youtube.com/playlist?list=PLiZoB8JBsdznY1XwBcBhHL9L7S_shPGVE"> React-router v6 </a>, ... <span style="font-size: 10px"> сам пока React плохо знаю, поэтому больше порекомендовать не могу :)</span>]
</p>

<br>
<h2 align="center"> Наш репозиторий </h2>
<br>

<p>Чтобы запустить проект нужно написать в консоль <pre><code>npm run dev</code></pre></p>

<p>
Попытаюсь кратко объяснить что за что отвечает (я про файлы), если я где-то написал неправильно, буду благодарен за фитбек!

Первое что вы можете заметить здесь, так это <span style="color: #E2C08D" >package.json</span> и <span style="color: #E2C08D" >package-lock.json</span>. Они нужны для того, чтобы сохранить имена и версии библиотек, которые используются в этом проекте. Если я или кто-нибудь другой захочет склонировать этот репозиторий, то он склонирует его без папки <span style="color: #E2C08D" >node_modules</span> потому, что эта папка весит много и файлов хранит в себе очень много, передача такой папки может занять большое время. Чтобы папка <span style="color: #E2C08D" >node_modules</span> после клонирования появилась нужно прописать: <br><pre><code>npm install</code></pre>

<span style="color: #E2C08D" >vite.config.js</span> - файл конфигурации для vite. <span style="color: #E2C08D" >index.html</span> - наш главный HTML файл, куда и монтируется React.

Далее нас встретят две папки <span style="color: #E2C08D" >src</span> и 
<span style="color: #E2C08D" >public</span>.
Основная папка, где и будет происходит работа - это <span style="color: #E2C08D" >src</span>. Папка <span style="color: #E2C08D" >public</span> служит для статичных файлов, которые никогда не упоминаются в исходном коде (например robots.txt), либо для того, чтобы легко получить его URL-адрес. 

В самой папке <span style="color: #E2C08D" >src</span> находится React, где  <span style="color: #E2C08D" >main.jsx</span> - это инициализатор самого React, а файл  <span style="color: #E2C08D" >App.jsx</span> - это главная страница и первый наш react компонент. В папке  <span style="color: #E2C08D" >pages</span> находятся остальные React компоненты, а в папке  <span style="color: #E2C08D" >assets</span> будут разные изображения и прочие подобные статичные файлы.  
</p> 